"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Database, LineChart, BrainCircuit, Zap, PieChart, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SAPDataAIAnalyticsClientPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/data-patterns.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">SAP Data & AI Analytics</h1>
                <p className="text-xl text-blue-100 mb-8 max-w-xl">
                  Transform raw data into actionable intelligence with our integrated SAP data and AI analytics
                  solutions. Unlock hidden insights, automate decisions, and drive innovation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0"
                  >
                    <Link href="#contact-section">
                      Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                  >
                    <Link href="#capabilities">Explore Capabilities</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/data-analytics-dashboard.jpg"
                alt="SAP Data Analytics Dashboard"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <MetricCard
              title="Data Processing"
              value="10TB+"
              description="Daily data processing capacity"
              icon={<Database className="h-8 w-8 text-blue-600" />}
            />
            <MetricCard
              title="Accuracy"
              value="99.8%"
              description="Prediction accuracy rate"
              icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
            />
            <MetricCard
              title="Insights"
              value="3.5x"
              description="Faster insights delivery"
              icon={<Zap className="h-8 w-8 text-blue-600" />}
            />
            <MetricCard
              title="ROI"
              value="287%"
              description="Average client ROI"
              icon={<PieChart className="h-8 w-8 text-blue-600" />}
            />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SAP Data & AI Analytics Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leverage the full potential of your SAP data with our comprehensive suite of analytics and AI solutions
            </p>
          </div>

          <Tabs defaultValue="data-integration" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full mb-8">
              <TabsTrigger value="data-integration">Data Integration</TabsTrigger>
              <TabsTrigger value="advanced-analytics">Advanced Analytics</TabsTrigger>
              <TabsTrigger value="ai-ml">AI & Machine Learning</TabsTrigger>
              <TabsTrigger value="visualization">Data Visualization</TabsTrigger>
            </TabsList>

            <TabsContent value="data-integration" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Seamless SAP Data Integration</h3>
                  <p className="text-slate-600 mb-6">
                    Connect and unify data across your entire SAP ecosystem and beyond. Our integration solutions create
                    a single source of truth for all your business data.
                  </p>
                  <ul className="space-y-3">
                    <FeatureItem>Real-time data synchronization across SAP modules</FeatureItem>
                    <FeatureItem>ETL processes optimized for SAP HANA</FeatureItem>
                    <FeatureItem>Integration with non-SAP data sources</FeatureItem>
                    <FeatureItem>Data quality management and governance</FeatureItem>
                    <FeatureItem>Automated data pipelines with monitoring</FeatureItem>
                  </ul>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/data-integration.jpg" alt="SAP Data Integration" fill className="object-cover" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced-analytics" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/advanced-analytics.jpg" alt="Advanced Analytics" fill className="object-cover" />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4">Advanced Analytics Solutions</h3>
                  <p className="text-slate-600 mb-6">
                    Transform your SAP data into actionable insights with our advanced analytics capabilities, from
                    descriptive to prescriptive analytics.
                  </p>
                  <ul className="space-y-3">
                    <FeatureItem>Predictive analytics for demand forecasting</FeatureItem>
                    <FeatureItem>Anomaly detection for process optimization</FeatureItem>
                    <FeatureItem>Scenario modeling and simulation</FeatureItem>
                    <FeatureItem>Real-time operational analytics</FeatureItem>
                    <FeatureItem>Custom KPI tracking and performance dashboards</FeatureItem>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ai-ml" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">AI & Machine Learning</h3>
                  <p className="text-slate-600 mb-6">
                    Enhance your SAP systems with intelligent capabilities using our AI and machine learning solutions
                    tailored for enterprise data.
                  </p>
                  <ul className="space-y-3">
                    <FeatureItem>Intelligent document processing with NLP</FeatureItem>
                    <FeatureItem>Automated decision-making workflows</FeatureItem>
                    <FeatureItem>Predictive maintenance for SAP systems</FeatureItem>
                    <FeatureItem>Customer behavior analysis and segmentation</FeatureItem>
                    <FeatureItem>AI-powered process automation</FeatureItem>
                  </ul>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/ai-ml-solutions.jpg"
                    alt="AI & Machine Learning Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="visualization" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image src="/images/data-visualization.jpg" alt="Data Visualization" fill className="object-cover" />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4">Interactive Data Visualization</h3>
                  <p className="text-slate-600 mb-6">
                    Transform complex SAP data into intuitive visual insights with our interactive dashboards and
                    reporting solutions.
                  </p>
                  <ul className="space-y-3">
                    <FeatureItem>Custom executive dashboards</FeatureItem>
                    <FeatureItem>Self-service BI for business users</FeatureItem>
                    <FeatureItem>Interactive data exploration tools</FeatureItem>
                    <FeatureItem>Mobile-optimized reporting</FeatureItem>
                    <FeatureItem>Embedded analytics within SAP applications</FeatureItem>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Interactive Data Insights Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Data Insights</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore how our SAP Data & AI Analytics solutions transform raw data into actionable intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-blue-600" />
                Predictive Analytics Dashboard
              </h3>
              <div className="aspect-video relative bg-slate-100 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/images/predictive-dashboard.jpg"
                  alt="Predictive Analytics Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-slate-600 mb-4">
                Our predictive analytics dashboard combines historical SAP data with machine learning algorithms to
                forecast business outcomes with up to 95% accuracy.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-slate-500">Forecast Accuracy</p>
                  <p className="text-2xl font-bold text-blue-700">95.3%</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-slate-500">Decision Time</p>
                  <p className="text-2xl font-bold text-blue-700">-68%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BrainCircuit className="mr-2 h-5 w-5 text-blue-600" />
                AI-Powered Anomaly Detection
              </h3>
              <div className="aspect-video relative bg-slate-100 rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/images/anomaly-detection.jpg"
                  alt="AI-Powered Anomaly Detection"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-slate-600 mb-4">
                Our AI algorithms continuously monitor your SAP data streams to detect anomalies and prevent issues
                before they impact your business.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-slate-500">Early Detection</p>
                  <p className="text-2xl font-bold text-blue-700">+87%</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-slate-500">False Positives</p>
                  <p className="text-2xl font-bold text-blue-700">-92%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Architecture</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our SAP Data & AI Analytics solutions are built on a robust, scalable architecture designed for enterprise
              performance
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-xl mb-12">
            <Image
              src="/images/sap-data-architecture.jpg"
              alt="SAP Data & AI Architecture"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ArchitectureCard
              title="Data Layer"
              icon={<Database className="h-6 w-6 text-blue-600" />}
              features={[
                "SAP HANA integration",
                "Data lake architecture",
                "Real-time data streaming",
                "Automated ETL processes",
                "Data quality management",
              ]}
            />
            <ArchitectureCard
              title="Analytics Layer"
              icon={<LineChart className="h-6 w-6 text-blue-600" />}
              features={[
                "Advanced analytics engines",
                "Statistical modeling",
                "Predictive algorithms",
                "Real-time processing",
                "Distributed computing",
              ]}
            />
            <ArchitectureCard
              title="AI Layer"
              icon={<BrainCircuit className="h-6 w-6 text-blue-600" />}
              features={[
                "Machine learning models",
                "Natural language processing",
                "Computer vision capabilities",
                "Automated model training",
                "Model deployment framework",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              See how our clients have transformed their businesses with our SAP Data & AI Analytics solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Global Manufacturing Leader"
              image="/images/case-study-manufacturing.jpg"
              challenge="Needed to optimize supply chain operations with predictive insights"
              solution="Implemented SAP data integration with AI-powered demand forecasting"
              results={[
                "Reduced inventory costs by 23%",
                "Improved forecast accuracy by 35%",
                "Decreased stockouts by 47%",
              ]}
            />
            <CaseStudyCard
              title="Retail Enterprise"
              image="/images/case-study-retail.jpg"
              challenge="Wanted to personalize customer experiences using SAP data"
              solution="Deployed AI-driven customer analytics with real-time personalization"
              results={[
                "Increased conversion rate by 18%",
                "Boosted customer retention by 27%",
                "Grew average order value by 15%",
              ]}
            />
            <CaseStudyCard
              title="Financial Services Firm"
              image="/images/case-study-finance.jpg"
              challenge="Needed to detect fraud patterns in transaction data"
              solution="Implemented advanced anomaly detection with machine learning"
              results={["Reduced fraud losses by 62%", "Decreased false positives by 83%", "Saved $4.2M annually"]}
            />
          </div>
        </div>
      </section>

      {/* Integration Partners Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Technology Partners</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We work with leading technology providers to deliver comprehensive SAP data and AI solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={`/images/partners/partner-${i}.svg`}
                  alt={`Technology Partner ${i}`}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Data Strategy?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our experts show you how our SAP Data & AI Analytics solutions can drive innovation and growth for
              your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper Components
function MetricCard({ title, value, description, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-slate-700">{title}</h3>
      <p className="text-3xl font-bold text-blue-700 my-2">{value}</p>
      <p className="text-sm text-slate-500">{description}</p>
    </motion.div>
  )
}

function FeatureItem({ children }) {
  return (
    <li className="flex items-start">
      <div className="mr-3 mt-1">
        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L4.5 8.5L2 6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <span className="text-slate-600">{children}</span>
    </li>
  )
}

function ArchitectureCard({ title, icon, features }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          {icon}
          <CardTitle className="ml-2">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1 text-blue-600">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM10.5 7.875H7.875V10.5H6.125V7.875H3.5V6.125H6.125V3.5H7.875V6.125H10.5V7.875Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function CaseStudyCard({ title, image, challenge, solution, results }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-slate-700">Challenge:</h4>
          <p className="text-sm text-slate-600">{challenge}</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700">Solution:</h4>
          <p className="text-sm text-slate-600">{solution}</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-700">Results:</h4>
          <ul className="text-sm text-slate-600 space-y-1 mt-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <div className="text-green-600 mr-2">✓</div>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Read Full Case Study
        </Button>
      </CardFooter>
    </Card>
  )
}
