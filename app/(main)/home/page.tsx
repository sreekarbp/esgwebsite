import type { Metadata, Viewport } from "next"
import AiEnhancedHero from "@/components/home/ai-enhanced-hero"
import SapProjectsShowcase from "@/components/home/sap-projects-showcase"
import AiWorkflowAnimation from "@/components/home/ai-workflow-animation"
import TechnicalCapabilities from "@/components/home/technical-capabilities"
import IndustrySolutions from "@/components/home/industry-solutions"
import ClientSuccessStories from "@/components/home/client-success-stories"
import TechInnovationWall from "@/components/home/tech-innovation-wall"
import AiAssistantDemo from "@/components/home/ai-assistant-demo"
import SapAiIntegrationSection from "@/components/home/sap-ai-integration-section"

export const metadata: Metadata = {
  title: "ESG - Advanced SAP & AI Solutions | Home",
  description: "Enterprise transformation powered by cutting-edge SAP implementations and AI innovation",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <AiEnhancedHero />
      <SapProjectsShowcase />
      <AiWorkflowAnimation />
      <TechnicalCapabilities />
      <SapAiIntegrationSection />
      <IndustrySolutions />
      <TechInnovationWall />
      <ClientSuccessStories />
      <AiAssistantDemo />
    </main>
  )
}
