"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Fira_Code } from "next/font/google"

const firaCode = Fira_Code({ subsets: ["latin"] })

export default function Hero() {
  const [text, setText] = useState("")
  const fullText =
    "const developer = {\n  nombre: 'Octavio Duarte',\n  skills: ['JavaScript', 'React', 'Nextjs'],\n  pasion: 'Crear las mejores paginas webs'\n};"

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 50)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <section className=" h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500 whitespace-nowrap"
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
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
          className={`text-4xl sm:text-6xl md:text-8xl font-bold ${firaCode.className}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TRAINEE DEVELOPER
        </motion.h1>
        <motion.div
          className="bg-zinc-800   p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <pre className={`text-left text-xs md:text-base ${firaCode.className}`}>
            <code>{text}</code>
          </pre>
        </motion.div>
      </div>
      
    </section>
  )
}

