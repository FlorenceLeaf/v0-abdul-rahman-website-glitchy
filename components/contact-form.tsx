"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card className="bg-black/80 border border-cyan-500/50 shadow-[0_0_10px_rgba(0,255,255,0.2)]">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center">
            <Send className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-cyan-400">Message Sent!</h3>
          <p className="text-gray-300">Thanks for reaching out. I'll get back to you as soon as possible.</p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-black/80 border border-cyan-500/50 shadow-[0_0_10px_rgba(0,255,255,0.2)]">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-cyan-300">
                NAME
              </label>
              <Input
                id="name"
                placeholder="Enter your name"
                required
                className="bg-black/50 border-pink-500/50 focus:border-pink-400 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-cyan-300">
                EMAIL
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="bg-black/50 border-pink-500/50 focus:border-pink-400 text-white placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm text-cyan-300">
              SUBJECT
            </label>
            <Input
              id="subject"
              placeholder="Enter subject"
              required
              className="bg-black/50 border-pink-500/50 focus:border-pink-400 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-cyan-300">
              MESSAGE
            </label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              rows={5}
              required
              className="bg-black/50 border-pink-500/50 focus:border-pink-400 text-white placeholder:text-gray-500 resize-none"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white"
          >
            {isSubmitting ? (
              <>
                <span className="mr-2">SENDING</span>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </>
            ) : (
              <>SEND MESSAGE</>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
