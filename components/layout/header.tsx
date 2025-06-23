"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import AnimatedSapAiLogo from "@/components/ui/animated-sap-ai-logo"

interface NavItem {
  name: string
  href: string
  children?: { name: string; href: string; description?: string }[]
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

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

  const navItems: NavItem[] = [
    {
      name: "Who We Are",
      href: "/who-we-are",
      children: [
        { name: "About ESG", href: "/about", description: "Learn about our company history and values" },
        { name: "Leadership", href: "/leadership", description: "Meet our executive team" },
        { name: "Partners", href: "/partners", description: "Our strategic technology partners" },
      ],
    },
    {
      name: "Services",
      href: "/services",
      children: [
        {
          name: "SAP Enterprise Solutions",
          href: "/services/sap-enterprise-solutions",
          description: "End-to-end SAP implementation and optimization",
        },
        {
          name: "SAP Data & AI Analytics",
          href: "/services/sap-data-ai-analytics",
          description: "Transform data into actionable insights",
        },
        {
          name: "SAP Supply Chain & Procurement",
          href: "/services/sap-supply-chain-procurement",
          description: "Optimize your supply chain and procurement processes",
        },
        {
          name: "SAP Technology & Innovation",
          href: "/services/sap-technology-innovation",
          description: "Leverage cutting-edge SAP technologies",
        },
        {
          name: "SAP RevBRIM",
          href: "/services/sap-revbrim",
          description: "Revenue and billing management solutions",
        },
        {
          name: "Digital & AI Solutions",
          href: "/services/digital-ai-solutions",
          description: "Innovative digital and AI-powered solutions",
        },
        {
          name: "Cloud Solutions",
          href: "/services/cloud-solutions",
          description: "Secure and scalable cloud infrastructure",
        },
        {
          name: "Cybersecurity Services",
          href: "/services/cybersecurity-services",
          description: "Protect your business with advanced security",
        },
        {
          name: "Staffing Solutions",
          href: "/services/staffing-solutions",
          description: "Expert talent acquisition and management",
        },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      children: [
        { name: "Manufacturing", href: "/industries/manufacturing" },
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Financial Services", href: "/industries/financial-services" },
        { name: "Retail", href: "/industries/retail" },
      ],
    },
    {
      name: "Resources",
      href: "/resources",
      children: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Whitepapers", href: "/whitepapers" },
      ],
    },
    {
      name: "Careers",
      href: "/careers",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo (already links home inside component) */}
          <AnimatedSapAiLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors",
                      activeDropdown === item.name
                        ? "text-primary"
                        : "text-foreground/80 hover:text-foreground hover:bg-white/5",
                    )}
                    aria-expanded={activeDropdown === item.name}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200",
                        activeDropdown === item.name ? "rotate-180" : "",
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown for desktop */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-card border border-border overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-3 text-sm hover:bg-primary/10 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="font-medium">{child.name}</div>
                              {child.description && (
                                <p className="mt-1 text-xs text-foreground/70">{child.description}</p>
                              )}
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
            <button
              aria-label="Search"
              className="p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.name} className="py-2">
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors"
                        >
                          {item.name}
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform duration-200",
                              activeDropdown === item.name ? "rotate-180" : "",
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-2 pl-4 border-l border-border"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="block px-3 py-2 rounded-md text-sm text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
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
                        className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-border">
                <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                <div className="mt-4 flex items-center justify-center">
                  <button
                    aria-label="Search"
                    className="p-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
