"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Stories", href: "/blog" },
    { name: "Reach us", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo - responsive sizing */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image src="/DBM-logo.png" alt="Divya Bihar Mission Logo" width={50} height={50} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" priority />
            <div className="block">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">Divya Bihar Mission </h1>
              <p className="text-xs text-gray-600 font-devanagari">दिव्य बिहार मिशन</p>
            </div>
          </Link>

          {/* Desktop Navigation - improved spacing */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm xl:text-base font-medium transition-colors rounded-md hover:bg-orange-50"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Donate Button - show only on sm and up */}
          <div className="hidden sm:flex items-center space-x-2 sm:space-x-4">
            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 h-7 sm:h-10"
              asChild
            >
              <Link href="/donate">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Donate Now</span>
                <span className="sm:hidden">दान</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button - always visible on mobile */}
          <div className="flex sm:hidden items-center">
            <button
              className="lg:hidden p-3 -mr-3 touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - improved touch targets */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-3 text-base font-medium rounded-md mx-2 touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
