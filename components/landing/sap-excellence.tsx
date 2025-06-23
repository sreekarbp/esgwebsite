"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Check, Trophy, LifeBuoy, TrendingUp } from "lucide-react"

interface ExpertiseCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

function ExpertiseCard({ icon, title, description, delay = 0 }: ExpertiseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="border border-gray-200/10 rounded-lg p-6 hover:border-blue-500/30 transition-colors duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
          <div className="text-blue-400">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-blue-400">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}

export default function SapExcellence() {
  return (
    <section className="py-20">
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            SAP Excellence: The Foundation of Your Success
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto italic">
            " With deep expertise in SAP, we empower businesses to achieve seamless digital transformation. From
            strategy to execution, our innovative SAP solutions drive efficiency, agility, and long-term growth. "
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800 shadow-lg">
          <div className="flex items-center mb-12">
            <div className="w-1 h-6 bg-blue-500 mr-3"></div>
            <h3 className="text-blue-500 font-medium">Our Expertise</h3>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Delivering high-quality solutions tailored to your needs.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ExpertiseCard
              icon={<Check size={32} />}
              title="Certified Expertise"
              description="Our professionals are certified in every technology we implement, ensuring adherence to best practices and standards."
              delay={0.1}
            />
            <ExpertiseCard
              icon={<Trophy size={32} />}
              title="Award-Winning Solutions"
              description="Recognized by industry leaders for innovation and excellence, we bring proven expertise to every project."
              delay={0.2}
            />
            <ExpertiseCard
              icon={<LifeBuoy size={32} />}
              title="End-to-End Support"
              description="From cloud migration to cybersecurity, we provide comprehensive solutions tailored to your unique needs."
              delay={0.3}
            />
            <ExpertiseCard
              icon={<TrendingUp size={32} />}
              title="Future-Ready Innovation"
              description="We leverage the latest technologies to future-proof your IT infrastructure and ensure long-term success."
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
