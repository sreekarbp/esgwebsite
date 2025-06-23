"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Bot, Sparkles, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AiAssistantDemo() {
  const [isTyping, setIsTyping] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [showResponse, setShowResponse] = useState(false)

  const demoMessages = [
    "How can I optimize my SAP supply chain processes?",
    "What AI solutions do you offer for predictive maintenance?",
    "Can you help with SAP S/4HANA migration?",
  ]

  const demoResponses = [
    "I'd be happy to help with SAP supply chain optimization! Our approach combines SAP IBP with AI-driven demand forecasting to reduce inventory costs by 15-20% while improving service levels. We can implement predictive analytics for supplier management, automated replenishment, and real-time visibility across your entire supply chain.",
    "Our predictive maintenance solutions combine SAP Asset Intelligence with custom AI models that analyze equipment sensor data, maintenance history, and operational patterns. This helps identify potential failures before they occur, reducing downtime by up to 35% and extending asset life by 20-25%.",
    "Our SAP S/4HANA migration methodology follows a proven 5-phase approach: Assessment, Design, Build, Test, and Deploy. We utilize AI-powered tools to accelerate data migration, automate code remediation, and identify business process optimization opportunities during the transition.",
  ]

  // Simulate typing effect
  const handleDemoClick = () => {
    setIsTyping(true)
    setShowResponse(false)

    setTimeout(() => {
      setIsTyping(false)
      setShowResponse(true)
    }, 2000)

    setTimeout(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % demoMessages.length)
    }, 5000)
  }

  // Auto-start the demo
  useEffect(() => {
    const timer = setTimeout(() => {
      handleDemoClick()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-blue-600 mr-4">
                <Bot className="h-6 w-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">AI Assistant</h2>
            </div>

            <p className="text-xl text-gray-300 mb-8">
              Experience the power of our AI assistant, designed to provide instant answers to your SAP and technology
              questions.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  title: "SAP Expertise On Demand",
                  description: "Get immediate answers to complex SAP implementation and configuration questions.",
                  icon: <Sparkles className="h-5 w-5 text-blue-400" />,
                },
                {
                  title: "AI-Powered Recommendations",
                  description: "Receive tailored suggestions for optimizing your enterprise systems.",
                  icon: <Sparkles className="h-5 w-5 text-blue-400" />,
                },
                {
                  title: "24/7 Intelligent Support",
                  description: "Access assistance anytime, anywhere with our always-available AI assistant.",
                  icon: <Sparkles className="h-5 w-5 text-blue-400" />,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-lg bg-blue-900/50 mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700">
              Try Our AI Assistant <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl bg-gray-900/60 backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900/0 to-transparent"></div>

              {/* Demo Chat Interface */}
              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-blue-600 mr-2">
                    <Bot className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold">ESG AI Assistant</h3>
                </div>

                <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2 custom-scrollbar">
                  <div className="bg-gray-800/70 rounded-lg p-3 max-w-[80%] backdrop-blur-sm">
                    <p className="text-sm text-gray-300">
                      Hello! I'm your ESG AI Assistant. I can help with SAP implementations, AI solutions, and technical
                      questions. How can I assist you today?
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-blue-900/70 rounded-lg p-3 max-w-[80%] backdrop-blur-sm">
                      <p className="text-sm">{demoMessages[currentMessageIndex]}</p>
                    </div>
                  </div>

                  {isTyping && (
                    <div className="bg-gray-800/70 rounded-lg p-3 max-w-[80%] backdrop-blur-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {showResponse && (
                    <div className="bg-gray-800/70 rounded-lg p-3 max-w-[80%] backdrop-blur-sm">
                      <p className="text-sm text-gray-300">{demoResponses[currentMessageIndex]}</p>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type your question here..."
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    onClick={handleDemoClick}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-300"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-16 h-16 rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
                initial={{
                  x: 20 + index * 30,
                  y: 50 + index * 40,
                  scale: 0.8,
                  opacity: 0.6,
                }}
                animate={{
                  x: [20 + index * 30, 40 + index * 30, 20 + index * 30],
                  y: [50 + index * 40, 70 + index * 40, 50 + index * 40],
                  scale: [0.8, 1, 0.8],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Sparkles className="h-6 w-6 text-blue-400" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
