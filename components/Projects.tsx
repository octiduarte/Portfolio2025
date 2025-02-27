import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedWorkSection() {
  return (
    <section className="bg-zinc-900 py-20 ">
      <div className="container mx-auto px-4">
        <div className="mb-16 sm:mb-32">
          <div className="flex flex-col items-start sm:flex-row justify-between sm:items-center mb-8 sm:mb-16 gap-6 sm:gap-0">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
              MIS
              <br />
              PROYECTOS
            </h2>
            <div className="text-center">
              <Link
                href="https://wa.me/5491133722655"
                className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
              >
                Contactame <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Project Categories */}
          {[  
            {
              title: "ECOMMERCE",
              number: "01",
              description:
                "Ecommerce 100% funcional con funcionalidades operativas y una experiencia de compra sencilla.",
              link: "https://proyectoparadigmas3.onrender.com",
              image: "/proyecto_paradigmas.png",
              technologies: ["HTML", "Javascript", "CSS", "PHP"],
            },
            {
              title: "MI PRIMER PORTAFOLIO",
              number: "02",
              description:
                "Mi primer portafolio web, diseñado desde cero con un enfoque limpio y minimalista.",
              link: "https://octiduarte.github.io/Portafolio.github.io/",
              image: "/PrimerCV.png",
              technologies: ["HTML", "CSS", "JavaScript"],
            },
            {
              title: "ECOMMERCE EN DESARROLLO",
              number: "03",
              description:
                "Diseñando una experiencia de compra intuitiva y eficiente, enfocada en usabilidad y rendimiento.",
              link: "https://proyecto-ecommerce-nine.vercel.app",
              image: "/Ecommerce.png",
              technologies: ["Nextjs", "Go", "Typescript"],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-8 sm:py-12 border-t border-gray-800"
            >
              <div className="space-y-4 mb-4 sm:mb-0">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-2xl sm:text-4xl font-bold">
                    {category.title}
                  </h3>
                  <span className="text-sm text-gray-400">
                    ({category.number})
                  </span>
                </div>
                <p className="text-gray-400">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-8">
                <div className="hidden md:block relative w-48 h-32 bg-gray-900 rounded-sm overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <Link
                  href={category.link}
                  className="inline-flex items-center gap-2 hover:text-gray-300"
                >
                  Visitar Proyecto <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
