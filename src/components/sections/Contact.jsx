"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";
import Label from "./ui/label";
import Input from "./ui/input";
import { cn } from "./ui/lib/utils";
import emailjs from "emailjs-com";

const toastVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const ContactUsForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Walidacja: jeśli któreś pole jest puste
    if (!formValues.name || !formValues.email || !formValues.message) {
      setError("Wszystkie pola są wymagane.");
      return;
    }
    setError("");
    console.log("Formularz wysłany");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormValues({ name: "", email: "", message: "" });
          setToastMessage("Wiadomość wysłana pomyślnie!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Automatyczne usuwanie toasta po 3 sekundach
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <>
      <motion.div
        className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black mt-30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-xl font-bold text-neutral-800 dark:text-neutral-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Skontaktuj się ze mną!
        </motion.h2>
        <motion.p
          className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Chętnie Cię wysłucham! Proszę, wypełnij poniższy formularz.
        </motion.p>

        <motion.form
          className="my-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="name">Twoje Imię</Label>
              <Input
                id="name"
                name="name"
                placeholder="Jan Kowalski"
                type="text"
                value={formValues.name}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Adres Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="twoj-email@example.com"
              type="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Wiadomość</Label>
            <textarea
              id="message"
              name="message"
              placeholder="Twoja wiadomość tutaj..."
              className="w-full rounded-md border p-3 text-sm text-neutral-800 dark:bg-black dark:text-neutral-200"
              rows="4"
              value={formValues.message}
              onChange={handleChange}
            />
          </LabelInputContainer>

          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

          <motion.button
            className="group/btn relative block h-10 w-full cursor-pointer rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Wyślij &rarr;
            <BottomGradient />
          </motion.button>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </motion.form>
      </motion.div>

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-5 right-5 flex items-center gap-2 bg-black text-white px-4 py-3 rounded-lg shadow-lg"
          >
            <IconCheck size={24} className="text-green-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default ContactUsForm;
