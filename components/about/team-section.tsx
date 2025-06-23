"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
  delay?: number
}

const TeamMember = ({ name, role, bio, image, delay = 0 }: TeamMemberProps) => {
  // Default fallback image
  const fallbackImage = "/confident-professional.png"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative rounded-2xl backdrop-blur-md bg-card/30 border border-border shadow-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-[1.02]">
        <div className="relative h-64 w-full">
          <Image src={image && image.trim() !== "" ? image : fallbackImage} alt={name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        <div className="p-6 relative">
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

          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-blue-500 dark:text-blue-400 mb-4">{role}</p>
          <p className="text-foreground/80 mb-6">{bio}</p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "With over 20 years of experience in technology leadership and SAP implementations, Sarah drives ESG's vision and strategy.",
      image: "/images/team/ceo.jpg",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Michael leads our technology initiatives, focusing on SAP innovation and cutting-edge solutions for enterprise clients.",
      image: "/images/team/cto.jpg",
    },
    {
      name: "Priya Patel",
      role: "Head of AI Research",
      bio: "Priya spearheads our AI research, developing advanced algorithms and machine learning models to enhance SAP implementations.",
      image: "/images/team/ai-head.jpg",
    },
    {
      name: "David Rodriguez",
      role: "SAP Practice Lead",
      bio: "David brings 15+ years of deep expertise in SAP solutions, helping clients navigate complex S/4HANA transformations and implementations.",
      image: "/images/team/sap-lead.jpg",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h2 className="text-2xl font-bold text-center mb-16">
        Our SAP{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">Leadership</span>{" "}
        Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
            image={member.image}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  )
}
