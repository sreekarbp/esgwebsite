"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, BrainCircuit, Database, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AiEnhancedHero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Auto-rotate slides when not hovering
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % 3)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovering])

  const slides = [
    {
      title: "SAP Excellence",
      subtitle: "Enterprise Transformation",
      description: "Revolutionize your business with our cutting-edge SAP implementations and strategic consulting.",
      image: "/interconnected-tech-network.png",
      icon: <Database className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-400",
    },
    {
      title: "AI Innovation",
      subtitle: "Intelligent Solutions",
      description:
        "Harness the power of artificial intelligence to drive unprecedented business insights and automation.",
      image: "/abstract-ai-network.png",
      icon: <BrainCircuit className="h-6 w-6" />,
      color: "from-violet-600 to-indigo-400",
    },
    {
      title: "Digital Transformation",
      subtitle: "Future-Ready Enterprise",
      description: "Seamlessly integrate SAP and AI technologies to create a resilient, adaptive business ecosystem.",
      image: "/abstract-digital-background.png",
      icon: <Workflow className="h-6 w-6" />,
      color: "from-emerald-600 to-teal-400",
    },
  ]

  const currentSlide = slides[activeSlide]

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background with animated gradient overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.image || "/placeholder.svg"}
            alt={currentSlide.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: index % 3 === 0 ? "#60a5fa" : index % 3 === 1 ? "#818cf8" : "#34d399",
              boxShadow:
                index % 3 === 0 ? "0 0 15px #60a5fa" : index % 3 === 1 ? "0 0 15px #818cf8" : "0 0 15px #34d399",
            }}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0.3 + Math.random() * 0.7,
              scale: 0.5 + Math.random() * 0.5,
            }}
            animate={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: [0.3, 0.7, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${currentSlide.color} mb-6`}
              >
                <div className="mr-2">{currentSlide.icon}</div>
                <span className="font-medium">{currentSlide.subtitle}</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    {currentSlide.title.split(" ").map((word, i) => (
                      <span key={i}>
                        {i === 0 ? (
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                            {word}{" "}
                          </span>
                        ) : (
                          word + " "
                        )}
                      </span>
                    ))}
                  </h1>

                  <p className="text-xl text-gray-300 mb-8">{currentSlide.description}</p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
                  Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl hidden lg:block"
          >
            {/* Video background for the card */}
            <div className="absolute inset-0 bg-black">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80">
                <source src="/tech-wave.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex justify-between items-start">
                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-3 border border-gray-700">
                  <BrainCircuit className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex space-x-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-3 h-3 rounded-full ${activeSlide === index ? "bg-blue-500" : "bg-gray-600"}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <h3 className="text-xl font-bold mb-2">SAP & AI Integration</h3>
                <p className="text-gray-300 mb-4">
                  Seamlessly combine SAP's enterprise capabilities with cutting-edge AI for transformative business
                  outcomes.
                </p>
                <Button variant="outline" size="sm" className="border-blue-500 text-blue-400 hover:bg-blue-950/50">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
