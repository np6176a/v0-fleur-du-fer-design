"use client"

import type React from "react"

import Image from "next/image"

export function BrandHeader() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-iron-black text-petal-ivory py-6 border-b-2 border-gilded-brass shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              <Image src="/logo.png" alt="Fleur du Fer Logo" width={64} height={64} className="object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold tracking-wide text-[rgba(199,166,101,1)]">Fleur du Fer</h1>
              <p className="text-xs text-gilded-brass uppercase tracking-widest">Design System</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#colors"
              onClick={(e) => handleNavClick(e, "colors")}
              className="text-sm hover:text-gilded-brass transition-colors"
            >
              Colors
            </a>
            <a
              href="#typography"
              onClick={(e) => handleNavClick(e, "typography")}
              className="text-sm hover:text-gilded-brass transition-colors"
            >
              Typography
            </a>
            <a
              href="#components"
              onClick={(e) => handleNavClick(e, "components")}
              className="text-sm hover:text-gilded-brass transition-colors"
            >
              Components
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
