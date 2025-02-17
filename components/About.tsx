"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <section className=" bg-zinc-900 py-20 px-4 md:px-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start sm:flex-row justify-between sm:items-center mb-8 sm:mb-16 gap-6 sm:gap-0">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
            SOBRE MI
          </h2>
          <div className="text-center">
            <Link
              href="/Octavio Duarte CV.pdf"
              className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
            >
              MI CURRICULUM <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8 sm:py-12 border-t border-gray-800">
          <motion.div
            className="h-40 w-40 md:w-96 md:h-96 relative rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/FotoPortfolio.jpeg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Descripción de la imagen"
            />
          </motion.div>
          <motion.div
            className="max-w-md text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm  mb-4">
            Soy Octavio, ingeniero en sistemas de información en formación, actualmente cursando el último año de mi carrera en la Universidad de la Cuenca del Plata, en Posadas, Misiones, Argentina.
            </p>
            <p className="text-sm mb-4">
            Cuento con una sólida capacidad para el trabajo en equipo, adquirida tanto en mi formación académica como en mi experiencia laboral. Me especializo en el desarrollo de software y me mantengo en constante actualización a través de cursos y certificaciones en tecnologías como Next.js, react y el idioma inglés aplicado al ámbito IT.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
