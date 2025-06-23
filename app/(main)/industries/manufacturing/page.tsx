import type { Metadata } from "next"
import ManufacturingPage from "./manufacturing-page"

export const metadata: Metadata = {
  title: "Manufacturing Industry Solutions | ESG Inc",
  description:
    "AI-powered SAP solutions for manufacturing with predictive maintenance, supply chain optimization, and intelligent automation.",
  keywords:
    "manufacturing, SAP manufacturing, AI manufacturing, predictive maintenance, supply chain optimization, industry 4.0, smart factory",
}

export default function Page() {
  return <ManufacturingPage />
}
