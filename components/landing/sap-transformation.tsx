import Image from "next/image"
import { ArrowRight } from "lucide-react"
import WaterDropButton from "@/components/ui/water-drop-button"

export default function SapTransformation() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center mb-4 bg-blue-500/10 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-blue-400 mr-2">⚡</span>
              <span className="text-sm font-medium">Executive Software Guild (ESG)</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Driving End-to-End SAP Transformation</h1>

            <p className="text-gray-300 text-lg mb-8">
              ESG is a robust and dynamic company offering a wide range of SAP services and IT solutions. We leverage
              cutting-edge technology to build future-ready solutions, focusing on Cloud, AI, and Enterprise IT
              services. Our expertise in SAP ensures seamless business transformation, helping enterprises thrive in the
              digital era.
            </p>

            <WaterDropButton className="bg-purple-600 hover:bg-purple-700">
              About ESG <ArrowRight className="ml-2 h-4 w-4" />
            </WaterDropButton>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image src="/images/city-digital-network.jpg" alt="Digital Transformation" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-overlay"></div>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              Our vision is to empower businesses with innovative technology solutions that drive growth, efficiency,
              and long-term success in a rapidly evolving digital landscape.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To empower businesses with innovative technology solutions that drive growth and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
