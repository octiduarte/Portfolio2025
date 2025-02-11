"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
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
              MI CURRICULUM
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
              src="/FotoPortfolio2.png"
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
              Mi nombre es Octavio. Tengo 26 años y actualmente estoy estudiando
              mi quinto y último año de la carrera de Ingeniería en Sistemas de
              Información en la facultad Cuenca del Plata en la ciudad de
              Posadas Misiones, Argentina. Anteriormente estuve estudiando en la
              facultad UTN en Buenos Aires la misma carrera hasta segundo año,
              pero tuve que volver a Misiones por razones personales.
            </p>
            <p className="text-sm mb-4">
              Tengo facilidad para el trabajo en equipo ya que en mi actual
              trabajo se necesita dicha aptitud todo el tiempo para llevar a
              cabo los objetivos. Actualmente en el tiempo libre que tengo
              realizo cursos sobre lenguajes que me puedan servir a futuro, como
              Nextjs, Javascript, e Ingles en el mundo IT, etc.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
