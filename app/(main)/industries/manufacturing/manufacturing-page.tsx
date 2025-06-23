"use client"

import ManufacturingHero from "@/components/industries/manufacturing/hero"
import ManufacturingAIServices from "@/components/industries/manufacturing/ai-services"
import ManufacturingCaseStudies from "@/components/industries/manufacturing/case-studies"
import InteractiveFeatures from "@/components/industries/manufacturing/interactive-features"
import TechnologyStack from "@/components/industries/manufacturing/technology-stack"
import ClientSuccessStories from "@/components/industries/manufacturing/client-success-stories"
import AILeadForm from "@/components/industries/manufacturing/ai-lead-form"

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <ManufacturingHero />
      <ManufacturingAIServices />
      <ManufacturingCaseStudies />
      <InteractiveFeatures />
      <TechnologyStack />
      <ClientSuccessStories />
      <AILeadForm />
    </main>
  )
}
