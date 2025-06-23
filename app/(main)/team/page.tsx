"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Search, Users, UserPlus, RefreshCw } from "lucide-react"
import FluidBackground from "@/components/backgrounds/fluid-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import TeamMemberCard from "@/components/team/team-member-card"
import TeamMemberModal from "@/components/team/team-member-modal"
import SocialConnectPanel from "@/components/team/social-connect-panel"

export default function TeamPage() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [showSocialPanel, setShowSocialPanel] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      category: "leadership",
      bio: "With over 20 years of experience in technology leadership and SAP implementations, Sarah drives ESG's vision and strategy.",
      image: "/images/team/ceo.jpg",
      expertise: ["SAP Strategy", "Digital Transformation", "Enterprise Architecture"],
      socialProfiles: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
        email: "sarah.johnson@example.com",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      category: "leadership",
      bio: "Michael leads our technology initiatives, focusing on SAP innovation and cutting-edge solutions for enterprise clients.",
      image: "/images/team/cto.jpg",
      expertise: ["SAP Architecture", "Cloud Migration", "AI Integration"],
      socialProfiles: {
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelchen",
        github: "https://github.com/michaelchen",
        email: "michael.chen@example.com",
      },
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Head of AI Research",
      category: "technology",
      bio: "Priya spearheads our AI research, developing advanced algorithms and machine learning models to enhance SAP implementations.",
      image: "/images/team/ai-head.jpg",
      expertise: ["Machine Learning", "Natural Language Processing", "SAP AI Integration"],
      socialProfiles: {
        linkedin: "https://linkedin.com/in/priyapatel",
        github: "https://github.com/priyapatel",
        email: "priya.patel@example.com",
      },
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "SAP Practice Lead",
      category: "sap",
      bio: "David brings 15+ years of deep expertise in SAP solutions, helping clients navigate complex S/4HANA transformations and implementations.",
      image: "/images/team/sap-lead.jpg",
      expertise: ["S/4HANA", "SAP BTP", "SAP Fiori", "ABAP"],
      socialProfiles: {
        linkedin: "https://linkedin.com/in/davidrodriguez",
        twitter: "https://twitter.com/davidrodriguez",
        email: "david.rodriguez@example.com",
      },
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "SAP HANA Specialist",
      category: "sap",
      bio: "Emma specializes in SAP HANA database optimization and implementation, ensuring peak performance for enterprise systems.",
      image: "/images/team/emma-wilson.jpg",
      expertise: ["SAP HANA", "Database Optimization", "Data Modeling"],
      socialProfiles: {
        linkedin: "https://linkedin.com/in/emmawilson",
        email: "emma.wilson@example.com",
      },
    },
    {
      id: 6,
      name: "James Park",
      role: "SAP Integration Architect",
      category: "sap",
      bio: "James designs and implements complex integration solutions between SAP and third-party systems using SAP PO, CPI, and API Management.",
      image: "/images/team/james-park.jpg",
      expertise: ["SAP Integration Suite", "API Management", "SAP CPI"],
      socialProfiles: {
        linkedin: "https://linkedin.com/in/jamespark",
        github: "https://github.com/jamespark",
        email: "james.park@example.com",
      },
    },
    {
      id: 7,
      name: "Sophia Martinez",
      role: "SAP Fiori Developer",
      category: "development",
      bio: "Sophia creates intuitive and responsive user interfaces using SAP Fiori and UI5, enhancing user experience across SAP applications.",
      image: "/images/team/sophia-martinez.jpg",
      expertise: ["SAP Fiori", "UI5", "Frontend Development", "UX Design"],
      socialProfiles: {
        linkedin: "https://linkedin.com/in/sophiamartinez",
        github: "https://github.com/sophiamartinez",
        twitter: "https://twitter.com/sophiamartinez",
        email: "sophia.martinez@example.com",
      },
    },
    {
      id: 8,
      name: "Robert Kim",
      role: "SAP ABAP Developer",
      category: "development",
      bio: "Robert specializes in ABAP development and customization, with expertise in both classic ABAP and modern ABAP for HANA.",
      image: "/images/team/robert-kim.jpg",
      expertise: ["ABAP", "ABAP OO", "ABAP for HANA", "RAP"],
      socialProfiles: {
        linkedin: "https://linkedin.com/in/robertkim",
        github: "https://github.com/robertkim",
        email: "robert.kim@example.com",
      },
    },
  ])

  // AI-suggested team members based on current view
  const [suggestedMembers, setSuggestedMembers] = useState([])

  useEffect(() => {
    setMounted(true)

    // Simulate AI generating suggested connections
    const generateSuggestions = () => {
      // In a real app, this would be an API call to an AI service
      const suggestions = [
        {
          id: 101,
          name: "Alex Thompson",
          role: "SAP S/4HANA Consultant",
          image: "/images/team/suggested-1.jpg",
          match: 95,
          reason: "Based on your team's SAP focus",
        },
        {
          id: 102,
          name: "Nina Patel",
          role: "SAP BTP Developer",
          image: "/images/team/suggested-2.jpg",
          match: 92,
          reason: "Complements your integration team",
        },
        {
          id: 103,
          name: "Marcus Johnson",
          role: "SAP Analytics Specialist",
          image: "/images/team/suggested-3.jpg",
          match: 88,
          reason: "Fills gap in analytics expertise",
        },
      ]
      setSuggestedMembers(suggestions)
    }

    generateSuggestions()
  }, [])

  if (!mounted) return null

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.bio.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = filterCategory === "all" || member.category === filterCategory

    return matchesSearch && matchesCategory
  })

  const handleRefreshSuggestions = () => {
    setIsRefreshing(true)
    // Simulate AI generating new suggestions
    setTimeout(() => {
      const newSuggestions = [
        {
          id: 104,
          name: "Olivia Chen",
          role: "SAP Security Expert",
          image: "/images/team/suggested-4.jpg",
          match: 94,
          reason: "Enhances your security capabilities",
        },
        {
          id: 105,
          name: "Daniel Lee",
          role: "SAP Cloud Platform Architect",
          image: "/images/team/suggested-5.jpg",
          match: 91,
          reason: "Strengthens your cloud expertise",
        },
        {
          id: 106,
          name: "Sophia Williams",
          role: "SAP Data Intelligence Specialist",
          image: "/images/team/suggested-6.jpg",
          match: 89,
          reason: "Complements your AI initiatives",
        },
      ]
      setSuggestedMembers(newSuggestions)
      setIsRefreshing(false)
    }, 1500)
  }

  const handleMemberClick = (member) => {
    setSelectedMember(member)
  }

  const handleCloseModal = () => {
    setSelectedMember(null)
  }

  const categories = [
    { id: "all", label: "All Team" },
    { id: "leadership", label: "Leadership" },
    { id: "sap", label: "SAP Experts" },
    { id: "technology", label: "Technology" },
    { id: "development", label: "Development" },
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
              Meet Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                Expert Team
              </span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Our team of SAP specialists brings decades of combined experience to deliver exceptional results for your
              business.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button
                onClick={() => setShowSocialPanel(true)}
                className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
              >
                <Users className="mr-2 h-4 w-4" />
                Connect with Our Team
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Join Our Team
              </Button>
            </div>
          </motion.div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search by name, role, or expertise..."
                  className="pl-10 bg-card/30 backdrop-blur-md border-border"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={filterCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterCategory(category.id)}
                    className={
                      filterCategory === category.id
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-400"
                    }
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            <AnimatePresence>
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <TeamMemberCard member={member} onClick={() => handleMemberClick(member)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* AI-Suggested Connections */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                  AI-Suggested
                </span>{" "}
                Connections
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefreshSuggestions}
                disabled={isRefreshing}
                className="border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-400"
              >
                <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
                Refresh Suggestions
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedMembers.map((suggestion) => (
                <motion.div
                  key={suggestion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-xl overflow-hidden backdrop-blur-md bg-card/30 border border-border shadow-lg group"
                >
                  <div className="absolute top-2 right-2 z-10">
                    <div className="bg-blue-500 text-white text-xs font-bold rounded-full px-2 py-1">
                      {suggestion.match}% Match
                    </div>
                  </div>

                  <div className="relative h-48">
                    <Image
                      src={suggestion.image || "/placeholder.svg?height=192&width=384&query=professional"}
                      alt={suggestion.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-lg">{suggestion.name}</h3>
                    <p className="text-blue-500 text-sm mb-2">{suggestion.role}</p>
                    <p className="text-sm text-foreground/70 mb-3">
                      <span className="font-medium">AI Insight:</span> {suggestion.reason}
                    </p>
                    <Button size="sm" className="w-full bg-blue-500 hover:bg-blue-600">
                      Connect
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && <TeamMemberModal member={selectedMember} onClose={handleCloseModal} />}

      {/* Social Connect Panel */}
      <AnimatePresence>
        {showSocialPanel && <SocialConnectPanel onClose={() => setShowSocialPanel(false)} teamMembers={teamMembers} />}
      </AnimatePresence>
    </div>
  )
}
