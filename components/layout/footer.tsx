import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "SAP Enterprise Solutions", href: "/services/sap-enterprise-solutions" },
        { name: "Data & AI Analytics", href: "/services/sap-data-ai-analytics" },
        { name: "Digital Solutions", href: "/services/digital-solutions" },
        { name: "Cloud Solutions", href: "/services/cloud-solutions" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "News", href: "/news" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Whitepapers", href: "/whitepapers" },
        { name: "Webinars", href: "/webinars" },
      ],
    },
  ]

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with ESG Insights</h3>
            <p className="text-foreground/70 mb-6">
              Subscribe to our newsletter for the latest industry trends, tech insights, and company updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background border-border"
                aria-label="Email address"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <div className="flex items-center">
                  <Image src="/esg-colored-logo.png" alt="ESG Logo" width={48} height={48} className="mr-3" />
                  <span className="font-poppins text-2xl font-bold gradient-text">ESG Inc</span>
                </div>
              </Link>
              <p className="text-foreground/70 mb-6 max-w-md">
                Transforming enterprises with cutting-edge AI, SAP solutions, and digital innovation for a smarter, more
                efficient future.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-foreground/70 hover:text-foreground transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((column, index) => (
              <div key={index}>
                <h4 className="font-bold text-lg mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm mb-4 md:mb-0">&copy; {currentYear} ESG Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="text-foreground/50 hover:text-foreground/80 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-foreground/50 hover:text-foreground/80 text-sm">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-foreground/50 hover:text-foreground/80 text-sm">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-foreground/50 hover:text-foreground/80 text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
