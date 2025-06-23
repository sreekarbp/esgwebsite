"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MissionHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/interconnected-tech-network.png"
          alt="Digital network visualization"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6">
            Reimagining Enterprise Excellence
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            Our mission is to transform businesses through intelligent SAP solutions, strategically enhanced by AI to
            maximize operational excellence, innovation, and sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="group text-lg px-6 py-6" size="lg">
              <span>Our Approach</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="text-lg px-6 py-6" size="lg">
              Explore Solutions
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Animated accent elements */}
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1 bg-gradient-to-r from-transparent to-primary"
        initial={{ width: 0 }}
        animate={{ width: "50%" }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  )
}
