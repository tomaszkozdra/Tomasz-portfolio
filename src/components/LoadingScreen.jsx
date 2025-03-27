import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IconBrandReact,
  IconBrandNodejs,
  IconBrandJavascript,
} from "@tabler/icons-react";

// Hook efektu typewriter z kasowaniem
function useTypewriter(
  fullText,
  typingSpeed = 120,
  deletingSpeed = 80,
  pauseDelay = 2500
) {
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (!isDeleting && index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplay(fullText.substring(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplay(fullText.substring(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    } else if (!isDeleting && index === fullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, pauseDelay);
    }
    return () => clearTimeout(timeout);
  }, [
    display,
    isDeleting,
    index,
    fullText,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
  ]);

  return display;
}

// Warianty animacji kontenera ikon
const containerVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.3,
    },
  },
};

// Warianty animacji każdej ikony
const iconVariants = {
  hidden: { scale: 0, rotate: -45, opacity: 0 },
  visible: {
    scale: [1, 1.2, 1],
    rotate: [0, 10, 0],
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const LoadingScreen = () => {
  // Użycie hooka typewriter do tekstu "Ładowanie..."
  const typewriterText = useTypewriter("Ładowanie...", 120, 80, 2500);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] px-4"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Import czcionki Poppins */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Animowany kontener ikon */}
      <motion.div
        className="flex space-x-8 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[IconBrandReact, IconBrandNodejs, IconBrandJavascript].map(
          (Icon, index) => (
            <motion.div
              key={index}
              variants={iconVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-white"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: "linear",
                }}
              >
                <Icon size={70} strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          )
        )}
      </motion.div>

      {/* Nowoczesny napis z efektem typewriter i minimalistycznym designem */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex items-center"
      >
        <h1 className="text-4xl font-semibold text-white tracking-wide drop-shadow-lg">
          {typewriterText}
        </h1>
        <span
          className="ml-2 text-4xl text-white"
          style={{
            animation: "blinkCursor 1s step-end infinite",
            fontWeight: 400,
          }}
        >
          |
        </span>
      </motion.div>

      {/* Dodatkowe style dla migającego kursora */}
      <style jsx>{`
        @keyframes blinkCursor {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
