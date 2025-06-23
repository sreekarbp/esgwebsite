import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Font definitions with fallbacks for web-safe fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ESG Inc - Advanced AI & Enterprise Solutions",
  description: "Leading provider of SAP Enterprise Solutions, AI Analytics, and Digital Transformation services",
  keywords: "SAP, Enterprise Solutions, AI Analytics, Digital Transformation, Cloud Solutions, Cybersecurity",
  authors: [{ name: "ESG Inc" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://esginc.com",
    title: "ESG Inc - Advanced AI & Enterprise Solutions",
    description: "Leading provider of SAP Enterprise Solutions, AI Analytics, and Digital Transformation services",
    siteName: "ESG Inc",
    images: [{ url: "/images/logos/dark-theme/logo-512x512.png", width: 512, height: 512, alt: "ESG Inc Logo" }],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon-dark-32x32.png" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-dark-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-dark-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-dark-48x48.png" />
        {/* Preload critical assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
