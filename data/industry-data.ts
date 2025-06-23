export interface IndustryData {
  id: number
  name: string
  slug: string
  shortDescription: string
  icon?: string
  image?: string
  heroImage?: string
  heroTitle: string
  heroDescription: string
  overview: string
  metaDescription?: string
  keywords?: string[]
  stats: Array<{ value: string; label: string }>
  challenges: Array<{
    title: string
    description: string
    icon?: string
  }>
  solutions: Array<{
    title: string
    description: string
    image?: string
  }>
  caseStudies: Array<{
    title: string
    description: string
    image?: string
    results: string[]
  }>
  technologies: string[]
}

export const industryData: IndustryData[] = [
  {
    id: 1,
    name: "Banking & Finance",
    slug: "banking-finance",
    shortDescription: "AI-powered financial solutions for banking, investment, and insurance",
    icon: "Landmark",
    image: "/images/industries/banking.jpg",
    heroImage: "/images/industries/banking.jpg",
    heroTitle: "Transform Banking & Finance with AI-Powered SAP Solutions",
    heroDescription:
      "Leverage advanced analytics, automation, and intelligent insights to enhance customer experience, optimize operations, and ensure regulatory compliance.",
    overview:
      "The banking and finance industry faces unprecedented challenges from digital disruption, changing customer expectations, and complex regulatory requirements. Our AI-powered SAP solutions help financial institutions transform their operations, enhance customer experiences, and drive sustainable growth.",
    stats: [
      { value: "42%", label: "Reduction in operational costs" },
      { value: "68%", label: "Faster regulatory reporting" },
      { value: "3.5x", label: "ROI from AI implementations" },
      { value: "87%", label: "Increase in fraud detection accuracy" },
    ],
    challenges: [
      {
        title: "Regulatory Compliance",
        description: "Meeting complex and evolving regulatory requirements while maintaining operational efficiency.",
        icon: "AlertTriangle",
      },
      {
        title: "Fraud Detection",
        description: "Identifying and preventing increasingly sophisticated fraud attempts in real-time.",
        icon: "Shield",
      },
      {
        title: "Customer Experience",
        description: "Delivering personalized, seamless experiences across multiple channels and touchpoints.",
        icon: "Users",
      },
      {
        title: "Legacy Systems",
        description: "Modernizing outdated infrastructure while maintaining business continuity.",
        icon: "Settings",
      },
      {
        title: "Data Security",
        description: "Protecting sensitive financial data from cyber threats and ensuring privacy compliance.",
        icon: "Lock",
      },
      {
        title: "Market Volatility",
        description: "Adapting to rapidly changing market conditions and economic uncertainties.",
        icon: "TrendingUp",
      },
    ],
    solutions: [
      {
        title: "AI-Powered Risk Management",
        description:
          "Advanced analytics and machine learning for comprehensive risk assessment, fraud detection, and regulatory compliance.",
        image: "/images/banking/risk-management.jpg",
      },
      {
        title: "Intelligent Customer Insights",
        description:
          "360-degree customer view with predictive analytics for personalized offerings and improved customer satisfaction.",
        image: "/images/banking/customer-insights.jpg",
      },
      {
        title: "Automated Regulatory Reporting",
        description:
          "Streamlined compliance processes with automated data collection, validation, and reporting capabilities.",
        image: "/images/banking/regulatory-reporting.jpg",
      },
      {
        title: "Digital Banking Transformation",
        description: "End-to-end digital solutions for seamless omnichannel experiences and operational efficiency.",
        image: "/images/banking/digital-transformation.jpg",
      },
    ],
    caseStudies: [
      {
        title: "Global Bank Reduces Fraud by 92%",
        description:
          "A leading multinational bank implemented our AI-powered fraud detection solution, resulting in significant reduction in fraudulent transactions and improved customer trust.",
        image: "/images/case-studies/banking-fraud.jpg",
        results: [
          "92% reduction in fraudulent transactions",
          "68% faster fraud detection response time",
          "$4.2M annual savings in fraud-related losses",
          "Improved customer satisfaction scores by 18%",
        ],
      },
      {
        title: "Regional Bank Transforms Customer Experience",
        description:
          "A regional bank leveraged our customer insights platform to deliver personalized experiences, resulting in improved customer retention and increased cross-selling opportunities.",
        image: "/images/case-studies/banking-customer.jpg",
        results: [
          "28% increase in customer retention",
          "42% growth in cross-selling revenue",
          "65% faster customer onboarding process",
          "4.8/5 average customer satisfaction rating",
        ],
      },
      {
        title: "Investment Firm Streamlines Compliance",
        description:
          "A global investment firm implemented our automated regulatory reporting solution, reducing compliance costs and improving reporting accuracy.",
        image: "/images/case-studies/banking-compliance.jpg",
        results: [
          "76% reduction in compliance-related costs",
          "99.8% accuracy in regulatory reporting",
          "85% less time spent on report preparation",
          "Zero regulatory penalties since implementation",
        ],
      },
    ],
    technologies: [
      "SAP S/4HANA Finance",
      "SAP Banking Services",
      "SAP Customer Experience",
      "SAP Analytics Cloud",
      "Machine Learning",
      "Predictive Analytics",
      "Natural Language Processing",
      "Blockchain",
      "Robotic Process Automation",
    ],
  },
  {
    id: 2,
    name: "Manufacturing",
    slug: "manufacturing",
    shortDescription: "Smart manufacturing solutions with predictive maintenance and supply chain optimization",
    icon: "Factory",
    image: "/images/industries/manufacturing.jpg",
    heroImage: "/images/industries/manufacturing-hero.jpg",
    heroTitle: "Revolutionize Manufacturing with AI-Powered SAP Solutions",
    heroDescription:
      "Transform your manufacturing operations with intelligent automation, predictive maintenance, and real-time analytics that drive efficiency, quality, and innovation.",
    overview:
      "The manufacturing industry is undergoing a profound transformation with Industry 4.0, IoT, and AI technologies. Our integrated SAP and AI solutions help manufacturers optimize production processes, predict maintenance needs, enhance quality control, and streamline supply chains for maximum efficiency and competitiveness.",
    stats: [
      { value: "47%", label: "Increase in operational efficiency" },
      { value: "68%", label: "Reduction in unplanned downtime" },
      { value: "3.2x", label: "ROI from intelligent manufacturing" },
      { value: "35%", label: "Reduction in inventory costs" },
    ],
    challenges: [
      {
        title: "Equipment Downtime",
        description: "Minimizing unplanned downtime that impacts production schedules and increases costs.",
        icon: "AlertTriangle",
      },
      {
        title: "Quality Control",
        description: "Maintaining consistent product quality while increasing production speed and volume.",
        icon: "CheckCircle",
      },
      {
        title: "Supply Chain Disruptions",
        description: "Managing complex global supply chains vulnerable to disruptions and volatility.",
        icon: "Truck",
      },
      {
        title: "Energy Consumption",
        description: "Optimizing energy usage to reduce costs and meet sustainability goals.",
        icon: "Zap",
      },
      {
        title: "Skilled Labor Shortage",
        description: "Addressing the growing gap in skilled manufacturing workforce.",
        icon: "Users",
      },
      {
        title: "Digital Transformation",
        description: "Integrating new technologies with existing systems and processes.",
        icon: "Settings",
      },
    ],
    solutions: [
      {
        title: "AI-Powered Predictive Maintenance",
        description:
          "Machine learning algorithms that predict equipment failures before they occur, reducing downtime and maintenance costs.",
        image: "/images/manufacturing/predictive-maintenance.jpg",
      },
      {
        title: "Intelligent Quality Control",
        description:
          "Computer vision and AI systems that detect defects with greater accuracy than traditional methods.",
        image: "/images/manufacturing/quality-control.jpg",
      },
      {
        title: "Supply Chain Optimization",
        description:
          "End-to-end visibility and AI-driven optimization of inventory, logistics, and supplier management.",
        image: "/images/manufacturing/supply-chain.jpg",
      },
      {
        title: "Smart Factory Automation",
        description:
          "Integrated IoT sensors, robotics, and AI for fully automated and intelligent production environments.",
        image: "/images/manufacturing/smart-factory.jpg",
      },
    ],
    caseStudies: [
      {
        title: "Global Automotive Manufacturer Reduces Downtime by 37%",
        description:
          "A leading automotive manufacturer implemented our AI-powered predictive maintenance solution, resulting in a significant reduction in unplanned downtime and maintenance costs.",
        image: "/images/case-studies/automotive-manufacturing.jpg",
        results: [
          "37% reduction in unplanned downtime",
          "42% decrease in maintenance costs",
          "$4.2M annual savings in production losses",
          "ROI achieved within 8 months of implementation",
        ],
      },
      {
        title: "Electronics Manufacturer Improves Quality Control",
        description:
          "A global electronics manufacturer deployed our AI vision system for quality control, reducing defect rates and improving customer satisfaction.",
        image: "/images/case-studies/electronics-manufacturing.jpg",
        results: [
          "92% reduction in defect rates",
          "99.8% defect detection accuracy",
          "68% faster inspection process",
          "28% improvement in customer satisfaction scores",
        ],
      },
      {
        title: "Industrial Equipment Maker Optimizes Supply Chain",
        description:
          "An industrial equipment manufacturer integrated our AI-powered supply chain optimization with their SAP system, reducing inventory costs while improving on-time delivery.",
        image: "/images/case-studies/industrial-equipment.jpg",
        results: [
          "32% reduction in inventory costs",
          "97.8% on-time delivery rate",
          "45% decrease in stockouts",
          "$8.7M working capital freed up",
        ],
      },
    ],
    technologies: [
      "SAP S/4HANA Manufacturing",
      "SAP Digital Manufacturing Cloud",
      "SAP Integrated Business Planning",
      "IoT Sensors & Edge Computing",
      "Machine Learning",
      "Computer Vision",
      "Digital Twin Technology",
      "Predictive Analytics",
      "Robotic Process Automation",
    ],
  },
  // Add more industries as needed
]
