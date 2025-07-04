"use client"

import { GraduationCap, MapPin, Mail, Linkedin, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-medium">Makassar, Sulawesi Selatan</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">malaaaanir@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                I am a passionate Computer Science fresh graduate with a strong focus on developing innovative digital
                solutions and technology system management. My deep interest lies in web development, data analysis, and
                technology research.
              </p>

              <p className="text-lg leading-relaxed">
                With practical experience as a Laboratory Assistant & Coordinator, I have designed web-based
                applications, managed databases, and collaborated on research projects. I thrive in multidisciplinary
                teams with a strong results-oriented approach.
              </p>

              <p className="text-lg leading-relaxed">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
