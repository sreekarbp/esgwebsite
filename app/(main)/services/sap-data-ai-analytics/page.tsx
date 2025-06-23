import type { Metadata } from "next"
import SAPDataAIAnalyticsClientPage from "./SAPDataAIAnalyticsClientPage"

export const metadata: Metadata = {
  title: "SAP Data & AI Analytics | ESG",
  description:
    "Transform your business with our SAP Data & AI Analytics solutions. Unlock insights, automate decisions, and drive innovation with advanced analytics.",
}

export default function SAPDataAIAnalyticsPage() {
  return <SAPDataAIAnalyticsClientPage />
}
