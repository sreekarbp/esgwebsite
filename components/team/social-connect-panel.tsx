"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { X, Linkedin, Twitter, Github, Mail, Search, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SocialConnectPanelProps {
  onClose: () => void
  teamMembers: any[]
}

export default function SocialConnectPanel({ onClose, teamMembers }: SocialConnectPanelProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPlatform, setSelectedPlatform] = useState("all")
  const [connecting, setConnecting] = useState<number | null>(null)
  const [connected, setConnected] = useState<number[]>([])

  // Close panel when Escape key is pressed
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  const platforms = [
    { id: "all", label: "All Platforms" },
    { id: "linkedin", label: "LinkedIn", icon: Linkedin },
    { id: "twitter", label: "Twitter", icon: Twitter },
    { id: "github", label: "GitHub", icon: Github },
    { id: "email", label: "Email", icon: Mail },
  ]

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesPlatform =
      selectedPlatform === "all" ||
      (selectedPlatform === "linkedin" && member.socialProfiles.linkedin) ||
      (selectedPlatform === "twitter" && member.socialProfiles.twitter) ||
      (selectedPlatform === "github" && member.socialProfiles.github) ||
      (selectedPlatform === "email" && member.socialProfiles.email)

    return matchesSearch && matchesPlatform
  })

  const handleConnect = (memberId: number) => {
    setConnecting(memberId)
    // Simulate connection process
    setTimeout(() => {
      setConnecting(null)
      setConnected((prev) => [...prev, memberId])
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-3xl bg-background rounded-t-2xl sm:rounded-2xl shadow-xl max-h-[80vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Connect with Our Team</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search and filter */}
        <div className="p-4 border-b">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search team members..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {platforms.map((platform) => (
              <Button
                key={platform.id}
                variant={selectedPlatform === platform.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPlatform(platform.id)}
                className={
                  selectedPlatform === platform.id
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-400"
                }
              >
                {platform.icon && <platform.icon className="mr-2 h-4 w-4" />}
                {platform.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Team members list */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="relative h-12 w-12 flex-shrink-0">
                    <Image
                      src={member.image || "/placeholder.svg?height=48&width=48&query=professional"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{member.name}</h3>
                    <p className="text-sm text-foreground/70 truncate">{member.role}</p>
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    {member.socialProfiles.linkedin && (
                      <a
                        href={member.socialProfiles.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/60 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.socialProfiles.twitter && (
                      <a
                        href={member.socialProfiles.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-500 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/60 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.socialProfiles.github && (
                      <a
                        href={member.socialProfiles.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {member.socialProfiles.email && (
                      <a
                        href={`mailto:${member.socialProfiles.email}`}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <Button
                    size="sm"
                    variant={connected.includes(member.id) ? "outline" : "default"}
                    disabled={connecting === member.id}
                    onClick={() => !connected.includes(member.id) && handleConnect(member.id)}
                    className={
                      connected.includes(member.id)
                        ? "border-green-500 text-green-600 dark:border-green-500 dark:text-green-400"
                        : "bg-blue-500 hover:bg-blue-600"
                    }
                  >
                    {connecting === member.id ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Connecting
                      </>
                    ) : connected.includes(member.id) ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Connected
                      </>
                    ) : (
                      "Connect"
                    )}
                  </Button>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-foreground/70">
                <p>No team members found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>

        {/* AI-powered suggestion */}
        <div className="p-4 border-t bg-gradient-to-r from-blue-50/50 to-violet-50/50 dark:from-blue-950/30 dark:to-violet-950/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-blue-500/10 text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a8 8 0 0 0-8 8c0 1.5.5 2.5 1.5 3.5L12 22l6.5-8.5c1-1 1.5-2 1.5-3.5a8 8 0 0 0-8-8z"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">AI-Powered Networking</p>
              <p className="text-xs text-foreground/70">
                Our AI analyzes your profile and suggests the best team members to connect with based on your interests
                and needs.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
