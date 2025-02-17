import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-16 gap-6 sm:gap-0">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
            MIS <br /> SERVICIOS
          </h2>
          <div className="max-w-md">
            <Link
              href="https://wa.me/5491133722655"
              className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
            >
              Iniciar un proyecto <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 py-8 sm:py-12 border-t border-gray-800">
          {[
            {
              number: "01",
              title: "DISEÑO WEB",
              descriptions: [
                "Diseño interfaces atractivas y fáciles de usar, asegurando una navegación intuitiva.",
                "Me enfoco en que cada detalle sume a la experiencia del usuario.",
              ],
            },
            {
              number: "02",
              title: "DESARROLLO WEB",
              descriptions: [
                "Construyo aplicaciones web optimizadas, rápidas y escalables.",
                "Trabajo con tecnologías modernas como React, Next.js y Django para asegurar rendimiento y calidad.",
              ],
            },
            {
              number: "03",
              title: "OPTIMIZACIÓN Y PERFORMANCE",
              descriptions: [
                "Mejoro la velocidad de carga y la eficiencia de los sitios para una mejor experiencia.",
                "Implemento buenas prácticas de código y estrategias de optimización para SEO y accesibilidad.",
              ],
            },
          ].map((service, index) => (
            <div key={index} className="space-y-4">
              <span className="text-sm text-gray-400">({service.number})</span>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              {service.descriptions.map((desc, i) => (
                <p key={i} className="text-gray-400 text-sm">{desc}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
