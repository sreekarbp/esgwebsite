"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { cn } from "@/lib/utils"

export function MeasurableImpact() {
  const chartRef = useRef<HTMLDivElement>(null)
  const isChartInView = useInView(chartRef, { once: true, amount: 0.2 })

  return (
    <section className="py-24 bg-gradient-to-b from-background/90 to-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Measurable Mission Impact</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Our mission translates to tangible results for our clients. Here's how our AI-enhanced SAP solutions have
            delivered quantifiable business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <span
                    className={cn(
                      "w-3 h-3 rounded-full mr-2",
                      metric.color === "blue"
                        ? "bg-blue-500"
                        : metric.color === "green"
                          ? "bg-green-500"
                          : "bg-purple-500",
                    )}
                  />
                  {metric.title}
                </h3>
                <div className="flex justify-between items-baseline">
                  <div className="text-3xl font-bold">{metric.value}</div>
                  <div className={cn("text-sm font-medium", metric.trend === "up" ? "text-green-500" : "text-red-500")}>
                    {metric.trend === "up" ? "↑" : "↓"} {metric.change}
                  </div>
                </div>
                <p className="mt-2 text-foreground/60 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>

          <div
            ref={chartRef}
            className="lg:col-span-8 bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 h-[400px]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full"
            >
              <ChartContainer
                config={{
                  efficiency: {
                    label: "Operational Efficiency",
                    color: "hsl(210, 100%, 50%)",
                  },
                  innovation: {
                    label: "Innovation Rate",
                    color: "hsl(270, 100%, 50%)",
                  },
                  sustainability: {
                    label: "Sustainability Impact",
                    color: "hsl(150, 100%, 45%)",
                  },
                }}
                className="h-full w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="efficiency"
                      stroke="var(--color-efficiency)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="innovation"
                      stroke="var(--color-innovation)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="sustainability"
                      stroke="var(--color-sustainability)"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

const impactMetrics = [
  {
    title: "Operational Efficiency",
    value: "43%",
    change: "12% YoY",
    trend: "up",
    color: "blue",
    description: "Average increase in operational efficiency across SAP implementations",
  },
  {
    title: "Innovation Rate",
    value: "2.8x",
    change: "0.4x Q/Q",
    trend: "up",
    color: "purple",
    description: "Multiplier of innovation velocity compared to traditional approaches",
  },
  {
    title: "Sustainability Impact",
    value: "31%",
    change: "7% YoY",
    trend: "up",
    color: "green",
    description: "Reduction in resource consumption through optimized SAP processes",
  },
]

const chartData = [
  {
    quarter: "Q1",
    efficiency: 15,
    innovation: 10,
    sustainability: 12,
  },
  {
    quarter: "Q2",
    efficiency: 22,
    innovation: 15,
    sustainability: 18,
  },
  {
    quarter: "Q3",
    efficiency: 28,
    innovation: 23,
    sustainability: 22,
  },
  {
    quarter: "Q4",
    efficiency: 32,
    innovation: 27,
    sustainability: 24,
  },
  {
    quarter: "Q1",
    efficiency: 37,
    innovation: 32,
    sustainability: 26,
  },
  {
    quarter: "Q2",
    efficiency: 43,
    innovation: 38,
    sustainability: 31,
  },
]
