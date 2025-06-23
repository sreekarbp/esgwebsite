"use client"

import { motion } from "framer-motion"
import WaterDropButton from "@/components/ui/water-drop-button"
import { ArrowRight } from "lucide-react"

export default function ProvenResults() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <div className="text-blue-300 mr-3">📊</div>
          <h3 className="text-blue-300 font-medium">Proven SAP Results</h3>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-16">Builds trust by emphasizing proven success</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Transforming Businesses with SAP Excellence</h3>
            <p className="text-blue-100 mb-4">
              At ESG, we deliver measurable results that drive business growth, operational efficiency, and innovation.
              Our proven track record speaks for itself.
            </p>
            <p className="text-blue-100">
              Whether you're modernizing your SAP ecosystem, migrating to S/4HANA, or optimizing existing processes, we
              bring decades of expertise and a client-first approach to every project.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Driving Efficiency and Innovation</h3>
            <p className="text-blue-100 mb-4">
              Our SAP solutions are designed to minimize overhead, modernize workloads, and accelerate change. With a
              focus on scalability and future-readiness, we help businesses stay ahead of the curve.
            </p>
            <p className="text-blue-100">
              From reducing operational costs to enabling faster decision-making, our results speak for themselves.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white rounded-lg p-8 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-6xl font-bold text-blue-500 mb-2"
            >
              95%
            </motion.div>
            <p className="text-blue-500">Client Satisfaction Rate</p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-6xl font-bold text-blue-500 mb-2"
            >
              $40%
            </motion.div>
            <p className="text-blue-500">Reduction in Operational Costs</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Transform Your Business with Cutting-Edge Solutions
          </h2>
          <p className="text-blue-100 mb-8">
            Our services drive innovation and efficiency for businesses of all sizes.
          </p>
          <WaterDropButton className="bg-purple-600 hover:bg-purple-700">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </WaterDropButton>
        </div>
      </div>
    </section>
  )
}
