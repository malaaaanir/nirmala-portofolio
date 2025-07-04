"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const roles = ["Fresh Graduate", "Web Developer", "System Designer", "Research Enthusiast"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const text = roles[currentIndex]
    let index = 0

    setDisplayText("")

    const typeText = () => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
        timeout = setTimeout(typeText, 100)
      }
    }

    typeText()

    return () => clearTimeout(timeout)
  }, [currentIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-gray-900">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nirmala
            </span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 h-10">
            <span className="inline-block min-w-[300px] text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate Computer Science graduate specializing in innovative digital solutions, web development, and
            technology research. Ready to transform ideas into impactful applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-full bg-transparent"
            >
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
