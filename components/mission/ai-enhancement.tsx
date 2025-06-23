"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Bot, BrainCircuit, Database, BarChart4, Network, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export function AiEnhancement() {
  const [activeTab, setActiveTab] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-cycle through tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % aiEnhancements.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/90 relative">
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How AI Enhances Our Mission</h2>
            <p className="text-xl text-foreground/70">
              Our mission is amplified through strategic AI integration, creating more intelligent, adaptive, and
              powerful SAP solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* AI Enhancement Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 overflow-hidden"
          >
            <div className="space-y-4">
              {aiEnhancements.map((enhancement, index) => (
                <button
                  key={enhancement.title}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start gap-4",
                    activeTab === index ? "bg-primary/10 border border-primary/30" : "hover:bg-card/80",
                  )}
                >
                  <div
                    className={cn(
                      "p-2 rounded-lg",
                      activeTab === index ? "text-primary bg-primary/20" : "text-foreground/70 bg-background/80",
                    )}
                  >
                    <enhancement.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "text-lg font-medium mb-1",
                        activeTab === index ? "text-primary" : "text-foreground",
                      )}
                    >
                      {enhancement.title}
                    </h3>
                    {activeTab === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-foreground/70"
                      >
                        {enhancement.description}
                      </motion.p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-card/80 mix-blend-overlay z-10 rounded-2xl"></div>
            <Image
              src={aiEnhancements[activeTab].image || "/placeholder.svg"}
              alt={aiEnhancements[activeTab].title}
              fill
              className="object-cover transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent z-20">
              <h4 className="text-xl font-semibold">{aiEnhancements[activeTab].title}</h4>
              <p className="text-foreground/80 mt-2 flex items-center">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </p>
            </div>

            {/* Animated overlay */}
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/80 to-primary/30 z-30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const aiEnhancements = [
  {
    title: "Intelligent Process Enhancement",
    description:
      "AI analyzes SAP workflows to identify bottlenecks, predict optimization opportunities, and automate routine tasks, boosting operational efficiency.",
    icon: Zap,
    image: "/data-analytics-dashboard.jpg",
  },
  {
    title: "Predictive Analytics & Insights",
    description:
      "Machine learning models extract deeper insights from SAP data, enabling more accurate forecasting and proactive decision-making.",
    icon: BarChart4,
    image: "/predictive-dashboard.jpg",
  },
  {
    title: "Cognitive Data Integration",
    description:
      "AI enhances data integration across SAP systems, ensuring cleaner data flows, automatic classification, and smarter data governance.",
    icon: Database,
    image: "/data-integration.jpg",
  },
  {
    title: "Neural Network Optimization",
    description:
      "Advanced neural networks continuously optimize SAP configurations based on usage patterns and business priorities.",
    icon: Network,
    image: "/data-patterns.jpg",
  },
  {
    title: "Conversational Business Intelligence",
    description:
      "Natural language processing enables intuitive interaction with SAP systems, democratizing access to enterprise data.",
    icon: Bot,
    image: "/ai-ml-solutions.jpg",
  },
  {
    title: "Cognitive Computing Integration",
    description:
      "Combining SAP with cognitive computing creates systems that can reason, learn, and adapt to changing business conditions.",
    icon: BrainCircuit,
    image: "/advanced-analytics.jpg",
  },
]
