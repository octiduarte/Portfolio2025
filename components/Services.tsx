import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <section className='py-20'>
      <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-16 gap-6 sm:gap-0">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
              MIS SERVICIOS
            </h2>
            <div className="max-w-md">
              <p className="text-gray-400 mb-4">
                Aprovechando tecnologías de vanguardia y años de experiencia para ofrecer resultados excepcionales en diseño web,
                desarrollo y branding.
              </p>
              <Link
                href="#contact"
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
                  "Creando interfaces de usuario intuitivas que mejoran la interacción.",
                  "Enfocándome en las necesidades del usuario para ofrecer experiencias excepcionales.",
                ],
              },
              {
                number: "02",
                title: "DESARROLLO WEB",
                descriptions: [
                  "Construyendo aplicaciones web escalables y mantenibles.",
                  "Utilizando frameworks modernos como React, Next.js y Django.",
                ],
              },
              {
                number: "03",
                title: "BRANDING",
                descriptions: [
                  "Creando identidades visuales únicas que destacan.",
                  "Implementando una identidad de marca consistente en plataformas digitales.",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="space-y-4">
                <span className="text-sm text-gray-400">({service.number})</span>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                {service.descriptions.map((desc, i) => (
                  <p key={i} className="text-gray-400 text-sm">
                    {desc}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Services
