"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Używamy framer-motion
import { cn } from "./lib/utils"; // Importujemy funkcję cn z pliku utils.js

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = (currentDirection) => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap = {
    TOP: "radial-gradient(30% 60% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)", // Subtelniejszy gradient
    LEFT: "radial-gradient(25% 60% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)", // Subtelniejszy gradient
    BOTTOM:
      "radial-gradient(30% 60% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)", // Subtelniejszy gradient
    RIGHT:
      "radial-gradient(25% 60% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)", // Subtelniejszy gradient
  };

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-[8px] border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-4 h-min justify-center overflow-visible p-1", // Jeszcze bardziej zmniejszony padding
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-3 py-1.5 rounded-[inherit]", // Jeszcze mniejszy padding, aby tekst był naprawdę blisko ramki
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[3px] rounded-[100px]" />

      {/* Poświata za przyciskiem przy najechaniu */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] shadow-[0px 0px 10px rgba(255, 255, 255, 0.2)]"
        style={{
          opacity: hovered ? 1 : 0, // Poświata będzie widoczna tylko po najechaniu
        }}
        transition={{ ease: "ease-out", duration: 0.3 }}
      />
    </Tag>
  );
}
