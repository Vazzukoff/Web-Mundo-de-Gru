import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import type { PanInfo } from "framer-motion";
import React from "react";
import type { JSX } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface CarouselItem {
  title: string;
  id: number;
  icon?: React.ReactNode;
  image?: string;
  description?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
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
  const getContainerPadding = () => {
    if (typeof window === 'undefined') return 16;
    return window.innerWidth < 640 ? 4 : 16;
  };

  const [containerPadding, setContainerPadding] = useState(getContainerPadding);

  const getInitialDimensions = () => {
    if (typeof window === 'undefined') return { width: baseWidth, height: baseHeight };
    const viewportWidth = window.innerWidth;
    const margin = viewportWidth < 640 ? 8 : 32;
    const containerWidth = Math.min(viewportWidth - margin, baseWidth);
    const aspectRatio = baseHeight / baseWidth;
    const calculatedHeight = containerWidth * aspectRatio;
    return { width: containerWidth, height: calculatedHeight };
  };

  const [dimensions, setDimensions] = useState(getInitialDimensions);
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
        const viewportWidth = window.innerWidth;
        const margin = viewportWidth < 640 ? 8 : 32;
        const padding = viewportWidth < 640 ? 4 : 16;

        setContainerPadding(padding);

        const containerWidth = Math.min(containerRef.current.offsetWidth, baseWidth);
        const actualWidth = Math.min(containerWidth, viewportWidth - margin);
        const aspectRatio = baseHeight / baseWidth;
        const newHeight = actualWidth * aspectRatio;

        setDimensions({ width: actualWidth, height: newHeight });
      }
    };

    updateDimensions();

    let timeoutId: NodeJS.Timeout;
    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDimensions, 100);
    };

    window.addEventListener('resize', debouncedUpdate);
    return () => {
      window.removeEventListener('resize', debouncedUpdate);
      clearTimeout(timeoutId);
    };
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
          if (prev === items.length - 1 && loop) return prev + 1;
          if (prev === carouselItems.length - 1) return loop ? 0 : prev;
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

  const handleNext = () => {
    if (loop && currentIndex === items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex((prev) =>
        Math.min(prev + 1, carouselItems.length - 1)
      );
    }
  };

  const handlePrevious = () => {
    if (loop && currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleDragEnd = (_: any, info: PanInfo): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      handleNext();
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      handlePrevious();
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
      <div className="relative">
        <div
          ref={containerRef}
          className={`relative overflow-hidden w-full ${
            round
              ? "rounded-full border border-white p-2 sm:p-4"
              : "rounded-2xl bg-white shadow-lg border border-gray-100"
          }`}
          style={{ height: `${dimensions.height}px` }}
        >
          <motion.div
            className="flex h-full p-2 sm:p-4"
            drag="x"
            {...dragProps}
            style={{ width: itemWidth, gap: `${GAP}px`, x }}
            onDragEnd={handleDragEnd}
            animate={{ x: -(currentIndex * trackItemOffset) }}
            transition={effectiveTransition}
            onAnimationComplete={handleAnimationComplete}
          >
            {carouselItems.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className={`relative shrink-0 ${
                  round
                    ? "items-center justify-center text-center bg-[#060010] border-0"
                    : "bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl"
                } cursor-grab active:cursor-grabbing transition-all duration-300`}
                style={{
                  width: itemWidth,
                  height: round ? itemWidth : dimensions.height - containerPadding * 2,
                  ...(round && { borderRadius: "50%" }),
                }}
                transition={effectiveTransition}
              >
                {item.image && (
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Controles */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
        >
          <FaChevronLeft className="text-lg sm:text-xl md:text-2xl" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
        >
          <FaChevronRight className="text-lg sm:text-xl md:text-2xl" />
        </button>
      </div>

      {/* Info del item */}
      <div className="mt-6 mb-4 px-4 text-center">
        {items[currentIndex % items.length].icon && (
          <div className="flex items-center justify-center h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] md:h-[64px] md:w-[64px] rounded-full mb-4 mx-auto shadow-lg bg-gradient-to-br from-cyan-500 to-amber-400">
            <div className="text-white text-2xl sm:text-3xl">
              {items[currentIndex % items.length].icon}
            </div>
          </div>
        )}

        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl mb-3 text-gray-800">
          {items[currentIndex % items.length].title}
        </h3>

        {items[currentIndex % items.length].description && (
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
            {items[currentIndex % items.length].description}
          </p>
        )}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-5 sm:mt-6 md:mt-7">
        <div className="flex gap-2 sm:gap-2.5 md:gap-3 bg-white rounded-full px-4 py-2 shadow-md border border-gray-200">
          {items.map((_, index) => (
            <motion.button
              key={index}
              className={`rounded-full transition-all duration-300 ${
                currentIndex % items.length === index
                  ? "bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-400 w-8 h-3"
                  : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
              }`}
              animate={{ scale: currentIndex % items.length === index ? 1 : 0.9 }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}