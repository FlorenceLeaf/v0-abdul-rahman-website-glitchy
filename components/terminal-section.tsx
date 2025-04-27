"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function TerminalSection() {
  const [displayText, setDisplayText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)

  const fullText = `> Initializing profile data...
> Loading personal information...
> Access granted.

Greetings My name is Abdul Rahman

I have hands-on experience in Python programming and software development, with a strong foundation in scripting, application design, and problem-solving. One of my key projects includes building a text-based mini-game, designed similar to a graphic novel, where players navigate through multiple story endings based on their choices. This project strengthened my skills in logic development and user experience design.

In addition to software, I have experience in AutoCAD for technical drafting and basic design work, expanding my ability to visualize and create structural layouts.

I have practical experience with virtualization — setting up multiple Virtual Machines (VMs), installing and configuring operating systems (Windows), creating user accounts, setting up directories, and handling basic system administration tasks.

In the field of networking, I have configured virtual and physical networks for various events, setting up Local Area Networks (LANs) and VLANs, as well as managing gateways and IP addresses to ensure smooth and secure communication between systems.

Another significant project I developed was a gesture recognition software that tracks a users hand movements and interprets different hand gestures into system commands. This hands-free control system was designed for presentation applications, allowing users to navigate slides back and forth with simple hand motions — eliminating the need for a physical clicker or an assistant.

Overall, my blend of software development, system administration, networking, and creative problem-solving positions me as a versatile and adaptive professional, ready to take on new challenges and contribute to innovative projects.

> End of transmission.`

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 30)

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <Card className="bg-black border-2 border-cyan-500/70 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-pink-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
          <div className="ml-2 text-xs text-gray-400">terminal@cyber-dev:~</div>
        </div>
        <div className="font-mono text-sm text-cyan-300 whitespace-pre-line">
          {displayText}
          {cursorVisible && (
            <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse shadow-[0_0_5px_rgba(0,255,255,0.7)]"></span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
