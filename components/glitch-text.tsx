"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
}

export function GlitchText({ children, className, intensity = "medium" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 150)
      }
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  const intensityClasses = {
    low: "before:left-[1px] after:left-[-1px] before:text-cyan-400 after:text-pink-500",
    medium: "before:left-[2px] after:left-[-2px] before:text-cyan-400 after:text-pink-500",
    high: "before:left-[3px] after:left-[-3px] before:text-cyan-400 after:text-pink-500",
  }

  return (
    <span
      className={cn(
        "relative inline-block",
        isGlitching && [
          "before:content-[attr(data-text)] before:absolute before:top-0 before:w-full before:h-full before:z-[-1]",
          "after:content-[attr(data-text)] after:absolute after:top-0 after:w-full after:h-full after:z-[-2]",
          intensityClasses[intensity],
        ],
        className,
      )}
      data-text={typeof children === "string" ? children : undefined}
    >
      {children}
    </span>
  )
}
