"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ClientSuccessStories() {
  const [activeStory, setActiveStory] = useState(0)

  const stories = [
    {
      client: "Global Manufacturing Leader",
      logo: "/images/clients/client-1.svg",
      image: "/images/case-studies/manufacturing.jpg",
      quote:
        "ESG's SAP S/4HANA implementation combined with their AI solutions has transformed our manufacturing operations, reducing downtime by 35% and improving production efficiency by 28%.",
      person: "Sarah Johnson",
      title: "CIO",
      avatar: "/images/testimonials/testimonial-1.jpg",
      stats: [
        { label: "Efficiency Increase", value: "28%" },
        { label: "Downtime Reduction", value: "35%" },
        { label: "ROI Achieved", value: "267%" },
      ],
    },
    {
      client: "Leading Financial Institution",
      logo: "/images/clients/client-2.svg",
      image: "/images/case-studies/finance.jpg",
      quote:
        "The AI-enhanced SAP analytics solution provided by ESG has revolutionized our financial forecasting accuracy and helped us identify new revenue opportunities worth over $12M annually.",
      person: "Michael Chen",
      title: "CFO",
      avatar: "/images/testimonials/testimonial-2.jpg",
      stats: [
        { label: "Forecast Accuracy", value: "94%" },
        { label: "New Revenue", value: "$12M" },
        { label: "Process Automation", value: "62%" },
      ],
    },
    {
      client: "Retail Innovation Group",
      logo: "/images/clients/client-3.svg",
      image: "/images/case-studies/retail.jpg",
      quote:
        "ESG's implementation of SAP Customer Experience solutions with AI-powered personalization has transformed our customer engagement, increasing conversion rates and customer satisfaction scores.",
      person: "Emily Rodriguez",
      title: "Chief Digital Officer",
      avatar: "/images/testimonials/testimonial-3.jpg",
      stats: [
        { label: "Conversion Rate", value: "+42%" },
        { label: "Customer Satisfaction", value: "4.8/5" },
        { label: "Inventory Accuracy", value: "99.2%" },
      ],
    },
  ]

  const currentStory = stories[activeStory]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world results from our SAP and AI implementations across industries.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeStory === index ? "bg-blue-500 scale-125" : "bg-gray-600"
                }`}
                aria-label={`View story ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={currentStory.image || "/placeholder.svg"}
                  alt={currentStory.client}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                  <Image
                    src={currentStory.logo || "/placeholder.svg"}
                    alt={`${currentStory.client} logo`}
                    width={100}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold">{currentStory.client}</h3>
                </div>

                <blockquote className="text-lg text-gray-300 italic mb-6">"{currentStory.quote}"</blockquote>

                <div className="flex items-center mb-8">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={currentStory.avatar || "/placeholder.svg"}
                      alt={currentStory.person}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{currentStory.person}</p>
                    <p className="text-sm text-gray-400">{currentStory.title}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {currentStory.stats.map((stat, index) => (
                    <div key={index} className="bg-gray-800/70 p-3 rounded-lg text-center">
                      <p className="text-sm text-gray-400">{stat.label}</p>
                      <p className="text-xl font-bold text-blue-400">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700">
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800"
            >
              <Image
                src={`/images/clients/client-${index}.svg`}
                alt={`Client ${index}`}
                width={120}
                height={40}
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
