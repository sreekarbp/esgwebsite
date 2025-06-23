"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"

interface TeamMemberCardProps {
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
  onClick: () => void
}

export default function TeamMemberCard({ member, onClick }: TeamMemberCardProps) {
  // Default fallback image
  const fallbackImage = "/confident-professional.png"

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative rounded-xl overflow-hidden backdrop-blur-md bg-card/30 border border-border shadow-lg h-full cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-56">
        <Image
          src={member.image && member.image.trim() !== "" ? member.image : fallbackImage}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>

        {/* Social icons overlay */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.socialProfiles.linkedin && (
            <a
              href={member.socialProfiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin size={16} />
            </a>
          )}
          {member.socialProfiles.twitter && (
            <a
              href={member.socialProfiles.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Twitter size={16} />
            </a>
          )}
          {member.socialProfiles.github && (
            <a
              href={member.socialProfiles.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg">{member.name}</h3>
        <p className="text-blue-500 dark:text-blue-400 text-sm mb-2">{member.role}</p>
        <p className="text-sm text-foreground/70 line-clamp-2 mb-3">{member.bio}</p>

        <div className="flex flex-wrap gap-1 mt-2">
          {member.expertise.slice(0, 2).map((skill, index) => (
            <span
              key={index}
              className="inline-block text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
            >
              {skill}
            </span>
          ))}
          {member.expertise.length > 2 && (
            <span className="inline-block text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              +{member.expertise.length - 2}
            </span>
          )}
        </div>
      </div>

      {/* Hover effect */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-violet-500"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
