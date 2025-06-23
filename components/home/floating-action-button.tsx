"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Phone, Mail, X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

type ActionButton = {
  icon: React.ReactNode
  label: string
  action: () => void
  color: string
}

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  if (!isMobile) return null

  const actionButtons: ActionButton[] = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: "Chat",
      action: () => console.log("Chat clicked"),
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Call",
      action: () => (window.location.href = "tel:+18005551234"),
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      action: () => (window.location.href = "mailto:info@esg.com"),
      color: "bg-violet-600 hover:bg-violet-700",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col items-end space-y-3 mb-4"
          >
            {actionButtons.map((button, index) => (
              <motion.div
                key={button.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center"
              >
                <span className="mr-2 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm shadow-lg">
                  {button.label}
                </span>
                <Button size="icon" className={`${button.color} shadow-lg`} onClick={button.action}>
                  {button.icon}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        className={`h-14 w-14 rounded-full shadow-lg ${
          isOpen ? "bg-gray-800 hover:bg-gray-700" : "bg-blue-600 hover:bg-blue-700"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
          </motion.div>
        </AnimatePresence>
      </Button>
    </div>
  )
}
