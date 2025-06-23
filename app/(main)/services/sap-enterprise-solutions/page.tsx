"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ChevronRight,
  Database,
  LineChart,
  Layers,
  Zap,
  Server,
  Users,
  Shield,
  Cpu,
  BarChart3,
  Workflow,
  Bot,
  MessageSquare,
  Download,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import WaterDropButton from "@/components/ui/water-drop-button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart as RechartsLineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

// Sample data for charts
const leadConversionData = [
  { month: "Jan", traditional: 20, ai: 35 },
  { month: "Feb", traditional: 22, ai: 38 },
  { month: "Mar", traditional: 18, ai: 42 },
  { month: "Apr", traditional: 25, ai: 45 },
  { month: "May", traditional: 23, ai: 48 },
  { month: "Jun", traditional: 28, ai: 52 },
  { month: "Jul", traditional: 26, ai: 58 },
  { month: "Aug", traditional: 30, ai: 62 },
  { month: "Sep", traditional: 32, ai: 68 },
  { month: "Oct", traditional: 35, ai: 72 },
  { month: "Nov", traditional: 38, ai: 78 },
  { month: "Dec", traditional: 40, ai: 85 },
]

// Workflow steps for the interactive engine
const workflowSteps = [
  {
    id: "data-collection",
    title: "Data Collection & Integration",
    icon: <Database className="h-6 w-6" />,
    description: "Seamlessly gather and integrate data from multiple SAP and non-SAP sources",
    color: "from-blue-400 to-blue-600",
    details: [
      "Real-time data synchronization with SAP ERP, CRM, and S/4HANA",
      "Automated data cleansing and normalization",
      "Cross-system data mapping and integration",
      "Legacy system compatibility",
    ],
  },
  {
    id: "ai-processing",
    title: "AI Processing & Analysis",
    icon: <Cpu className="h-6 w-6" />,
    description: "Apply advanced AI models to analyze and extract actionable insights",
    color: "from-purple-400 to-purple-600",
    details: [
      "Machine learning lead scoring algorithms",
      "Natural language processing for intent detection",
      "Predictive analytics for conversion likelihood",
      "Behavioral pattern recognition",
    ],
  },
  {
    id: "lead-enrichment",
    title: "Lead Enrichment",
    icon: <Layers className="h-6 w-6" />,
    description: "Enhance lead profiles with comprehensive data for better targeting",
    color: "from-green-400 to-green-600",
    details: [
      "Firmographic data augmentation",
      "Contact information verification",
      "Digital footprint analysis",
      "Buying intent signals detection",
    ],
  },
  {
    id: "personalization",
    title: "Dynamic Personalization",
    icon: <Users className="h-6 w-6" />,
    description: "Tailor interactions based on individual lead characteristics and behavior",
    color: "from-yellow-400 to-yellow-600",
    details: [
      "Personalized content recommendations",
      "Custom engagement sequences",
      "Adaptive messaging frameworks",
      "Multi-channel communication optimization",
    ],
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    icon: <Zap className="h-6 w-6" />,
    description: "Streamline lead nurturing with automated workflows and triggers",
    color: "from-red-400 to-red-600",
    details: [
      "Automated follow-up sequences",
      "Trigger-based engagement rules",
      "Sales team notifications and alerts",
      "Performance tracking and optimization",
    ],
  },
]

// SAP integration points
const sapIntegrations = [
  {
    title: "SAP S/4HANA",
    description: "Seamless integration with core ERP functions for real-time data access",
    icon: <Server className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "SAP Customer Experience",
    description: "Connect with SAP CX suite for comprehensive customer journey insights",
    icon: <Users className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "SAP BTP",
    description: "Leverage Business Technology Platform for scalable cloud extensions",
    icon: <Layers className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "SAP Analytics Cloud",
    description: "Integrate with SAP Analytics for advanced reporting and visualization",
    icon: <BarChart3 className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "SAP Workflow Management",
    description: "Orchestrate complex business processes with intelligent workflows",
    icon: <Workflow className="h-10 w-10 text-blue-500" />,
  },
  {
    title: "SAP Conversational AI",
    description: "Implement chatbots and virtual assistants for lead engagement",
    icon: <Bot className="h-10 w-10 text-blue-500" />,
  },
]

