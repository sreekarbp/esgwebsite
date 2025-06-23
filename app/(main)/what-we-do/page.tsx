import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Database,
  BarChart,
  Truck,
  Lightbulb,
  LineChart,
  Brain,
  Cloud,
  Shield,
  Users,
  Check,
  Zap,
  Code,
  Server,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ContentCard } from "@/components/ui/content-card"
import { Hero } from "@/components/ui/hero"

export const metadata: Metadata = {
  title: "What We Do | ESG",
  description: "Explore our comprehensive range of SAP and technology services designed to transform your business.",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        title={
          <h1>
            Transforming Businesses with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              SAP Excellence
            </span>
          </h1>
        }
        description="Our comprehensive suite of SAP and technology services is designed to help you navigate digital transformation, optimize operations, and drive innovation."
        image="/abstract-digital-background.png"
        height="medium"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button size="lg" asChild>
            <Link href="#services">
              Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </Hero>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              We offer a comprehensive range of SAP and technology services to help you achieve your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ContentCard
              title="SAP Enterprise Solutions"
              description="End-to-end SAP implementation and optimization services tailored to your business needs."
              icon={<Database className="h-10 w-10" />}
              link="/what-we-do/sap-enterprise-solutions"
              image="/images/services/enterprise.jpg"
              index={0}
            />

            <ContentCard
              title="SAP Data & AI Analytics"
              description="Transform your data into actionable insights with our advanced analytics solutions."
              icon={<BarChart className="h-10 w-10" />}
              link="/what-we-do/sap-data-ai-analytics"
              image="/images/services/data-ai.jpg"
              index={1}
            />

            <ContentCard
              title="SAP Supply Chain & Procurement"
              description="Optimize your supply chain operations with intelligent SAP solutions."
              icon={<Truck className="h-10 w-10" />}
              link="/what-we-do/sap-supply-chain-procurement"
              image="/images/services/supply-chain.jpg"
              index={2}
            />

            <ContentCard
              title="SAP Technology & Innovation"
              description="Leverage cutting-edge SAP technologies to drive innovation in your organization."
              icon={<Lightbulb className="h-10 w-10" />}
              link="/what-we-do/sap-technology-innovation"
              image="/images/services/technology.jpg"
              index={3}
            />

            <ContentCard
              title="SAP RevBRIM"
              description="Maximize revenue and billing management with specialized SAP solutions."
              icon={<LineChart className="h-10 w-10" />}
              link="/what-we-do/sap-revbrim"
              image="/images/services/revbrim.jpg"
              index={4}
            />

            <ContentCard
              title="Digital & AI Solutions"
              description="Harness the power of AI and digital technologies to transform your business processes."
              icon={<Brain className="h-10 w-10" />}
              link="/what-we-do/digital-ai-solutions"
              image="/images/services/digital-ai.jpg"
              index={5}
            />

            <ContentCard
              title="Cloud Solutions"
              description="Seamlessly migrate and optimize your operations in the cloud environment."
              icon={<Cloud className="h-10 w-10" />}
              link="/what-we-do/cloud-solutions"
              image="/images/services/cloud.jpg"
              index={6}
            />

            <ContentCard
              title="Cybersecurity Services"
              description="Protect your digital assets with our comprehensive security solutions."
              icon={<Shield className="h-10 w-10" />}
              link="/what-we-do/cybersecurity-services"
              image="/images/services/cybersecurity.jpg"
              index={7}
            />

            <ContentCard
              title="Staffing Solutions"
              description="Access top talent and expertise to drive your technology initiatives forward."
              icon={<Users className="h-10 w-10" />}
              link="/what-we-do/staffing-solutions"
              image="/interconnected-talent-network.png"
              index={8}
            />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 opacity-20">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/tech-wave.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              We take a consultative, collaborative approach to every engagement, ensuring that our solutions are
              tailored to your unique business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  {
                    title: "Understand Your Business",
                    description:
                      "We start by deeply understanding your business goals, challenges, and unique requirements.",
                  },
                  {
                    title: "Design Tailored Solutions",
                    description:
                      "Our experts design solutions that leverage the full power of SAP and complementary technologies.",
                  },
                  {
                    title: "Implement with Excellence",
                    description:
                      "Our proven implementation methodology ensures successful delivery with minimal disruption.",
                  },
                  {
                    title: "Continuous Optimization",
                    description:
                      "We continuously monitor and optimize your solutions to ensure they deliver maximum value.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-foreground/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/team-collaboration.jpg"
                alt="Our collaborative approach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Our unique combination of SAP expertise, industry knowledge, and innovative approach sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SAP Certified Expertise",
                description:
                  "Our team includes SAP-certified consultants with deep expertise across the entire SAP ecosystem.",
                icon: <Check className="h-6 w-6 text-blue-500" />,
              },
              {
                title: "AI-Enhanced Solutions",
                description:
                  "We leverage artificial intelligence to enhance SAP implementations, delivering superior results.",
                icon: <Brain className="h-6 w-6 text-blue-500" />,
              },
              {
                title: "Industry-Specific Knowledge",
                description:
                  "Our consultants bring deep industry knowledge to every engagement, ensuring relevant solutions.",
                icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
              },
              {
                title: "Proven Methodology",
                description: "Our implementation methodology has been refined through hundreds of successful projects.",
                icon: <Zap className="h-6 w-6 text-blue-500" />,
              },
              {
                title: "Technical Excellence",
                description: "We maintain the highest standards of technical excellence in everything we do.",
                icon: <Code className="h-6 w-6 text-blue-500" />,
              },
              {
                title: "Long-Term Partnership",
                description:
                  "We build lasting partnerships with our clients, supporting them throughout their journey.",
                icon: <Server className="h-6 w-6 text-blue-500" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg inline-block mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-foreground/80">
                  Contact us today to discuss how our services can help you achieve your business goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
