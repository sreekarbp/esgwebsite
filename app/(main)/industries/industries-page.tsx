"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import IndustriesHero from "@/components/industries/industries-hero"
import IndustriesGrid from "@/components/industries/industries-grid"
import IndustryInsights from "@/components/industries/industry-insights"
import CrossIndustryCapabilities from "@/components/industries/cross-industry-capabilities"
import IndustryPartners from "@/components/industries/industry-partners"
import ContactCTA from "@/components/industries/contact-cta"
import FuturisticParticles from "@/components/industries/futuristic-particles"
import AITechIcons from "@/components/industries/ai-tech-icons"
import IndustrySelector from "@/components/industries/industry-selector"

export default function IndustriesPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <FuturisticParticles />
      </div>

      {/* Glowing accent elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"></div>

      <AnimatePresence>
        {isLoaded && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <IndustriesHero />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Industry Expertise</h2>
                  <p className="text-foreground/70 max-w-2xl">
                    Discover how our AI-powered solutions transform operations across all major industries
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <IndustrySelector />
                </div>
              </div>

              {/* AI Tech Icons */}
              <div className="mb-12">
                <AITechIcons />
              </div>

              <IndustriesGrid />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <IndustryInsights />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CrossIndustryCapabilities />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <IndustryPartners />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <ContactCTA />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