// Client testimonials
const testimonials = [
  {
    quote:
      "The AI-powered SAP integration transformed our lead generation process, increasing qualified leads by 47% while reducing manual effort by 60%.",
    author: "Sarah Johnson",
    title: "CIO, Global Manufacturing Corp",
    image: "/images/testimonials/testimonial-1.jpg",
  },
  {
    quote:
      "ESG's solution seamlessly connected our SAP ecosystem with our marketing stack, giving us unprecedented visibility into the customer journey.",
    author: "Michael Chen",
    title: "VP of Digital Transformation, TechSolutions Inc",
    image: "/images/testimonials/testimonial-2.jpg",
  },
  {
    quote:
      "The intelligent workflow engine automated our entire lead qualification process, allowing our sales team to focus exclusively on high-value opportunities.",
    author: "Priya Patel",
    title: "Head of Sales Operations, Enterprise Systems Ltd",
    image: "/images/testimonials/testimonial-3.jpg",
  },
]

// Client logos
const clientLogos = [
  { name: "Acme Corporation", logo: "/images/clients/client-1.svg" },
  { name: "Globex Industries", logo: "/images/clients/client-2.svg" },
  { name: "Initech", logo: "/images/clients/client-3.svg" },
  { name: "Massive Dynamic", logo: "/images/clients/client-4.svg" },
  { name: "Stark Industries", logo: "/images/clients/client-5.svg" },
  { name: "Wayne Enterprises", logo: "/images/clients/client-6.svg" },
]

