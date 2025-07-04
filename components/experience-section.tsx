"use client"

import { Calendar, MapPin, Users, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Assistant & Administrative Coordinator",
      company: "Integrated Computer Laboratories (ICLabs)",
      period: "2023 - Present",
      location: "Universitas Muslim Indonesia",
      type: "Current Position",
      responsibilities: [
        "Manage laboratory administration including data collection, meeting notes, and activity reports",
        "Coordinate meeting schedules and workshops ensuring smooth and timely execution",
        "Assist in planning and implementing activities at the Computer Science Faculty Integrated Laboratory",
        "Communicate important information to members through various communication channels",
      ],
      achievements: [
        "Managed 50+ laboratory members",
        "Coordinated 10+ workshops and activities",
        "Improved administrative efficiency by 85%",
      ],
    },
    {
      title: "Public Relations Officer",
      company: "Kerukunan Mahasiswa Pinrang",
      period: "2023 - 2024",
      location: "Student Organization",
      type: "Organizational",
      responsibilities: [
        "Create and manage content for various social media platforms",
        "Design and execute social media campaigns to increase organizational visibility",
        "Coordinate media coverage for organizational events",
        "Organize and ensure all requirements for smooth event execution are met",
      ],
      achievements: [
        "Increased social media engagement by 200%",
        "Successfully covered 15+ organizational events",
        "Improved brand visibility and recognition",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and organizational involvement
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</CardTitle>
                    <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="default" className="bg-blue-100 text-blue-800">
                      {exp.type}
                    </Badge>
                    <Badge variant="outline" className="border-gray-300">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{exp.location}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-green-800 font-medium">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
