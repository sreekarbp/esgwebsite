"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Navbar() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" /> {/* Placeholder */}
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  const logoSrc = theme === "dark" ? "/images/logos/dark-theme/logo-256x256.png" : "/images/logos/logo-256x256.png"

  return (
    <nav className="bg-white shadow dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="ESG Logo"
                width={48}
                height={48}
                className="mr-2"
                priority
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Heroicon name: outline/x */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
