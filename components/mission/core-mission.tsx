"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function CoreMission() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src="/abstract-digital-background.png" alt="" fill className="object-cover opacity-30" />
        </div>
      </div>

      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Mission</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto">
            ESG Inc is dedicated to unlocking the full potential of SAP ecosystems through strategic AI integration,
            creating intelligent enterprise solutions that deliver transformative business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <CoreValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface CoreValue {
  title: string
  description: string
  icon: string
  color: string
}

const coreValues: CoreValue[] = [
  {
    title: "Enterprise Excellence",
    description:
      "We drive operational excellence across SAP landscapes, optimizing processes, systems, and technologies.",
    icon: "✨",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Intelligent Innovation",
    description: "We pioneer AI-enhanced SAP solutions that anticipate needs, adapt to changes, and accelerate growth.",
    icon: "🔮",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Sustainable Transformation",
    description: "We build lasting value through SAP transformations that evolve with your business needs.",
    icon: "🌱",
    color: "from-emerald-500 to-green-400",
  },
]

function CoreValueCard({ value, index }: { value: CoreValue; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      <div
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-6",
          "bg-gradient-to-br",
          value.color,
        )}
      >
        {value.icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{value.title}</h3>
      <p className="text-foreground/70">{value.description}</p>
    </motion.div>
  )
}
