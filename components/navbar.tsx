"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const navItems = [
    {
      name: "Who We Are",
      href: "/who-we-are",
      hasDropdown: true,
      description:
        "Learn about ESG's vision, values, leadership, and success stories that define our excellence in IT solutions.",
      dropdownItems: [
        { name: "About ESG", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Resource Library", href: "/resources" },
      ],
    },
    {
      name: "What We Do",
      href: "/services",
      hasDropdown: true,
      description:
        "Explore our comprehensive suite of IT services, including SAP, AI, Cloud, and Digital Transformation, designed to drive business success.",
      dropdownItems: [
        { name: "SAP Enterprise Solutions", href: "/services/sap-enterprise-solutions" },
        { name: "SAP Data & AI Analytics", href: "/services/sap-data-ai-analytics" },
        { name: "SAP Supply Chain & Procurement", href: "/services/sap-supply-chain-procurement" },
        { name: "SAP Technology & Innovation", href: "/services/sap-technology-innovation" },
        { name: "SAP RevBRIM", href: "/services/sap-revbrim" },
        { name: "Digital & AI Solutions", href: "/services/digital-ai-solutions" },
        { name: "Cloud Solutions", href: "/services/cloud-solutions" },
        { name: "Cybersecurity Services", href: "/services/cybersecurity-services" },
        { name: "Staffing Solutions", href: "/services/staffing-solutions" },
      ],
    },
    {
      name: "Our Expertise",
      href: "#",
      hasDropdown: true,
      description:
        "Discover how ESG delivers tailored IT solutions across various industries, enhancing efficiency, security, and digital transformation.",
      dropdownItems: [
        { name: "Manufacturing & Engineering", href: "/industries/manufacturing" },
        { name: "Automotive & Transportation", href: "/industries/automotive" },
        { name: "Construction & Infrastructure", href: "/industries/construction" },
        { name: "Energy & Utilities", href: "/industries/energy" },
        { name: "IT & Consulting", href: "/industries/it-consulting" },
        { name: "Retail & Consumer Goods", href: "/industries/retail" },
        { name: "Finance & Professional Services", href: "/industries/finance" },
        { name: "Healthcare & Pharmaceuticals", href: "/industries/healthcare" },
      ],
    },
    {
      name: "Tech Stack",
      href: "#",
      hasDropdown: true,
      description:
        "Stay ahead with cutting-edge technologies, from SAP and AI to cloud computing and cybersecurity, powering next-gen solutions.",
      dropdownItems: [
        { name: "SAP Technologies", href: "/tech-stack/sap" },
        { name: "Cloud & DevOps", href: "/tech-stack/cloud-devops" },
        { name: "AI & Data Analytics", href: "/tech-stack/ai-data-analytics" },
        { name: "Cybersecurity & Compliance", href: "/tech-stack/cybersecurity" },
        { name: "Digital Transformation & Automation", href: "/tech-stack/digital-transformation" },
        { name: "Enterprise Business Technologies", href: "/tech-stack/enterprise-business" },
        { name: "UI/UX & Frontend Technologies", href: "/tech-stack/ui-ux" },
        { name: "Software Development & Engineering", href: "/tech-stack/software-development" },
      ],
    },
    {
      name: "Join Our Team",
      href: "/careers",
      hasDropdown: true,
      description:
        "Join a team of passionate innovators at ESG and shape the future of technology with us. Explore exciting career opportunities today.",
      dropdownItems: [
        { name: "LCA Postings", href: "/careers/lca-postings" },
        { name: "Current Openings", href: "/careers/openings" },
        { name: "Training & Certifications", href: "/careers/training" },
      ],
    },
    {
      name: "Let's Discuss",
      href: "/contact",
      hasDropdown: false,
    },
  ]

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/esg-colored-logo.png" alt="ESG Logo" width={48} height={48} className="mr-2" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`text-sm font-medium transition-colors flex items-center ${
                      activeDropdown === item.name ? "text-blue-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name
                          ? "rotate-180 text-blue-400"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-5xl z-50 flex"
                      style={{ width: "800px" }}
                    >
                      <div className="w-full flex overflow-hidden rounded-lg shadow-lg">
                        {/* Left side - Description */}
                        <div className="w-2/5 bg-blue-400/80 backdrop-blur-md p-8">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.name}</h3>
                          <p className="text-gray-800">{item.description}</p>
                        </div>

                        {/* Right side - Links */}
                        <div className="w-3/5 bg-gray-900 p-8">
                          <div className="grid grid-cols-1 gap-4">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="text-gray-200 hover:text-blue-400 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Search Icon */}
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-800/50 transition-colors" aria-label="Search">
              <Search className="h-5 w-5 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
