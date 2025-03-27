"use client";
import React from "react";
import { motion } from "framer-motion";
import CodeBlockDemo from "./Codeblock";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-12 mt-20">
      {/* Nagłówek */}
      <motion.h1
        className="text-5xl font-extrabold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Jestem Tomasz
      </motion.h1>

      {/* Opis */}
      <motion.p
        className="text-lg text-gray-300 max-w-xl text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        Mam 17 lat i jestem full stack developerem. Tworzę nowoczesne i
        responsywne aplikacje webowe z pasją i precyzją.
      </motion.p>

      {/* Zdjęcie */}
      <motion.div
        className="overflow-hidden rounded-lg shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&h=400&q=80"
          alt="Portfolio"
          className="rounded-lg"
        />
      </motion.div>

      {/* CodeBlock */}
      <motion.div
        className="w-full max-w-2xl bg-gray-900 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
      >
        <CodeBlockDemo />
      </motion.div>
    </div>
  );
};

export default About;
