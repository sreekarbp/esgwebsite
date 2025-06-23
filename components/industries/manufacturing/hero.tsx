"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Factory, Cpu, BarChart3 } from "lucide-react"

export default function ManufacturingHero() {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { value: "47%", label: "Increase in operational efficiency with AI-powered SAP solutions" },
    { value: "68%", label: "Reduction in unplanned downtime with predictive maintenance" },
    { value: "3.2x", label: "ROI from implementing intelligent manufacturing solutions" },
    { value: "35%", label: "Reduction in inventory costs with AI-driven supply chain optimization" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-sm font-medium mb-6">
              <Factory className="mr-2 h-4 w-4" />
              Industry Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Revolutionize Your <span className="gradient-text">Manufacturing</span> with AI-Powered SAP Solutions
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your manufacturing operations with intelligent automation, predictive maintenance, and real-time
              analytics that drive efficiency, quality, and innovation.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/50">
                Schedule Consultation
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center">
                <div className="bg-blue-600/20 p-2 rounded-lg mr-3">
                  <Cpu className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Industry 4.0</p>
                  <p className="font-medium">Ready Solutions</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-600/20 p-2 rounded-lg mr-3">
                  <BarChart3 className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">SAP Certified</p>
                  <p className="font-medium">Implementation</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <Image
                src="/images/industries/manufacturing-hero.jpg"
                alt="Smart manufacturing facility with robots and AI integration"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>

              {/* Animated stat overlay */}
              <motion.div
                key={currentStat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-950 to-transparent"
              >
                <p className="text-4xl font-bold text-blue-400 mb-1">{stats[currentStat].value}</p>
                <p className="text-gray-300">{stats[currentStat].label}</p>
              </motion.div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-3 rounded-lg shadow-lg transform rotate-3">
              <p className="font-bold">SAP Certified</p>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white p-3 rounded-lg shadow-lg transform -rotate-2">
              <p className="font-bold">AI-Powered</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
