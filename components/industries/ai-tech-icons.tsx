"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Brain, Cpu, Database, Network, BarChart, Lock } from "lucide-react"

export default function AITechIcons() {
  const containerRef = useRef<HTMLDivElement>(null)

  const technologies = [
    {
      name: "Machine Learning",
      icon: <Brain className="h-8 w-8" />,
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      name: "Neural Networks",
      icon: <Network className="h-8 w-8" />,
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      name: "Big Data",
      icon: <Database className="h-8 w-8" />,
      color: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
      name: "Predictive Analytics",
      icon: <BarChart className="h-8 w-8" />,
      color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
    {
      name: "Edge Computing",
      icon: <Cpu className="h-8 w-8" />,
      color: "bg-red-500/10 text-red-400 border-red-500/20",
    },
    {
      name: "Secure AI",
      icon: <Lock className="h-8 w-8" />,
      color: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    },
  ]

  useEffect(() => {
    if (!containerRef.current) return

    // Create orbital particles around icons
    const container = containerRef.current
    const icons = container.querySelectorAll(".tech-icon")

    icons.forEach((icon) => {
      const createOrbitals = () => {
        const orbitalsContainer = document.createElement("div")
        orbitalsContainer.className = "absolute inset-0 pointer-events-none"
        icon.appendChild(orbitalsContainer)

        const orbitalCount = 3
        for (let i = 0; i < orbitalCount; i++) {
          const orbital = document.createElement("div")
          orbital.className = "absolute rounded-full border border-primary/20 opacity-70"

          // Random size and position
          const size = 30 + Math.random() * 40
          orbital.style.width = `${size}px`
          orbital.style.height = `${size}px`
          orbital.style.top = `calc(50% - ${size / 2}px)`
          orbital.style.left = `calc(50% - ${size / 2}px)`

          // Animation
          orbital.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], {
            duration: 3000 + Math.random() * 5000,
            iterations: Number.POSITIVE_INFINITY,
            easing: "linear",
          })

          orbitalsContainer.appendChild(orbital)

          // Add particle on the orbital
          const particle = document.createElement("div")
          particle.className = "absolute w-2 h-2 rounded-full bg-primary"

          // Position particle on the orbital
          const angle = Math.random() * Math.PI * 2
          particle.style.top = `${size / 2 - 2}px`
          particle.style.left = `${size / 2 - 2}px`
          particle.style.transform = `rotate(${angle}rad) translateX(${size / 2}px)`

          orbital.appendChild(particle)
        }
      }

      createOrbitals()
    })
  }, [])

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`tech-icon relative flex flex-col items-center p-6 rounded-xl border ${tech.color} w-40 h-40 flex-shrink-0`}
        >
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            {tech.icon}
            <p className="mt-3 text-center font-medium">{tech.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
