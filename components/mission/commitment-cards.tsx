"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Check, Shield, Users, BarChart3, Code, Award } from "lucide-react"
import { cn } from "@/lib/utils"

export function CommitmentCards() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitments</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              We uphold these core commitments in every SAP transformation project we undertake, ensuring consistent,
              high-quality outcomes for our clients.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map((commitment, index) => (
            <CommitmentCard key={commitment.title} commitment={commitment} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Commitment {
  title: string
  description: string
  icon: React.ElementType
  features: string[]
  gradient: string
}

function CommitmentCard({ commitment, index }: { commitment: Commitment; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full"
    >
      <div className={cn("h-2", commitment.gradient)} />
      <div className="p-6">
        <div className="mb-4">
          <commitment.icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-3">{commitment.title}</h3>
        <p className="text-foreground/70 mb-6">{commitment.description}</p>

        <ul className="space-y-2">
          {commitment.features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const commitments: Commitment[] = [
  {
    title: "Technical Excellence",
    description: "We deliver SAP solutions built on technical best practices and innovation.",
    icon: Code,
    features: [
      "Adherence to SAP architecture standards",
      "Clean, maintainable implementations",
      "Performance optimization",
      "Future-ready designs",
    ],
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-400",
  },
  {
    title: "Measurable Outcomes",
    description: "Every transformation we deliver focuses on tangible business results.",
    icon: BarChart3,
    features: [
      "KPI-driven implementation approach",
      "Regular performance benchmarking",
      "ROI measurement frameworks",
      "Continuous improvement cycles",
    ],
    gradient: "bg-gradient-to-r from-amber-500 to-orange-400",
  },
  {
    title: "Enterprise Security",
    description: "Security is foundational to our SAP and AI integration methodology.",
    icon: Shield,
    features: [
      "SAP security best practices",
      "Data privacy compliance",
      "Secure AI model deployment",
      "Comprehensive access controls",
    ],
    gradient: "bg-gradient-to-r from-rose-500 to-pink-500",
  },
  {
    title: "Client Partnership",
    description: "We build lasting relationships through collaborative delivery methods.",
    icon: Users,
    features: [
      "Transparent communication",
      "Knowledge transfer focus",
      "Joint planning and execution",
      "Long-term success orientation",
    ],
    gradient: "bg-gradient-to-r from-emerald-500 to-green-500",
  },
  {
    title: "Innovation Culture",
    description: "We continuously evolve our approaches to deliver cutting-edge solutions.",
    icon: Award,
    features: [
      "Research & development investment",
      "Emerging technology adoption",
      "Experimental solution frameworks",
      "Innovation workshops",
    ],
    gradient: "bg-gradient-to-r from-violet-500 to-purple-500",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality controls ensure reliable, high-performing solutions.",
    icon: Shield,
    features: [
      "Comprehensive testing methodologies",
      "Quality gates throughout delivery",
      "Performance validation",
      "Post-implementation monitoring",
    ],
    gradient: "bg-gradient-to-r from-indigo-500 to-blue-600",
  },
]
