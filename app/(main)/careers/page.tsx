"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import FluidBackground from "@/components/backgrounds/fluid-background"
import { ArrowRight } from "lucide-react"

export default function CareersPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const jobOpenings = [
    {
      title: "SAP Technical Consultant",
      location: "Dallas, TX",
      type: "Full-time",
      description: "Join our team as an SAP Technical Consultant to help clients implement and optimize SAP solutions.",
      slug: "sap-technical-consultant",
    },
    {
      title: "AI Research Scientist",
      location: "Remote",
      type: "Full-time",
      description: "Work on cutting-edge AI research and development projects to drive innovation.",
      slug: "ai-research-scientist",
    },
    {
      title: "Cloud Solutions Architect",
      location: "New York, NY",
      type: "Full-time",
      description: "Design and implement cloud solutions for enterprise clients across various industries.",
      slug: "cloud-solutions-architect",
    },
    {
      title: "Cybersecurity Analyst",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Protect our clients' digital assets and sensitive information from cyber threats.",
      slug: "cybersecurity-analyst",
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Fluid Background */}
      <FluidBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">Team</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Be part of a team that's shaping the future of enterprise technology and artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Why Join{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">ESG</span>
              </h2>
              <p className="text-foreground/80 mb-6">
                At ESG, we're more than just a technology company. We're a team of passionate innovators dedicated to
                solving complex business challenges through cutting-edge technology solutions.
              </p>
              <p className="text-foreground/80 mb-6">
                We offer a collaborative and inclusive work environment, opportunities for professional growth, and the
                chance to work on exciting projects that make a real impact.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-card/30 backdrop-blur-md p-4 rounded-lg border border-border">
                  <h3 className="text-lg font-bold mb-2">Innovation</h3>
                  <p className="text-foreground/80 text-sm">
                    Work on cutting-edge technologies and innovative solutions.
                  </p>
                </div>
                <div className="bg-card/30 backdrop-blur-md p-4 rounded-lg border border-border">
                  <h3 className="text-lg font-bold mb-2">Growth</h3>
                  <p className="text-foreground/80 text-sm">
                    Continuous learning and professional development opportunities.
                  </p>
                </div>
                <div className="bg-card/30 backdrop-blur-md p-4 rounded-lg border border-border">
                  <h3 className="text-lg font-bold mb-2">Impact</h3>
                  <p className="text-foreground/80 text-sm">Make a real difference for clients and communities.</p>
                </div>
                <div className="bg-card/30 backdrop-blur-md p-4 rounded-lg border border-border">
                  <h3 className="text-lg font-bold mb-2">Balance</h3>
                  <p className="text-foreground/80 text-sm">Flexible work arrangements and work-life balance.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
                <Image src="/images/team-collaboration.jpg" alt="Team Collaboration" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              Current{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                Openings
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect opportunity to grow your career with ESG.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl backdrop-blur-md bg-card/30 border border-border shadow-lg group hover:border-blue-500/30 transition-colors"
              >
                {/* Water drop effect */}
                <motion.div
                  className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "mirror",
                  }}
                />

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{job.title}</h3>
                  <div className="flex space-x-2">
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-500">
                      {job.location}
                    </span>
                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                      {job.type}
                    </span>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6">{job.description}</p>

                <Link
                  href={`/careers/openings/${job.slug}`}
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white font-medium transition-transform"
            >
              View All Openings <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          <button className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600 dark:text-blue-400"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
            </div>
          </button>
          <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full px-4 py-2 text-sm font-medium shadow-lg">
            Chat with us 👋
          </div>
        </div>
      </div>
    </div>
  )
}
