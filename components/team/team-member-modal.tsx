"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { X, Linkedin, Twitter, Github, Mail, Award, Briefcase, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamMemberModalProps {
  member: {
    id: number
    name: string
    role: string
    bio: string
    image: string
    expertise: string[]
    socialProfiles: {
      linkedin?: string
      twitter?: string
      github?: string
      email?: string
    }
  }
  onClose: () => void
}

export default function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  // Default fallback image
  const fallbackImage = "/confident-professional.png"

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevent scrolling of the body when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  // Generate random stats for the team member (in a real app, these would come from the database)
  const stats = {
    projects: Math.floor(Math.random() * 30) + 10,
    experience: Math.floor(Math.random() * 15) + 5,
    certifications: Math.floor(Math.random() * 8) + 2,
    location: ["New York", "San Francisco", "London", "Berlin", "Singapore"][Math.floor(Math.random() * 5)],
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-4xl bg-background rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left column - Image and social links */}
          <div className="relative h-64 md:h-auto">
            <div className="absolute inset-0">
              <Image
                src={member.image && member.image.trim() !== "" ? member.image : fallbackImage}
                alt={member.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background to-transparent"></div>
            </div>

            <div className="absolute bottom-6 left-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex md:flex-col gap-3">
              {member.socialProfiles.linkedin && (
                <a
                  href={member.socialProfiles.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {member.socialProfiles.twitter && (
                <a
                  href={member.socialProfiles.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {member.socialProfiles.github && (
                <a
                  href={member.socialProfiles.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {member.socialProfiles.email && (
                <a
                  href={`mailto:${member.socialProfiles.email}`}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Right column - Details */}
          <div className="col-span-2 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-1">{member.name}</h2>
            <p className="text-blue-500 dark:text-blue-400 text-lg mb-4">{member.role}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
                  <Briefcase className="h-4 w-4" />
                  <span className="text-sm font-medium">Projects</span>
                </div>
                <p className="text-xl font-bold">{stats.projects}+</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">Experience</span>
                </div>
                <p className="text-xl font-bold">{stats.experience} years</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-1">
                  <Award className="h-4 w-4" />
                  <span className="text-sm font-medium">Certifications</span>
                </div>
                <p className="text-xl font-bold">{stats.certifications}</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <p className="text-xl font-bold">{stats.location}</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-foreground/80 mb-6">{member.bio}</p>

            <h3 className="text-lg font-semibold mb-2">Expertise</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {member.expertise.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-2">AI-Generated Insights</h3>
            <div className="bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-950/50 dark:to-violet-950/50 rounded-lg p-4 mb-6">
              <p className="text-foreground/80 italic">
                Based on {member.name}'s expertise and experience, they would be an excellent fit for enterprise SAP
                transformation projects requiring deep technical knowledge and business process understanding.
              </p>
            </div>

            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600">
                Schedule a Meeting
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950"
              >
                View Full Profile
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
