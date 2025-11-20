import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import type { PanInfo } from "framer-motion";
import React from "react";
import type { JSX } from "react";
import { FaChild, FaHeart, FaPaintBrush, FaBookOpen } from "react-icons/fa";

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
  image?: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseHeight?: number;
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function Carousel({
  items,
  baseWidth = 300,
  baseHeight = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps): JSX.Element {
  const [dimensions, setDimensions] = useState({ width: baseWidth, height: baseHeight });
  const containerPadding = 16;
  const itemWidth = dimensions.width - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newWidth = Math.min(baseWidth, containerWidth);
        const aspectRatio = baseHeight / baseWidth;
        const newHeight = newWidth * aspectRatio;
        setDimensions({ width: newWidth, height: newHeight });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [baseWidth, baseHeight]);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) =>
          Math.min(prev + 1, carouselItems.length - 1)
        );
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div className="relative w-full max-w-full" style={{ maxWidth: `${baseWidth}px` }}>
      <div
        ref={containerRef}
        className={`relative overflow-hidden w-full ${
          round
            ? "rounded-full border border-white p-2 sm:p-4"
            : "rounded-2xl bg-white shadow-lg border border-gray-100"
        }`}
        style={{
          height: round ? `${dimensions.height}px` : `${dimensions.height}px`,
        }}
      >
        <motion.div
          className="flex h-full p-2 sm:p-4"
          drag="x"
          {...dragProps}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            x,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(currentIndex * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationComplete={handleAnimationComplete}
        >
          {carouselItems.map((item, index) => {
            return (
              <motion.div
                key={`${item.id}-${index}`}
                className={`relative shrink-0 flex flex-col ${
                  round
                    ? "items-center justify-center text-center bg-[#060010] border-0"
                    : "bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl"
                } cursor-grab active:cursor-grabbing transition-all duration-300`}
                style={{
                  width: itemWidth,
                  height: round ? itemWidth : dimensions.height - 16,
                  ...(round && { borderRadius: "50%" }),
                }}
                transition={effectiveTransition}
              >
                {item.image && (
                  <div className="relative w-full flex-1 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      style={{
                        minHeight: "200px",
                        maxHeight: "100%",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/30 to-transparent" />
                  </div>
                )}

                <div
                  className={`${
                    item.image
                      ? "absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-8 text-white"
                      : "p-3 sm:p-6 flex-1 flex flex-col justify-center"
                  }`}
                >
                  {!round && item.icon && (
                    <div 
                      className={`flex items-center justify-center h-[40px] w-[40px] sm:h-[48px] sm:w-[48px] md:h-[56px] md:w-[56px] rounded-full mb-3 sm:mb-4 md:mb-5 mx-auto shadow-lg transition-transform duration-300 hover:scale-110 ${
                        index === 0 ? 'bg-cyan-500' : 
                        index === 1 ? 'bg-amber-400' : 
                        index === 2 ? 'bg-orange-400' : 
                        'bg-gradient-to-br from-cyan-500 to-amber-400'
                      }`}
                    >
                      <div className="text-white text-xl sm:text-2xl md:text-3xl">
                        {item.icon}
                      </div>
                    </div>
                  )}

                  <h3
                    className={`font-bold text-base sm:text-lg md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 text-center ${
                      item.image ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]" : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm sm:text-base md:text-lg lg:text-xl text-center leading-relaxed font-medium ${
                      item.image ? "text-gray-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex justify-center mt-5 sm:mt-6 md:mt-7">
        <div className="flex gap-2 sm:gap-2.5 md:gap-3 bg-white rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 shadow-md border border-gray-200">
          {items.map((_, index) => (
            <motion.button
              key={index}
              className={`rounded-full transition-all duration-300 ${
                currentIndex % items.length === index
                  ? "bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 w-8 h-3 sm:w-10 sm:h-3.5 md:w-12 md:h-4"
                  : "bg-gray-300 hover:bg-gray-400 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1 : 0.9,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}