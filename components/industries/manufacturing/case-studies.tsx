"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ManufacturingCaseStudies() {
  const [activeCase, setActiveCase] = useState(0)

  const caseStudies = [
    {
      title: "Global Automotive Manufacturer Reduces Downtime by 37%",
      description:
        "A leading automotive manufacturer implemented our AI-powered predictive maintenance solution, resulting in a 37% reduction in unplanned downtime and $4.2M in annual savings.",
      metrics: [
        { label: "Downtime Reduction", value: "37%" },
        { label: "Annual Savings", value: "$4.2M" },
        { label: "ROI", value: "428%" },
      ],
      image: "/images/case-studies/automotive-manufacturing.jpg",
      logo: "/images/clients/automotive-logo.svg",
    },
    {
      title: "Electronics Manufacturer Improves Quality Control with AI Vision",
      description:
        "A global electronics manufacturer deployed our AI vision system for quality control, reducing defect rates by 92% and improving customer satisfaction scores by 28%.",
      metrics: [
        { label: "Defect Reduction", value: "92%" },
        { label: "Inspection Speed", value: "3.2x" },
        { label: "Customer Satisfaction", value: "+28%" },
      ],
      image: "/images/case-studies/electronics-manufacturing.jpg",
      logo: "/images/clients/electronics-logo.svg",
    },
    {
      title: "Industrial Equipment Maker Optimizes Supply Chain with SAP and AI",
      description:
        "An industrial equipment manufacturer integrated our AI-powered supply chain optimization with their SAP system, reducing inventory costs by 32% while improving on-time delivery.",
      metrics: [
        { label: "Inventory Reduction", value: "32%" },
        { label: "On-Time Delivery", value: "97.8%" },
        { label: "Working Capital Freed", value: "$8.7M" },
      ],
      image: "/images/case-studies/industrial-equipment.jpg",
      logo: "/images/clients/industrial-logo.svg",
    },
  ]

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories from <span className="gradient-text">Manufacturing Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how leading manufacturers are transforming their operations with our AI-powered SAP solutions.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={
                      caseStudies[activeCase].image ||
                      "/placeholder.svg?height=600&width=800&query=manufacturing factory" ||
                      "/placeholder.svg"
                    }
                    alt={caseStudies[activeCase].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent lg:bg-gradient-to-t"></div>

                  {caseStudies[activeCase].logo && (
                    <div className="absolute top-6 right-6 bg-white p-2 rounded-lg h-12 w-auto">
                      <Image
                        src={caseStudies[activeCase].logo || "/placeholder.svg"}
                        alt="Client logo"
                        width={100}
                        height={40}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  )}
                </div>

                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-4">{caseStudies[activeCase].title}</h3>
                  <p className="text-gray-300 mb-8">{caseStudies[activeCase].description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {caseStudies[activeCase].metrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-gray-800 rounded-lg">
                        <p className="text-2xl font-bold text-blue-400 mb-1">{metric.value}</p>
                        <p className="text-sm text-gray-400">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="flex items-center">
                    Read Full Case Study <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevCase}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Previous case study"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`h-3 w-3 rounded-full ${activeCase === index ? "bg-blue-500" : "bg-gray-700"}`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextCase}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Next case study"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
