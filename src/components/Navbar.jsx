"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "./sections/ui/lib/utils";
import { NavLink, useLocation } from "react-router-dom";
import { IconHome, IconMessage, IconUser, IconMail } from "@tabler/icons-react";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: (
      <IconHome className="h-5 w-5 sm:h-4 sm:w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "About",
    link: "/about",
    icon: (
      <IconUser className="h-5 w-5 sm:h-4 sm:w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "My Works",
    link: "/works",
    icon: (
      <IconMessage className="h-5 w-5 sm:h-4 sm:w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

const Navbar = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const diff = current - previous;
      setExpanded(diff < 0);
    }
  });

  return (
    <motion.div
      animate={{
        paddingLeft: expanded ? "3.5rem" : "1.5rem",
        paddingRight: expanded ? "3.5rem" : "1.5rem",
      }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full dark:bg-black bg-white shadow-md z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
        className
      )}
    >
      {/* Lewa część: zdjęcie i napis opakowane w link do /about */}
      <NavLink to="/about">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center sm:space-x-2 cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=50&h=50&q=80"
            alt="Tomasz"
            className="h-8 w-8 rounded-full object-cover"
          />
          <motion.span
            initial={{ opacity: 1, width: "auto" }}
            animate={{
              opacity: expanded ? 1 : 0,
              width: expanded ? "auto" : 0,
            }}
            transition={{ duration: 0.2 }}
            className="hidden sm:block overflow-hidden whitespace-nowrap text-sm text-neutral-600 dark:text-neutral-50"
          >
            Tomasz
          </motion.span>
        </motion.div>
      </NavLink>

      {/* Nawigacja */}
      {navItems.map((navItem, idx) => {
        const isActive = navItem.link === location.pathname;
        return (
          <NavLink key={`link=${idx}`} to={navItem.link}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative flex items-center sm:space-x-2 px-2 py-1 sm:px-3 sm:py-2 rounded-full",
                "sm:border sm:border-transparent sm:hover:border-neutral-200 dark:sm:hover:border-white/[0.2]"
              )}
            >
              <span className="h-5 w-5">{navItem.icon}</span>
              <span className="hidden sm:block text-sm text-neutral-600 dark:text-neutral-50">
                {navItem.name}
              </span>
              <span
                className="absolute left-0 right-0 -bottom-1 h-[2px] rounded"
                style={{
                  background: isActive
                    ? "linear-gradient(to right, transparent, #3b82f6, transparent)"
                    : "transparent",
                }}
              />
            </motion.div>
          </NavLink>
        );
      })}

      {/* Przycisk kontakt */}
      <NavLink to={"/contact"}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "relative text-sm font-medium rounded-full cursor-pointer px-2 py-1 sm:px-4 sm:py-2",
            "sm:border sm:border-neutral-200 dark:sm:border-white/[0.2]"
          )}
        >
          {/* Na urządzeniach >= sm wyświetlamy napis "Contact" */}
          <span className="hidden sm:block">Contact</span>
          {/* Na mniejszych urządzeniach wyświetlamy ikonę */}
          <span className="sm:hidden">
            <IconMail className="h-5 w-5 sm:h-4 sm:w-4" />
          </span>
          <span className="absolute left-0 right-0 -bottom-px h-px rounded bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </motion.button>
      </NavLink>
    </motion.div>
  );
};

export default Navbar;
