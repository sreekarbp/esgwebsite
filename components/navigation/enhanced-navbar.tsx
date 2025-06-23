"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import AnimatedSapAiLogo from "@/components/ui/animated-sap-ai-logo"
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Users,
  Briefcase,
  Building,
  BarChart,
  Database,
  Shield,
  Cloud,
  Cpu,
  Layers,
  Info,
  BookOpen,
  GraduationCap,
  Phone,
  Home,
  Newspaper,
  FileText,
  FileCheck,
} from "lucide-react"

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
  children?: {
    name: string
    href: string
    description?: string
    icon: React.ReactNode
  }[]
}

export default function EnhancedNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoverItem, setHoverItem] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const pathname = usePathname()
  const isMobile = useMediaQuery("(max-width: 1023px)")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown]) {
        const dropdownElement = dropdownRefs.current[activeDropdown]
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
          setActiveDropdown(null)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeDropdown])

  const navItems: NavItem[] = [
    {
      name: "Home",
      href: "/home",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "About Us",
      href: "/about",
      icon: <Info className="h-5 w-5" />,
      children: [
        {
          name: "Company Overview",
          href: "/about",
          description: "Learn about our company history and values",
          icon: <Building className="h-4 w-4" />,
        },
        {
          name: "Who We Are",
          href: "/who-we-are",
          description: "Meet our team and learn about our mission",
          icon: <Users className="h-4 w-4" />,
        },
        {
          name: "Our Mission",
          href: "/mission",
          description: "Discover our purpose and vision",
          icon: <BookOpen className="h-4 w-4" />,
        },
        {
          name: "Team",
          href: "/team",
          description: "Meet our leadership and experts",
          icon: <Users className="h-4 w-4" />,
        },
      ],
    },
    {
      name: "Services",
      href: "/services",
      icon: <Layers className="h-5 w-5" />,
      children: [
        {
          name: "All Services",
          href: "/services",
          description: "Overview of all our service offerings",
          icon: <Layers className="h-4 w-4" />,
        },
        {
          name: "SAP Enterprise Solutions",
          href: "/services/sap-enterprise-solutions",
          description: "End-to-end SAP implementation and optimization",
          icon: <Database className="h-4 w-4" />,
        },
        {
          name: "SAP Data & AI Analytics",
          href: "/services/sap-data-ai-analytics",
          description: "Transform data into actionable insights",
          icon: <BarChart className="h-4 w-4" />,
        },
        {
          name: "SAP Services",
          href: "/sap-services",
          description: "Comprehensive SAP consulting and implementation",
          icon: <Database className="h-4 w-4" />,
        },
        {
          name: "What We Do",
          href: "/what-we-do",
          description: "Explore our comprehensive service offerings",
          icon: <Briefcase className="h-4 w-4" />,
        },
        {
          name: "Digital & AI Solutions",
          href: "/services/digital-ai-solutions",
          description: "Innovative digital and AI-powered solutions",
          icon: <Cpu className="h-4 w-4" />,
        },
        {
          name: "Cloud Solutions",
          href: "/services/cloud-solutions",
          description: "Secure and scalable cloud infrastructure",
          icon: <Cloud className="h-4 w-4" />,
        },
        {
          name: "Cybersecurity Services",
          href: "/services/cybersecurity-services",
          description: "Protect your business with advanced security",
          icon: <Shield className="h-4 w-4" />,
        },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      icon: <Building className="h-5 w-5" />,
      children: [
        {
          name: "All Industries",
          href: "/industries",
          description: "Solutions across various industry sectors",
          icon: <Building className="h-4 w-4" />,
        },
        {
          name: "Manufacturing",
          href: "/industries/manufacturing",
          description: "Smart manufacturing solutions",
          icon: <Cpu className="h-4 w-4" />,
        },
        {
          name: "Healthcare",
          href: "/industries/healthcare",
          description: "Digital healthcare transformation",
          icon: <Users className="h-4 w-4" />,
        },
        {
          name: "Financial Services",
          href: "/industries/financial-services",
          description: "Fintech and banking solutions",
          icon: <BarChart className="h-4 w-4" />,
        },
        {
          name: "Retail",
          href: "/industries/retail",
          description: "Omnichannel retail experiences",
          icon: <Briefcase className="h-4 w-4" />,
        },
      ],
    },
    {
      name: "Careers",
      href: "/careers",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      name: "Resources",
      href: "/resources",
      icon: <Database className="h-5 w-5" />,
      children: [
        {
          name: "Blog",
          href: "/blog",
          description: "Latest insights and articles",
          icon: <Newspaper className="h-4 w-4" />,
        },
        {
          name: "Case Studies",
          href: "/case-studies",
          description: "Success stories and implementations",
          icon: <FileText className="h-4 w-4" />,
        },
        {
          name: "Whitepapers",
          href: "/whitepapers",
          description: "In-depth technical resources",
          icon: <FileText className="h-4 w-4" />,
        },
        {
          name: "LCA Postings",
          href: "/lca-postings",
          description: "Labor Condition Application notices",
          icon: <FileCheck className="h-4 w-4" />,
        },
      ],
    },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const handleMouseEnter = (name: string) => {
    if (!isMobile) {
      setHoverItem(name)
      setActiveDropdown(name)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoverItem(null)
      // Don't immediately close dropdown on mouse leave
      // This will be handled by the click outside handler
    }
  }

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const iconAnimation = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.2 } },
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: 10, height: 0, transition: { duration: 0.2, ease: "easeIn" } },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeIn" } },
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-[#0a0e17]/95 backdrop-blur-md shadow-lg" : "bg-[#0a0e17]/80",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
                ref={(el) => (dropdownRefs.current[item.name] = el)}
              >
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors",
                      activeDropdown === item.name || isActive(item.href)
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-blue-400 hover:bg-white/5",
                    )}
                    aria-expanded={activeDropdown === item.name}
                  >
                    <motion.div
                      className="mr-2"
                      variants={iconAnimation}
                      initial="initial"
                      animate={hoverItem === item.name ? "hover" : "initial"}
                    >
                      {item.icon}
                    </motion.div>
                    {item.name}
                    <motion.div
                      animate={{
                        rotate: activeDropdown === item.name ? 180 : 0,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </motion.div>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors",
                      isActive(item.href) ? "text-blue-400" : "text-gray-300 hover:text-blue-400 hover:bg-white/5",
                    )}
                    onMouseEnter={() => setHoverItem(item.name)}
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    <motion.div
                      className="mr-2"
                      variants={iconAnimation}
                      initial="initial"
                      animate={hoverItem === item.name ? "hover" : "initial"}
                    >
                      {item.icon}
                    </motion.div>
                    {item.name}
                  </Link>
                )}

                {/* Dropdown for desktop */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-[#0f1623] border border-gray-800 overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-3 text-sm hover:bg-blue-900/20 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex items-center">
                                <motion.div
                                  className="mr-3 text-blue-400"
                                  whileHover={{ scale: 1.2, rotate: 5 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {child.icon}
                                </motion.div>
                                <div>
                                  <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                                    {child.name}
                                  </div>
                                  {child.description && (
                                    <p className="mt-1 text-xs text-gray-400">{child.description}</p>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA and Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              aria-label="Search"
              className="p-2 rounded-full text-gray-300 hover:text-blue-400 hover:bg-white/5 transition-colors"
            >
              <Search className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-5 py-2 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-white/5 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: isOpen ? 0 : -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isOpen ? -90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden bg-[#0f1623] border-t border-gray-800 overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.name} className="py-2">
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className={cn(
                            "flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors",
                            activeDropdown === item.name || isActive(item.href)
                              ? "text-blue-400 bg-white/5"
                              : "text-gray-300 hover:text-blue-400 hover:bg-white/5",
                          )}
                        >
                          <div className="flex items-center">
                            <motion.div
                              className="mr-3 text-blue-400"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {item.icon}
                            </motion.div>
                            {item.name}
                          </div>
                          <motion.div
                            animate={{
                              rotate: activeDropdown === item.name ? 180 : 0,
                              transition: { duration: 0.2 },
                            }}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="mt-2 pl-4 border-l border-gray-700"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="flex items-center px-3 py-2 rounded-md text-sm text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-colors"
                                  onClick={() => {
                                    setIsOpen(false)
                                    setActiveDropdown(null)
                                  }}
                                >
                                  <motion.div
                                    className="mr-3 text-blue-400"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    {child.icon}
                                  </motion.div>
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors",
                          isActive(item.href)
                            ? "text-blue-400 bg-white/5"
                            : "text-gray-300 hover:text-blue-400 hover:bg-white/5",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          className="mr-3 text-blue-400"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {item.icon}
                        </motion.div>
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-4 py-3 rounded-md font-medium transition-all duration-300 shadow-lg"
                >
                  Get Started
                </motion.button>
                <div className="mt-4 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Search"
                    className="p-2 rounded-full text-gray-300 hover:text-blue-400 hover:bg-white/5 transition-colors"
                  >
                    <Search className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
