"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import type React from "react" // Added import for React

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formState)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 px-4 md:px-8">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>
      <motion.form
        className="max-w-md mx-auto"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formState.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </motion.form>
    </section>
  )
}

