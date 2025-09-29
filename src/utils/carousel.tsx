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
  image?: string
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

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: "Arenero de Juegos",
    description: "Espacio dedicado al juego libre y la exploración sensorial donde los niños desarrollan su creatividad.",
    id: 1,
    icon: <FaChild className="h-[16px] w-[16px] text-white" />,
    image: '/images/carrusel/arenero.JPG',
  },
  {
    title: "Gimnasio Infantil",
    description: "Área de desarrollo psicomotriz donde fortalecemos habilidades físicas y coordinación.",
    id: 2,
    icon: <FaHeart className="h-[16px] w-[16px] text-white" />,
    image: '/images/carrusel/Gym.jpeg',
  },
  {
    title: "Comedor",
    description: "Capturando los momentos más especiales del crecimiento y desarrollo de nuestros pequeños.",
    id: 3,
    icon: <FaPaintBrush className="h-[16px] w-[16px] text-white" />,
    image: '/images/carrusel/Comedor.jpeg',
  },
  {
    title: "Nuestros Docentes",
    description: "Profesionales especializados comprometidos con la educación integral de cada niño y niña.",
    id: 4,
    icon: <FaBookOpen className="h-[16px] w-[16px] text-white" />,
    image: '/images/carrusel/docente.jpg',
  }
];

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  baseHeight = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps): JSX.Element {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  
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
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
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
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${
        round
          ? "rounded-full border border-white p-4"
          : "rounded-[24px] border border-[#333] bg-amber-400 shadow-xl"
      }`}
      style={{
        width: `${baseWidth}px`,
        height: round ? `${baseHeight}px` : `${baseHeight + 48}px`,
      }}
    >
      <motion.div
        className="flex h-full p-4 pb-12"
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
                  : "bg-white border border-[#ddd] rounded-[16px] overflow-hidden"
              } shadow-lg cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : baseHeight - 32,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              {/* Imagen */}
              {item.image && (
                <div className="relative w-full flex-1 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    style={{
                      minHeight: '250px',
                      maxHeight: '350px'
                    }}
                  />
                  {/* Overlay gradient para mejor legibilidad del texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              )}
              
              {/* Contenido */}
              <div className={`${
                item.image 
                  ? "absolute bottom-0 left-0 right-0 p-6 text-white" 
                  : "p-6 flex-1 flex flex-col justify-center"
              }`}>
                {/* Icono */}
                {!round && (
                  <div className="flex items-center justify-center h-[40px] w-[40px] rounded-full bg-[#060010] mb-3 mx-auto">
                    {item.icon}
                  </div>
                )}
                
                {/* Título */}
                <h3 className={`font-bold text-lg mb-2 text-center ${
                  item.image ? "text-white" : "text-[#333]"
                }`}>
                  {item.title}
                </h3>
                
                {/* Descripción */}
                <p className={`text-sm text-center leading-relaxed ${
                  item.image ? "text-gray-100" : "text-[#666]"
                }`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
          {items.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentIndex % items.length === index
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}