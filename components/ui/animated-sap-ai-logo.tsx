"use client"

import Image from "next/image"
import Link from "next/link"

export default function AnimatedSapAiLogo() {
  return (
    <Link href="/" className="relative flex items-center">
      <Image src="/images/logos/logo-256x256.png" alt="ESG Inc Logo" width={48} height={48} className="mr-2" priority />
    </Link>
  )
}
