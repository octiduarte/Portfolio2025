"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_pove626", // Reemplaza con tu Service ID
        "template_t1e7emr", // Reemplaza con tu Template ID
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        "jkoHblwbLAFqpREXY" // Reemplaza con tu Public Key de EmailJS
      )
      .then(
        () => {
          alert("Mensaje enviado con éxito");
          setFormState({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-4 md:px-8">
      <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        CONTACTAME
      </motion.h2>
      <motion.form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            type="text"
            name="name"
            placeholder="Tu Nombre"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            name="email"
            placeholder="Tu Email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Textarea
            name="message"
            placeholder="Tu Mensaje"
            value={formState.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors">
          Enviar Mensaje
        </Button>
      </motion.form>
    </section>
  );
}
