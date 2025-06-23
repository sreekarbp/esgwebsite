"use client"

import WaveBackground from "@/components/backgrounds/wave-background"
import SapTransformation from "@/components/landing/sap-transformation"
import ServiceCards from "@/components/landing/service-cards"
import SapExcellence from "@/components/landing/sap-excellence"
import CaseStudies from "@/components/landing/case-studies"
import ProvenResults from "@/components/landing/proven-results"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Wave Background */}
      <WaveBackground />

      {/* Page Content */}
      <div className="pt-20">
        <SapTransformation />
        <ServiceCards />
        <SapExcellence />
        <CaseStudies />
        <ProvenResults />
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          <button className="bg-white rounded-full p-4 shadow-lg">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
            </div>
          </button>
          <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-white text-black rounded-full px-4 py-2 text-sm font-medium shadow-lg">
            Chat with us 👋
          </div>
        </div>
      </div>
    </div>
  )
}
