import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FeaturedWorkSection() {
  return (
    <section className="bg-zinc-950 py-20 ">
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
                href="#contact"
                className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
              >
                Contactame <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Project Categories */}
          {[
            {
              title: "MI PRIMER PORTAFOLIO",
              number: "01",
              description: "Realice mi primer portafolio 100% hecho a mano solamente utilizando HTML, CSS Y JAVASCRIPT",
              link:"",
              image:
                "",
            },
            {
              title: "WEB DEVELOPMENT",
              number: "02",
              description: "Building scalable, high-performance websites and applications",
              link:"",
              image:
                "",
            },
            {
              title: "BRANDING",
              number: "03",
              description: "Crafting unique brand identities that resonate with your audience",
              link:"",
              image:
                "",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-8 sm:py-12 border-t border-gray-800"
            >
              <div className="space-y-4 mb-4 sm:mb-0">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-2xl sm:text-4xl font-bold">{category.title}</h3>
                  <span className="text-sm text-gray-400">({category.number})</span>
                </div>
                <p className="text-gray-400">{category.description}</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-8">
                <div className="hidden md:block relative w-48 h-32 bg-gray-900">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <Link href={`category.link`} className="inline-flex items-center gap-2 hover:text-gray-300">
                  View projects <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

