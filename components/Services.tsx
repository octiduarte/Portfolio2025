import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <section className='py-20'>
      <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-16 gap-6 sm:gap-0">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
              MY SERVICE
              <br />
              EXPERTISE
            </h2>
            <div className="max-w-md">
              <p className="text-gray-400 mb-4">
                Leveraging cutting-edge technologies and years of experience to deliver exceptional results across web
                design, development, and branding.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                number: "01",
                title: "WEB DESIGN",
                descriptions: [
                  "Creating intuitive user interfaces that enhance interaction.",
                  "Focusing on user needs to deliver exceptional experiences.",
                ],
              },
              {
                number: "02",
                title: "WEB DEVELOPMENT",
                descriptions: [
                  "Building scalable and maintainable web applications.",
                  "Utilizing modern frameworks like React, Next.js, and Django.",
                ],
              },
              {
                number: "03",
                title: "BRANDING",
                descriptions: [
                  "Crafting unique visual identities that stand out.",
                  "Implementing consistent branding across digital platforms.",
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
