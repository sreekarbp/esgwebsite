"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Database, Cpu, Cloud, BrainCircuit, BarChart, Shield, Network } from "lucide-react"

export default function AnimatedSapAiLogo() {
  const [isHovered, setIsHovered] = useState(false)
  const [activeIcon, setActiveIcon] = useState(0)

  // Cycle through icons when not hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIcon((prev) => (prev + 1) % 7)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  const icons = [
    { icon: <Database className="h-6 w-6 text-blue-400" />, color: "bg-blue-500" },
    { icon: <Cpu className="h-6 w-6 text-purple-400" />, color: "bg-purple-500" },
    { icon: <Cloud className="h-6 w-6 text-cyan-400" />, color: "bg-cyan-500" },
    { icon: <BrainCircuit className="h-6 w-6 text-green-400" />, color: "bg-green-500" },
    { icon: <BarChart className="h-6 w-6 text-amber-400" />, color: "bg-amber-500" },
    { icon: <Shield className="h-6 w-6 text-red-400" />, color: "bg-red-500" },
    { icon: <Network className="h-6 w-6 text-indigo-400" />, color: "bg-indigo-500" },
  ]

  return (
    <Link href="/" className="relative flex items-center">
      <motion.div
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
      >
        {/* Base Logo */}
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: isHovered ? 0.8 : 1 }} className="relative z-10">
          <Image src="/esg-colored-logo.png" alt="ESG Logo" width={80} height={80} className="h-16 w-auto" priority />
        </motion.div>

        {/* Orbiting Icons */}
        <AnimatePresence>
          {isHovered && (
            <>
              {icons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: Math.cos((index * (Math.PI * 2)) / 7) * 40,
                    y: Math.sin((index * (Math.PI * 2)) / 7) * 40,
                  }}
                  exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <motion.div
                    className="flex items-center justify-center rounded-full p-1.5 shadow-lg"
                    style={{ backgroundColor: `rgba(17, 24, 39, 0.8)` }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Pulsing Circle for non-hover state */}
        {!isHovered && (
          <motion.div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 z-0`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.1, 0.8],
              opacity: [0, 0.5, 0],
              backgroundColor: icons[activeIcon].color,
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          />
        )}

        {/* Glowing effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 filter blur-xl z-0"
          initial={{ width: 40, height: 40, opacity: 0.3 }}
          animate={{
            width: isHovered ? 90 : 60,
            height: isHovered ? 90 : 60,
            opacity: isHovered ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </Link>
  )
}
