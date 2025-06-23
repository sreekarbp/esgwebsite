"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Factory, Hospital, Landmark, ShoppingBag, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IndustrySolutions() {
  const [activeIndustry, setActiveIndustry] = useState("manufacturing")

  const industries = [
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: <Factory className="h-5 w-5" />,
      image: "/images/industries/manufacturing.jpg",
      description:
        "Intelligent manufacturing solutions that optimize production, improve quality, and enhance supply chain visibility.",
      solutions: [
        "Smart Factory Automation",
        "Predictive Maintenance",
        "Supply Chain Optimization",
        "Quality Control AI",
        "Digital Twin Technology",
      ],
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: <Hospital className="h-5 w-5" />,
      image: "/images/industries/healthcare.jpg",
      description:
        "Transformative healthcare solutions that improve patient outcomes, streamline operations, and enhance care delivery.",
      solutions: [
        "Patient Experience Management",
        "Clinical Analytics",
        "Healthcare Supply Chain",
        "Medical Resource Optimization",
        "Regulatory Compliance",
      ],
    },
    {
      id: "finance",
      name: "Financial Services",
      icon: <Landmark className="h-5 w-5" />,
      image: "/images/industries/banking.jpg",
      description:
        "Innovative financial solutions that enhance customer experience, improve risk management, and drive digital transformation.",
      solutions: ["Intelligent Banking", "Risk & Compliance", "Customer 360", "Fraud Detection", "Wealth Management"],
    },
    {
      id: "retail",
      name: "Retail",
      icon: <ShoppingBag className="h-5 w-5" />,
      image: "/images/industries/retail.jpg",
      description:
        "Cutting-edge retail solutions that personalize customer experiences, optimize inventory, and streamline operations.",
      solutions: [
        "Omnichannel Commerce",
        "Inventory Optimization",
        "Customer Intelligence",
        "Personalized Marketing",
        "Supply Chain Visibility",
      ],
    },
  ]

  const currentIndustry = industries.find((ind) => ind.id === activeIndustry) || industries[0]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored SAP and AI solutions designed for the unique challenges of your industry.
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry) => (
            <motion.button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`flex items-center px-4 py-2 rounded-full border transition-all ${
                activeIndustry === industry.id
                  ? "border-blue-500 bg-blue-900/20 text-blue-400"
                  : "border-gray-700 hover:border-gray-500"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{industry.icon}</span>
              <span>{industry.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Industry Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          >
            {/* Main Content */}
            <div className="lg:col-span-3 bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700">
              <div className="relative h-64">
                <Image
                  src={currentIndustry.image || "/placeholder.svg"}
                  alt={currentIndustry.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>

                <div className="absolute bottom-4 left-4 p-3 rounded-lg bg-blue-600">{currentIndustry.icon}</div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{currentIndustry.name}</h3>
                <p className="text-gray-300 mb-6">{currentIndustry.description}</p>

                <Button className="bg-blue-600 hover:bg-blue-700">
                  Explore {currentIndustry.name} Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Solutions */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <Zap className="h-5 w-5 text-blue-400 mr-2" />
                  Key Solutions
                </h4>

                <div className="space-y-3">
                  {currentIndustry.solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      <span>{solution}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/30 to-violet-900/30 backdrop-blur-sm rounded-xl border border-blue-800/30 p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold mb-2">Success Story</h4>
                  <p className="text-gray-300 mb-4">
                    See how we transformed a leading {currentIndustry.name.toLowerCase()} company with our SAP and AI
                    solutions.
                  </p>
                </div>

                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-900/50 w-full">
                  View Case Study
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
