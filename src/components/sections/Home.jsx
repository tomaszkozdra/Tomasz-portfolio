"use client";
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { BentoGridThirdDemo } from "./BentoGridThirdDemo"; // Zaktualizuj ścieżkę, jeśli to konieczne
import TimelineDemo from "./Timeline";
import ContainerScroll from "./ContainerScroll";
// Import ikon z Tabler Icons
import {
  IconBrandReact,
  IconBrandVite,
  IconBrandTailwind,
  IconBrandHtml5,
  IconBrandGithub,
} from "@tabler/icons-react";

// Komponent z animowanymi ikonami
const IconRow = () => {
  const icons = [
    { Component: IconBrandReact, key: "react" },
    { Component: IconBrandVite, key: "vite" },
    { Component: IconBrandTailwind, key: "tailwindcss" },
    { Component: IconBrandHtml5, key: "html" },
    { Component: IconBrandGithub, key: "github" },
  ];

  return (
    <div className="flex flex-row justify-center items-center space-x-6 mb-6">
      {icons.map(({ Component, key }) => (
        <motion.div
          key={key}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Component size={32} className="text-white" />
        </motion.div>
      ))}
    </div>
  );
};

const Spotlight = ({
  // Zwiększone wartości alfa, by efekt był bardziej widoczny
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .15) 0, hsla(210, 100%, 55%, .07) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .12) 0, hsla(210, 100%, 55%, .07) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 45%, .07) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
} = {}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <motion.div
        animate={{ x: [0, xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>
      <motion.div
        animate={{ x: [0, -xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black relative overflow-hidden">
        <Spotlight />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
            Cześć, jestem Tomek
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-neutral-300">
            Tworzę nowoczesne aplikacje webowe i interfejsy.
          </p>
        </div>

        {/* Dodanie gridu */}

        {/* Dodajemy animowany rząd ikon nad przyciskiem */}
        <div className="mt-10 relative z-10">
          <IconRow />
        </div>

        {/* Przycisk "Skontaktuj się" */}
        <div className="mt-6 w-full flex justify-center relative z-10">
          <NavLink to={"/contact"}>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer px-4 py-2"
            >
              Skontaktuj się
            </HoverBorderGradient>
          </NavLink>
        </div>
      </div>
      <BentoGridThirdDemo />
      <TimelineDemo />
      <ContainerScroll />
    </div>
  );
}
