"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, Twitter, Mail, ArrowLeft, ArrowRight } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  expertise: string[]
  social: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export default function AITeamShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  const teamMembers: TeamMember[] = [
    {
      id: "sarah-johnson",
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "With over 20 years of experience in technology leadership and SAP implementations, Sarah drives ESG's vision and strategy. Her background in enterprise software and AI has been instrumental in positioning ESG as a leader in the industry.",
      image: "/images/team/ceo.jpg",
      expertise: ["Strategic Leadership", "Enterprise Technology", "Digital Transformation", "AI Strategy"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@example.com",
      },
    },
    {
      id: "michael-chen",
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Michael leads our technology initiatives, focusing on SAP innovation and cutting-edge solutions for enterprise clients. With a Ph.D. in Computer Science and extensive experience in enterprise architecture, he ensures our technical solutions are robust, scalable, and forward-thinking.",
      image: "/images/team/cto.jpg",
      expertise: ["SAP Architecture", "Cloud Computing", "AI Development", "Enterprise Integration"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@example.com",
      },
    },
    {
      id: "priya-patel",
      name: "Priya Patel",
      role: "Head of AI Research",
      bio: "Priya spearheads our AI research, developing advanced algorithms and machine learning models to enhance SAP implementations. Her innovative work has led to several breakthroughs in predictive analytics and process automation for enterprise systems.",
      image: "/images/team/ai-head.jpg",
      expertise: ["Machine Learning", "Neural Networks", "Predictive Analytics", "Natural Language Processing"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "priya@example.com",
      },
    },
    {
      id: "david-rodriguez",
      name: "David Rodriguez",
      role: "SAP Practice Lead",
      bio: "David brings 15+ years of deep expertise in SAP solutions, helping clients navigate complex S/4HANA transformations and implementations. His methodical approach and technical knowledge ensure successful outcomes for our most challenging projects.",
      image: "/images/team/sap-lead.jpg",
      expertise: ["S/4HANA", "SAP Implementation", "Business Process Redesign", "Change Management"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@example.com",
      },
    },
  ]

  const nextMember = () => {
    setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))
  }

  const prevMember = () => {
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
              Leadership
            </span>{" "}
            Team
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Meet the experts who drive our vision and lead our teams to deliver exceptional results.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20">
            <button
              onClick={prevMember}
              className="p-3 rounded-full bg-background/50 backdrop-blur-md border border-white/10 text-white hover:bg-blue-500/20 transition-colors"
              aria-label="Previous team member"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20">
            <button
              onClick={nextMember}
              className="p-3 rounded-full bg-background/50 backdrop-blur-md border border-white/10 text-white hover:bg-blue-500/20 transition-colors"
              aria-label="Next team member"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          {/* Team Member Showcase */}
          <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-card/30 border border-border shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={teamMembers[activeIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                {/* Image Section */}
                <div className="relative h-[400px] md:h-auto">
                  <Image
                    src={teamMembers[activeIndex].image || "/placeholder.svg"}
                    alt={teamMembers[activeIndex].name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-background"></div>

                  {/* Mobile Info (visible on small screens) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
                    <h3 className="text-2xl font-bold">{teamMembers[activeIndex].name}</h3>
                    <p className="text-blue-400">{teamMembers[activeIndex].role}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-center">
                  {/* Desktop Info (hidden on small screens) */}
                  <div className="hidden md:block mb-6">
                    <h3 className="text-3xl font-bold">{teamMembers[activeIndex].name}</h3>
                    <p className="text-blue-400 text-xl">{teamMembers[activeIndex].role}</p>
                  </div>

                  <p className="text-foreground/80 mb-6">{teamMembers[activeIndex].bio}</p>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-foreground/60 mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {teamMembers[activeIndex].expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {teamMembers[activeIndex].social.linkedin && (
                      <a
                        href={teamMembers[activeIndex].social.linkedin}
                        className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors"
                        aria-label={`${teamMembers[activeIndex].name}'s LinkedIn profile`}
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {teamMembers[activeIndex].social.twitter && (
                      <a
                        href={teamMembers[activeIndex].social.twitter}
                        className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors"
                        aria-label={`${teamMembers[activeIndex].name}'s Twitter profile`}
                      >
                        <Twitter size={20} />
                      </a>
                    )}
                    {teamMembers[activeIndex].social.email && (
                      <a
                        href={`mailto:${teamMembers[activeIndex].social.email}`}
                        className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors"
                        aria-label={`Email ${teamMembers[activeIndex].name}`}
                      >
                        <Mail size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-blue-500 w-6" : "bg-gray-400/50"
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
