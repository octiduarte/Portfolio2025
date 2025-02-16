"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Poder Judicial de Misiones",
    position: "MESA DE ENTRADA",
    period: "2020 - 2021",
    description:
      "Atención al público y orientación sobre trámites y procedimientos. Coordinación con diferentes áreas para agilizar la resolución de solicitudes.",
  },
  {
    company: "Poder Judicial de Misiones: Centro de Capacitacion y Gestion Judicial",
    position: "ADMINISTRATIVO",
    period: "2021 - 2024",
    description:
      "Administración y organización de Capacitaciones. Coordinación de inscripciones, asistencia y certificaciones de los cursos.",
  },
  {
    company: "Poder Judicial de Misiones",
    position: "SOFTWARE TESTER",
    period: "2024 - Presente",
    description:
      "Testeo de Software y correcion de errores. Uso de metodologías ágiles para la planificación y ejecución de pruebas.",
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-start mb-8 sm:mb-16">EXPERIENCIA</h2>
        <div className="relative py-8 sm:py-12 border-t border-gray-800">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.period}
              className="mb-8 flex"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center z-10">
                <span className="text-sm md:text-xl font-bold">{index + 1}</span>
              </div>
              <div className="ml-8">
                <h3 className="text-2xl sm:text-4xl font-bold">{exp.position}</h3>
                <p className="text-gray-400 mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-sm text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="absolute top-8 bottom-0 left-6 w-0.5 bg-zinc-800 z-0" />
        </div>
      </div>
    </section>
  );
}