export default function SapEnterpriseSolutionsPage() {
  const [activeStep, setActiveStep] = useState<string>("data-collection")
  const [isVisible, setIsVisible] = useState(false)
  const [leadQuality, setLeadQuality] = useState([50])
  const [conversionRate, setConversionRate] = useState([30])
  const [salesCycle, setSalesCycle] = useState([70])

  const sectionRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  // Handle intersection observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          controls.start("visible")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [controls])

  // Auto-advance through workflow steps
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      const currentIndex = workflowSteps.findIndex((step) => step.id === activeStep)
      const nextIndex = (currentIndex + 1) % workflowSteps.length
      setActiveStep(workflowSteps[nextIndex].id)
    }, 5000)

    return () => clearInterval(interval)
  }, [activeStep, isVisible])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 blur-3xl animate-pulse"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-4">
              <Badge variant="outline" className="px-3 py-1 text-sm border-blue-500 text-blue-400">
                SAP Enterprise Solutions
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Lead Generation for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                SAP Ecosystems
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your SAP environment into an intelligent lead generation engine with our AI-driven solutions
              that seamlessly integrate with your existing SAP landscape.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <WaterDropButton className="bg-blue-600 hover:bg-blue-700 min-w-[200px]">
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </WaterDropButton>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950 min-w-[200px]">
                Download Whitepaper <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Workflow Engine Section */}
      <section ref={sectionRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Intelligent Lead Generation{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                  Workflow Engine
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI-powered workflow engine seamlessly integrates with your SAP ecosystem to transform raw data into
                qualified leads
              </p>
            </motion.div>
          </div>

          {/* Workflow Engine Visualization */}
          <div className="mb-20">
            <div className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800 shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-center">Lead Generation Workflow</h3>

              {/* Workflow Steps */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={`relative cursor-pointer ${index < workflowSteps.length - 1 ? "workflow-step" : ""}`}
                    onClick={() => setActiveStep(step.id)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`p-4 rounded-lg ${
                        activeStep === step.id
                          ? `bg-gradient-to-r ${step.color} text-white`
                          : "bg-gray-800/50 hover:bg-gray-800"
                      } transition-all duration-300`}
                    >
                      <div className="flex items-center mb-2">
                        <div className={`mr-3 ${activeStep === step.id ? "text-white" : "text-blue-400"}`}>
                          {step.icon}
                        </div>
                        <h4 className="font-bold">{step.title}</h4>
                      </div>
                      <p className="text-sm">{step.description}</p>
                    </div>

                    {/* Connector line for desktop */}
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-0.5 bg-blue-500 z-10"></div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Active Step Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                >
                  {workflowSteps.map(
                    (step) =>
                      step.id === activeStep && (
                        <div key={step.id}>
                          <h4 className="text-xl font-bold mb-4 flex items-center">
                            <div className={`mr-3 bg-gradient-to-r ${step.color} p-2 rounded-full`}>{step.icon}</div>
                            {step.title}
                          </h4>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <p className="text-gray-300 mb-4">{step.description}</p>
                              <ul className="space-y-2">
                                {step.details.map((detail, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start"
                                  >
                                    <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>{detail}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            <div className="relative h-48 md:h-full min-h-[200px] rounded-lg overflow-hidden">
                              <Image
                                src={`/images/workflow/${step.id}.jpg`}
                                alt={step.title}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            </div>
                          </div>
                        </div>
                      ),
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Performance Metrics Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                Performance Impact
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how our AI-powered lead generation transforms key metrics in your SAP environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Interactive Sliders */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Simulate Your Results</h3>
              <p className="text-gray-400 mb-8">
                Adjust the sliders to see potential improvements based on your current metrics
              </p>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-300">Lead Quality Score</label>
                    <span className="text-blue-400 font-bold">{leadQuality}%</span>
                  </div>
                  <Slider
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    value={leadQuality}
                    onValueChange={setLeadQuality}
                    className="mb-6"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Current</span>
                    <span>With AI: +{Math.round(leadQuality[0] * 0.7)}%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-300">Conversion Rate</label>
                    <span className="text-blue-400 font-bold">{conversionRate}%</span>
                  </div>
                  <Slider
                    defaultValue={[30]}
                    max={100}
                    step={1}
                    value={conversionRate}
                    onValueChange={setConversionRate}
                    className="mb-6"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Current</span>
                    <span>With AI: +{Math.round(conversionRate[0] * 0.85)}%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-300">Sales Cycle Length</label>
                    <span className="text-blue-400 font-bold">{salesCycle} days</span>
                  </div>
                  <Slider
                    defaultValue={[70]}
                    max={120}
                    min={30}
                    step={1}
                    value={salesCycle}
                    onValueChange={setSalesCycle}
                    className="mb-6"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Current</span>
                    <span>With AI: -{Math.round(salesCycle[0] * 0.3)} days</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Custom ROI Analysis</Button>
                </div>
              </div>
            </motion.div>

            {/* Performance Chart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Lead Conversion Comparison</h3>
              <p className="text-gray-400 mb-8">AI-powered lead generation vs. traditional methods over 12 months</p>

              <div className="h-[350px]">
                <ChartContainer
                  config={{
                    traditional: {
                      label: "Traditional Methods",
                      color: "hsl(var(--chart-1))",
                    },
                    ai: {
                      label: "AI-Powered",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={leadConversionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="traditional"
                        stroke="var(--color-traditional)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="ai"
                        stroke="var(--color-ai)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-900/30">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500/20 p-2 rounded-full mr-3">
                    <LineChart className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Key Insight</h4>
                    <p className="text-sm text-gray-300">
                      Companies using our AI-powered lead generation see an average 112% increase in qualified leads
                      within the first 6 months.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SAP Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                SAP Integration
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our solution connects with your existing SAP landscape without disrupting your operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sapIntegrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-blue-900/50 transition-all duration-300 group"
              >
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/20 group-hover:bg-blue-900/30 transition-colors duration-300">
                  {integration.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {integration.title}
                </h3>
                <p className="text-gray-400">{integration.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Technical Integration Details</h3>
                <p className="text-gray-300 mb-6">
                  Our solution integrates with your SAP environment through standard APIs and connectors, ensuring
                  secure and reliable data exchange without compromising system performance.
                </p>

                <Tabs defaultValue="architecture" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="architecture">Architecture</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="deployment">Deployment</TabsTrigger>
                  </TabsList>
                  <TabsContent value="architecture" className="p-4 bg-gray-800/50 rounded-md mt-2">
                    <h4 className="font-bold mb-2">Microservices Architecture</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>RESTful API integration with SAP OData services</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Event-driven architecture with SAP Event Mesh</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Containerized deployment on SAP BTP or on-premises</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="security" className="p-4 bg-gray-800/50 rounded-md mt-2">
                    <h4 className="font-bold mb-2">Enterprise-Grade Security</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>End-to-end encryption for all data transfers</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>OAuth 2.0 and SAML authentication integration</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Compliance with SAP security standards and protocols</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="deployment" className="p-4 bg-gray-800/50 rounded-md mt-2">
                    <h4 className="font-bold mb-2">Flexible Deployment Options</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Cloud deployment on SAP BTP or major cloud providers</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>On-premises installation with existing SAP infrastructure</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Hybrid deployment models for enterprise flexibility</span>
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>

                <div className="mt-6">
                  <Link
                    href="/technical-specifications"
                    className="text-blue-400 hover:text-blue-300 flex items-center"
                  >
                    View detailed technical documentation <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/sap-integration-diagram.jpg"
                  alt="SAP Integration Architecture"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-gray-900/80 backdrop-blur-sm rounded-lg">
                  <h4 className="font-bold mb-2">SAP Integration Architecture</h4>
                  <p className="text-sm text-gray-300">
                    Secure, scalable architecture designed for enterprise SAP environments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                AI Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to transform your lead generation process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-span-1 lg:col-span-3 bg-gray-900/50 backdrop-blur-md rounded-xl p-8 border border-gray-800 shadow-lg mb-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-4">Predictive Lead Scoring</h3>
                  <p className="text-gray-300 mb-6">
                    Our advanced machine learning algorithms analyze hundreds of data points from your SAP systems to
                    predict which leads are most likely to convert, allowing your sales team to focus on high-value
                    opportunities.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <Cpu className="h-5 w-5 text-blue-400 mr-2" />
                        Machine Learning Models
                      </h4>
                      <p className="text-sm text-gray-400">
                        Ensemble models combining gradient boosting, neural networks, and random forests for optimal
                        prediction accuracy.
                      </p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center">
                        <Database className="h-5 w-5 text-blue-400 mr-2" />
                        Data Sources
                      </h4>
                      <p className="text-sm text-gray-400">
                        Integrates data from SAP CRM, ERP, marketing automation, web analytics, and third-party
                        enrichment services.
                      </p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-gray-700">
                      <AccordionTrigger className="text-white hover:text-blue-400">
                        Technical Specifications
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>XGBoost and TensorFlow-based prediction models</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Real-time scoring with sub-100ms latency</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Automated model retraining based on conversion feedback</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/ai-predictive-scoring.jpg"
                    alt="Predictive Lead Scoring"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-800 shadow-lg"
            >
              <div className="h-12 w-12 rounded-full bg-blue-900/20 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Natural Language Processing</h3>
              <p className="text-gray-400 mb-4">
                Extract intent, sentiment, and key information from customer interactions across all channels.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Intent classification</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Entity extraction</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Sentiment analysis</span>
                </li>
              </ul>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-950/50"
                    >
                      Learn More
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 border-gray-700">
                    <p>Powered by transformer-based language models</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-800 shadow-lg"
            >
              <div className="h-12 w-12 rounded-full bg-blue-900/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Behavioral Analytics</h3>
              <p className="text-gray-400 mb-4">
                Track and analyze customer interactions to identify patterns and predict future behavior.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Engagement scoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Buying signal detection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Journey mapping</span>
                </li>
              </ul>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-950/50"
                    >
                      Learn More
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 border-gray-700">
                    <p>Real-time behavioral pattern recognition</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-800 shadow-lg"
            >
              <div className="h-12 w-12 rounded-full bg-blue-900/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Intelligent Automation</h3>
              <p className="text-gray-400 mb-4">
                Automate lead nurturing workflows with AI-driven decision making and personalization.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Dynamic segmentation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Personalized content delivery</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Optimal timing algorithms</span>
                </li>
              </ul>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-950/50"
                    >
                      Learn More
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 border-gray-700">
                    <p>Self-optimizing engagement sequences</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how leading organizations have transformed their lead generation with our SAP solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-800 shadow-lg"
              >
                <div className="mb-6">
                  <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-center">Trusted by Industry Leaders</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {clientLogos.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 backdrop-blur-md rounded-xl p-8 md:p-12 border border-blue-900/30 shadow-lg relative overflow-hidden"
            >
              {/* Background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                  Ready to Transform Your{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                    Lead Generation?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 text-center">
                  Schedule a personalized demo to see how our AI-powered SAP solutions can drive results for your
                  business
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <WaterDropButton className="bg-blue-600 hover:bg-blue-700 min-w-[200px]">
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </WaterDropButton>
                  <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950 min-w-[200px]">
                    Contact Sales
                  </Button>
                </div>

                <div className="text-center text-gray-400 text-sm">
                  <p>No commitment required. See the power of AI-driven lead generation in action.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          <button className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
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
                className="text-blue-600 dark:text-blue-400"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
            </div>
          </button>
          <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full px-4 py-2 text-sm font-medium shadow-lg">
            Chat with us 👋
          </div>
        </div>
      </div>
    </div>
  )
}
