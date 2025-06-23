"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function FutureFocus() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <Image src="/abstract-digital-background.png" alt="" fill className="object-cover opacity-20" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Future Focus</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            As we continue our mission, these strategic focus areas guide our innovation and development of
            next-generation SAP solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-1"
          >
            {futureAreas.map((area, index) => (
              <button
                key={area.title}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-full text-left p-4 border-l-2 transition-all duration-300",
                  activeIndex === index
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/30 hover:bg-card/30",
                )}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={cn("text-lg font-semibold", activeIndex === index ? "text-primary" : "text-foreground")}
                  >
                    {area.title}
                  </h3>
                  <ChevronRight
                    className={cn(
                      "h-5 w-5 transition-transform",
                      activeIndex === index ? "rotate-90 text-primary" : "text-foreground/50",
                    )}
                  />
                </div>

                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 text-foreground/70"
                  >
                    <p>{area.description}</p>
                    <ul className="mt-3 space-y-2">
                      {area.initiatives.map((initiative) => (
                        <li key={initiative} className="flex items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                          {initiative}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </button>
            ))}
          </motion.div>

          {/* Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse"></div>
            <Image
              src={futureAreas[activeIndex].image || "/placeholder.svg"}
              alt={futureAreas[activeIndex].title}
              fill
              className="object-cover p-6 rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                <p className="text-2xl font-bold text-primary">2025+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const futureAreas = [
  {
    title: "Autonomous SAP Systems",
    description:
      "Creating self-managing, self-healing SAP landscapes that minimize manual intervention and maximize availability.",
    initiatives: [
      "Self-tuning databases and applications",
      "Predictive maintenance systems",
      "Auto-scaling resource management",
      "Proactive anomaly detection and resolution",
    ],
    image: "/ai-ml-solutions.jpg",
  },
  {
    title: "Hyper-personalized User Experiences",
    description: "Tailoring SAP interfaces and workflows to individual user patterns, preferences, and needs.",
    initiatives: [
      "AI-driven interface adaptation",
      "Context-aware workflow suggestions",
      "Behavioral pattern recognition",
      "Dynamic information prioritization",
    ],
    image: "/data-visualization.jpg",
  },
  {
    title: "Intelligent Enterprise Integration",
    description:
      "Seamlessly connecting SAP ecosystems with broader technology landscapes through smart, adaptive integrations.",
    initiatives: [
      "Dynamic API orchestration",
      "Cross-system process optimization",
      "Real-time data synchronization",
      "Intelligent integration monitoring",
    ],
    image: "/data-integration.jpg",
  },
  {
    title: "Quantum-Enhanced Analytics",
    description: "Leveraging quantum computing to solve previously impossible SAP data analysis problems.",
    initiatives: [
      "Quantum algorithm exploration",
      "Complex optimization problems",
      "Supply chain scenario planning",
      "Financial risk modeling",
    ],
    image: "/advanced-analytics.jpg",
  },
]
