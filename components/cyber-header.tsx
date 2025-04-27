"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CyberHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-pink-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px:8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center text-white font-bold">
                AR
              </div>
              <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600">
                Abdul_Rahman
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors relative group text-sm"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-64 border-b border-pink-500/30" : "max-h-0",
        )}
      >
        <div className="px-4 py-2 space-y-1 bg-black/90">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <span className="text-pink-500 mr-2">&gt;</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
