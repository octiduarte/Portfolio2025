"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Instagram, ChevronDown } from "lucide-react";
import { Fira_Code } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";
import { BsWhatsapp } from "react-icons/bs";

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function Hero() {
  const [text, setText] = useState("");
  const fullText =
    "const developer = {\n  nombre: 'Octavio Duarte',\n  skills: ['JavaScript', 'React', 'Nextjs'],\n  pasion: 'Crear las mejores paginas webs'\n};";

  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);

    return () => clearInterval(typingEffect);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPositions(
        [...Array(20)].map(() => ({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }))
      );
    }
  }, []);

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        {positions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute text-zinc-100 whitespace-nowrap"
            initial={{ y: -100, x: pos.x }}
            animate={{
              y: window.innerHeight + 100,
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
            }}
          >
            {"{"}
            {'"'}
            {"}"}
            {"</>"}
            {"[]"}
          </motion.div>
        ))}
      </div>
      <div className="z-10 text-center">
        <motion.h1
          className={`text-5xl sm:text-6xl md:text-8xl font-bold ${firaCode.className} flex flex-col sm:flex-row sm:space-x-4 sm:items-center sm:justify-center`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>TRAINEE</span>
          <span>DEVELOPER</span>
        </motion.h1>
        <motion.div
          className="bg-zinc-800 p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <pre
            className={`text-left text-xs md:text-base ${firaCode.className}`}
          >
            <code>{text}</code>
          </pre>
        </motion.div>
        <motion.div
          className="my-3 space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link href="https://github.com/octiduarte" target="_blank">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/octavio-duarte-19a695237/"
            target="_blank"
          >
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="https://wa.me/5491133722655" target="_blank">
            <Button variant="outline" size="icon">
              <BsWhatsapp className="h-4 w-4" />
              <span className="sr-only">Whatsapp</span>
            </Button>
          </Link>
          <Link href="mailto:octaviomartinduarte@gmail.com">
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <ChevronDown className="h-8 w-8 text-zinc-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
