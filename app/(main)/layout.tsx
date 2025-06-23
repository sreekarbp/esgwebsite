import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import EnhancedNavbar from "@/components/navigation/enhanced-navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ESG Inc - SAP & AI Solutions",
  description: "Enterprise solutions powered by SAP and AI technologies",
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <EnhancedNavbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
