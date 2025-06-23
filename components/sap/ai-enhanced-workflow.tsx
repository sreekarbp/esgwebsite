"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight, ArrowRightCircle, Cpu, Database, Server, GitBranch, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type WorkflowStep = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  image: string
  aiFeature: string
}

export default function AIEnhancedWorkflow() {
  const [activeStep, setActiveStep] = useState<string>("data-collection")
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  const workflowSteps: WorkflowStep[] = [
    {
      id: "data-collection",
      title: "Data Collection & Integration",
      description: "Seamlessly gather and integrate data from multiple SAP and non-SAP sources in real-time.",
      icon: <Database className="h-6 w-6" />,
      image: "/images/workflow/data-collection.jpg",
      aiFeature: "AI-powered data validation and anomaly detection ensures data quality from the start.",
    },
    {
      id: "ai-processing",
      title: "AI Processing & Analysis",
      description:
        "Apply advanced machine learning models to analyze patterns, predict outcomes, and generate insights.",
      icon: <Cpu className="h-6 w-6" />,
      image: "/images/workflow/ai-processing.jpg",
      aiFeature: "Gen AI models continuously learn from your business data to improve accuracy over time.",
    },
    {
      id: "process-optimization",
      title: "Process Optimization",
      description: "Automatically identify bottlenecks and recommend process improvements based on AI insights.",
      icon: <GitBranch className="h-6 w-6" />,
      image: "/images/workflow/automation.jpg",
      aiFeature: "Intelligent process mining that automatically discovers and visualizes your actual processes.",
    },
    {
      id: "personalization",
      title: "User Experience Personalization",
      description: "Deliver tailored interfaces and insights based on user roles, preferences, and behavior patterns.",
      icon: <Activity className="h-6 w-6" />,
      image: "/images/workflow/personalization.jpg",
      aiFeature: "Dynamic UI adaptation that evolves based on user behavior and interaction patterns.",
    },
    {
      id: "automation",
      title: "Intelligent Automation",
      description: "Deploy AI-powered bots and workflows to automate repetitive tasks and complex processes.",
      icon: <Server className="h-6 w-6" />,
      image: "/images/workflow/lead-enrichment.jpg",
      aiFeature: "Self-healing automation flows that adapt to changing business conditions and requirements.",
    },
  ]

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } })
  }, [activeStep, controls])

  // Find the current workflow step
  const currentStep = workflowSteps.find((step) => step.id === activeStep) || workflowSteps[0]

  // Default fallback image
  const fallbackImage = "/interconnected-automation.png"

  return (
    <section id="workflow" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The SAP Workflow <span className="gradient-text">Engine</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our intelligent workflow engine combines SAP's robust architecture with cutting-edge AI capabilities to
            create a seamless, adaptive business process environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" ref={containerRef}>
          {/* Step visualization */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden border border-gray-700 h-[400px] md:h-[500px]"
            >
              {currentStep.image && currentStep.image.trim() !== "" ? (
                <Image
                  src={currentStep.image || "/placeholder.svg"}
                  alt={currentStep.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <Image
                  src={fallbackImage || "/placeholder.svg"}
                  alt={currentStep.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
              >
                <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-blue-600 mr-4">{currentStep.icon}</div>
                    <h3 className="text-2xl font-bold">{currentStep.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{currentStep.description}</p>
                  <div className="flex items-start bg-gray-800/80 rounded-lg p-4">
                    <Cpu className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-blue-300">{currentStep.aiFeature}</p>
                  </div>
                </div>
              </motion.div>

              {/* Animated particles to represent data flow */}
              <div className="absolute inset-0 pointer-events-none">
                {typeof window !== "undefined" &&
                  Array.from({ length: 20 }).map((_, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-2 h-2 rounded-full bg-blue-500"
                      initial={{
                        x: Math.random() * 100 + "%",
                        y: "0%",
                        opacity: 0.3 + Math.random() * 0.7,
                      }}
                      animate={{
                        y: "100%",
                        opacity: 0,
                      }}
                      transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
              </div>
            </motion.div>
          </div>

          {/* Step progression navigation */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="space-y-6">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`cursor-pointer rounded-xl border p-5 transition-all duration-300 ${
                    activeStep === step.id
                      ? "border-blue-500 bg-blue-900/20 shadow-lg shadow-blue-900/10"
                      : "border-gray-700 bg-gray-900/50 hover:bg-gray-900"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="flex items-center">
                    <div
                      className={`relative flex items-center justify-center w-10 h-10 rounded-full ${
                        activeStep === step.id ? "bg-blue-600" : "bg-gray-800"
                      } mr-4`}
                    >
                      <span className="text-sm font-semibold">{index + 1}</span>
                      {index < workflowSteps.length - 1 && (
                        <div
                          className={`absolute top-full w-0.5 h-[calc(100%+1.5rem)] ${
                            activeStep === step.id || activeStep === workflowSteps[index + 1].id
                              ? "bg-blue-500"
                              : "bg-gray-700"
                          }`}
                        ></div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold">{step.title}</h4>
                        {activeStep === step.id && <ArrowRightCircle className="h-5 w-5 text-blue-400" />}
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
                Explore Complete Workflow <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
