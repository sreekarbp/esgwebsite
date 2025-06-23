import Link from "next/link"
import { ArrowRight, Database, BarChart, Truck, Lightbulb, LineChart, Brain, Cloud, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/ui/hero"
import { ContentCard } from "@/components/ui/content-card"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export default function ServicesPage() {
  const services = [
    {
      title: "SAP Enterprise Solutions",
      description: "End-to-end SAP implementation and optimization services tailored to your business needs.",
      icon: <Database className="h-8 w-8" />,
      link: "/services/sap-enterprise-solutions",
    },
    {
      title: "SAP Data & AI Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions.",
      icon: <BarChart className="h-8 w-8" />,
      link: "/services/sap-data-ai-analytics",
    },
    {
      title: "SAP Supply Chain & Procurement",
      description: "Optimize your supply chain operations with intelligent SAP solutions.",
      icon: <Truck className="h-8 w-8" />,
      link: "/services/sap-supply-chain-procurement",
    },
    {
      title: "SAP Technology & Innovation",
      description: "Leverage cutting-edge SAP technologies to drive innovation in your organization.",
      icon: <Lightbulb className="h-8 w-8" />,
      link: "/services/sap-technology-innovation",
    },
    {
      title: "SAP RevBRIM",
      description: "Maximize revenue and billing management with specialized SAP solutions.",
      icon: <LineChart className="h-8 w-8" />,
      link: "/services/sap-revbrim",
    },
    {
      title: "Digital & AI Solutions",
      description: "Harness the power of AI and digital technologies to transform your business processes.",
      icon: <Brain className="h-8 w-8" />,
      link: "/services/digital-ai-solutions",
    },
    {
      title: "Cloud Solutions",
      description: "Seamlessly migrate and optimize your operations in the cloud environment.",
      icon: <Cloud className="h-8 w-8" />,
      link: "/services/cloud-solutions",
    },
    {
      title: "Cybersecurity Services",
      description: "Protect your digital assets with our comprehensive security solutions.",
      icon: <Shield className="h-8 w-8" />,
      link: "/services/cybersecurity-services",
    },
    {
      title: "Staffing Solutions",
      description: "Access top talent and expertise to drive your technology initiatives forward.",
      icon: <Users className="h-8 w-8" />,
      link: "/services/staffing-solutions",
    },
  ]

  return (
    <>
      <Hero
        title="Our Services"
        description="Comprehensive solutions to drive your digital transformation journey"
        image="/images/services-hero.jpg"
        height="medium"
      />

      <div className="container mx-auto container-padding">
        <Breadcrumb />

        <section className="section-spacing">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ContentCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="section-spacing">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h2 className="mb-4">Need a Custom Solution?</h2>
            <p className="text-foreground/70 max-w-3xl mx-auto mb-6">
              Our team of experts can create tailored solutions to address your specific business challenges.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
