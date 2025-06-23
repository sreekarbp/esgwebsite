"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function MissionStatement() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95 z-0"></div>

      {/* Background element */}
      <div className="absolute inset-0 opacity-10">
        <Image src="/abstract-ai-network.png" alt="" fill className="object-cover opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10"
          >
            <p className="text-primary font-semibold text-lg mb-4">Our Mission Statement</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Transforming Enterprises Through Intelligent SAP Solutions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl">
              At ESG Inc, we are committed to revolutionizing enterprise operations through our expertise in SAP
              solutions and AI integration. Our mission is to bridge the gap between traditional enterprise systems and
              cutting-edge technologies, creating intelligent ecosystems that drive sustainable business value.
            </p>

            <p className="text-xl mt-6">
              We believe in delivering excellence through innovation, integrity, and results-driven approaches. Our
              focus extends beyond implementation to encompass comprehensive transformation, ensuring our clients
              achieve lasting competitive advantages in their industries.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>
      </div>
    </section>
  )
}
