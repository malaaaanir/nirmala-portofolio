"use client"

import { GraduationCap, Linkedin, Github, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Trophy, Users } from "lucide-react"

export function AboutSection() {
  
  const stats = [
    { label: "International Publications", value: "3+", icon: BookOpen },
    { label: "Projects Completed", value: "6+", icon: Users },
    { label: "Students Taught", value: "500+", icon: Users },
    { label: "Process Efficiency", value: "85%", icon: Trophy },
  ]
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fresh graduate with a passion for technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed text-justify">
                I am a passionate Computer Science fresh graduate with a strong focus on developing innovative digital
                solutions and technology system management. My deep interest lies in web development, data analysis, and
                technology research.
              </p>

              <p className="text-lg leading-relaxed text-justify">
                With practical experience as a Laboratory Assistant & Coordinator, I have designed web-based
                applications, managed databases, and collaborated on research projects. I thrive in multidisciplinary
                teams with a strong results-oriented approach.
              </p>

              <p className="text-lg leading-relaxed text-justify">
                My work has been recognized through publications in national and international conferences, and I
                continuously adapt to new technologies while mastering various software development and data analysis
                tools.
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/malaaaanir/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/malaaaanir"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:alamatemail@anda.com"  // Ganti dengan alamat email Anda
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
              >
                <Mail className="h-6 w-6" />  {/* Ikon Email dari lucide-react */}
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-600 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
                    <p className="text-gray-700 mb-1">
                      <strong>Universitas Muslim Indonesia</strong>
                    </p>
                    <p className="text-gray-600">Computer Science/Informatics Engineering</p>
                    <p className="text-gray-600">Sept 2021 - Feb 2025</p>
                    <Badge variant="secondary" className="mt-2">
                      GPA: 3.92/4.0
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <stat.icon className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Profile Images */}
            {/* <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Profile 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Profile 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-blue-100 rounded-lg flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Profile 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
