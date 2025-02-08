"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className=" bg-zinc-950 py-20 px-4 md:px-8">
      <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl sm:text-6xl md:text-8xl font-bold text-start"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        SOBRE MI
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        
        <motion.div
          className="h-40 w-40 md:w-96 md:h-96 relative rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/FotoPortfolio2.png"
            alt="Developer"
            layout="fill"
            priority
          />
        </motion.div>
        <motion.div
          className="max-w-md text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm  mb-4">
            Mi nombre es Octavio. Tengo 26 años y actualmente estoy estudiando
            mi quinto y último año de la carrera de Ingeniería en Sistemas de
            Información en la facultad Cuenca del Plata en la ciudad de Posadas
            Misiones, Argentina. Anteriormente estuve estudiando en la facultad
            UTN en Buenos Aires la misma carrera hasta segundo año, pero tuve
            que volver a Misiones por razones personales.
          </p>
          <p className="text-sm mb-4">
            Tengo facilidad para el trabajo en equipo ya que en mi actual
            trabajo se necesita dicha aptitud todo el tiempo para llevar a cabo
            los objetivos. Actualmente en el tiempo libre que tengo realizo
            cursos sobre lenguajes que me puedan servir a futuro, como Nextjs,
            Javascript, e Ingles en el mundo IT, etc.
          </p>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
