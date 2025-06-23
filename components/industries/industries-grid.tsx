"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "@/components/ui/button"

// Industry data
const industries = [
  {
    name: "Manufacturing",
    description: "AI-powered solutions for smart factories, predictive maintenance, and supply chain optimization.",
    image: "/images/industries/manufacturing.jpg",
    link: "/industries/manufacturing",
    category: "Manufacturing",
  },
  {
    name: "Healthcare",
    description: "Transforming patient care with data analytics, AI diagnostics, and operational efficiency.",
    image: "/images/industries/healthcare.jpg",
    link: "/industries/healthcare",
    category: "Healthcare",
  },
  {
    name: "Financial Services",
    description: "Secure, intelligent solutions for banking, insurance, and investment management.",
    image: "/images/industries/banking.jpg",
    link: "/industries/financial-services",
    category: "Financial",
  },
  {
    name: "Retail",
    description: "Omnichannel experiences, inventory optimization, and personalized customer journeys.",
    image: "/images/industries/retail.jpg",
    link: "/industries/retail",
    category: "Retail",
  },
  {
    name: "Automotive",
    description: "Connected vehicle platforms, manufacturing excellence, and supply chain resilience.",
    image: "/images/industries/automotive-manufacturing.jpg",
    link: "/industries/automotive",
    category: "Manufacturing",
  },
  {
    name: "Aerospace & Defense",
    description: "Mission-critical systems, supply chain security, and operational excellence.",
    image: "/images/industries/aerospace-manufacturing.jpg",
    link: "/industries/aerospace-defense",
    category: "Manufacturing",
  },
  {
    name: "Energy & Utilities",
    description: "Smart grid solutions, predictive maintenance, and sustainable energy management.",
    image: "/images/industries/energy.jpg",
    link: "/industries/energy-utilities",
    category: "Energy",
  },
  {
    name: "Telecommunications",
    description: "Network optimization, customer experience, and digital service innovation.",
    image: "/images/industries/telecom.jpg",
    link: "/industries/telecommunications",
    category: "Technology",
  },
  {
    name: "Pharmaceuticals",
    description: "R&D acceleration, regulatory compliance, and supply chain integrity.",
    image: "/images/industries/pharma-manufacturing.jpg",
    link: "/industries/pharmaceuticals",
    category: "Healthcare",
  },
  {
    name: "Consumer Goods",
    description: "Product innovation, demand forecasting, and direct-to-consumer strategies.",
    image: "/images/industries/consumer-goods.jpg",
    link: "/industries/consumer-goods",
    category: "Retail",
  },
  {
    name: "Technology",
    description: "Digital transformation, cloud migration, and AI-driven innovation.",
    image: "/digital-entertainment-hub.png",
    link: "/industries/technology",
    category: "Technology",
  },
  {
    name: "Media & Entertainment",
    description: "Content management, audience analytics, and digital rights management.",
    image: "/digital-entertainment-hub.png",
    link: "/industries/media-entertainment",
    category: "Technology",
  },
  {
    name: "Transportation & Logistics",
    description: "Route optimization, fleet management, and end-to-end visibility.",
    image: "/global-supply-chain.png",
    link: "/industries/transportation-logistics",
    category: "Transportation",
  },
  {
    name: "Construction",
    description: "Project management, BIM integration, and resource optimization.",
    image: "/digital-construction-planning.png",
    link: "/industries/construction",
    category: "Manufacturing",
  },
  {
    name: "Agriculture",
    description: "Precision farming, supply chain management, and sustainable practices.",
    image: "/tech-harvest.png",
    link: "/industries/agriculture",
    category: "Energy",
  },
  {
    name: "Education",
    description: "Learning management, student analytics, and administrative efficiency.",
    image: "/digital-learning-future.png",
    link: "/industries/education",
    category: "Technology",
  },
  {
    name: "Hospitality",
    description: "Guest experience, revenue management, and operational excellence.",
    image: "/sleek-hotel-lobby.png",
    link: "/industries/hospitality",
    category: "Retail",
  },
  {
    name: "Insurance",
    description: "Risk assessment, claims processing, and customer engagement.",
    image: "/digital-insurance-workflow.png",
    link: "/industries/insurance",
    category: "Financial",
  },
  {
    name: "Real Estate",
    description: "Property management, tenant experience, and investment analytics.",
    image: "/images/industries/real-estate.jpg",
    link: "/industries/real-estate",
    category: "Financial",
  },
  {
    name: "Public Sector",
    description: "Citizen services, regulatory compliance, and operational efficiency.",
    image: "/images/industries/public-sector.jpg",
    link: "/industries/public-sector",
    category: "Technology",
  },
]

export default function IndustriesGrid() {
  const [showAll, setShowAll] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All Industries")

  // Filter industries based on selected category
  const filteredIndustries =
    selectedCategory === "All Industries"
      ? industries
      : industries.filter((industry) => industry.category === selectedCategory)

  // Display only first 8 industries if showAll is false
  const displayedIndustries = showAll ? filteredIndustries : filteredIndustries.slice(0, 8)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <div className="mb-20">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {displayedIndustries.map((industry, index) => (
            <motion.div key={industry.name} variants={itemVariants} layout className="group">
              <Link href={industry.link} className="block h-full">
                <motion.div
                  className="relative overflow-hidden rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm h-full hover:shadow-lg transition-all duration-300"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={
                        industry.image && industry.image.trim() !== ""
                          ? industry.image
                          : "/placeholder.svg?height=400&width=600&query=abstract tech background"
                      }
                      alt={industry.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>

                    {/* Futuristic overlay elements */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                      <div className="absolute top-0 right-0 w-1 h-1/3 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                      <div className="absolute bottom-0 left-0 w-1 h-1/3 bg-gradient-to-t from-blue-500 to-purple-500"></div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4">{industry.description}</p>

                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Explore Solutions</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredIndustries.length > 8 && (
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="outline" onClick={() => setShowAll(!showAll)} className="group">
            <span>{showAll ? "Show Less" : "Show More Industries"}</span>
            {showAll ? (
              <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            )}
          </Button>
        </motion.div>
      )}
    </div>
  )
}
