"use client"

import { useState } from "react"
import { ExternalLink, Github, Calendar, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      title: "SD Inpres Cambaya IV Information System",
      year: "2022",
      category: "team",
      role: "Web Developer & System Designer",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      description:
        "A comprehensive web-based information system for SD Inpres Cambaya IV, facilitating communication between teachers and parents while helping school administration manage academic data.",
      features: [
        "Student data management",
        "Class schedules and grades",
        "Student progress reports",
        "Real-time chat system",
        "School announcements",
      ],
      link: "https://sdinprescambaya-iv.sch.id/",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Blue Action",
      year: "2023",
      category: "team",
      role: "Web Developer",
      technologies: ["React JS", "MySQL", "Bootstrap", "JavaScript"],
      description:
        "An educational web application focused on plastic waste reduction initiatives, developed during MSIB Independent Study program.",
      features: [
        "Interactive educational content",
        "Environmental impact statistics",
        "User commitment forms",
        "Admin dashboard",
        "Community engagement features",
      ],
      github: "https://github.com/malaaaanir/BlueAction_FE-master/",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "GasEase",
      year: "2024",
      category: "team",
      role: "Web Developer & System Designer",
      technologies: ["PHP Native", "MySQL", "Bootstrap", "JavaScript"],
      description:
        "An online LPG gas ordering application that simplifies the gas ordering process for customers and distribution agents.",
      features: [
        "Customer registration",
        "Online gas ordering",
        "Stock management",
        "Transaction history",
        "Admin dashboard",
      ],
      github: "https://github.com/malaaaanir/gasEase",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Hawaki.id",
      year: "2024",
      category: "team",
      role: "Web Developer & System Designer",
      technologies: ["PHP Native", "MySQL", "Bootstrap", "JavaScript"],
      description:
        "An e-commerce platform specializing in handmade beaded bags, supporting local artisans in marketing their products.",
      features: [
        "Product catalog",
        "Shopping cart system",
        "Order management",
        "Purchase history",
        "Admin product management",
      ],
      github: "https://github.com/malaaaanir/Hawakiid",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Lguard",
      year: "2024",
      category: "individual",
      role: "Web Developer & System Designer",
      technologies: ["PHP Native", "MySQL", "Bootstrap", "JavaScript"],
      description:
        "A web-based application for monitoring and handling violations by lab assistants at the Computer Science Faculty.",
      features: [
        "Violation recording",
        "Action tracking",
        "Structured database",
        "Performance reports",
        "Digital notifications",
      ],
      link: "https://iclabs.fikom.umi.ac.id/s/monitoring-praktikum/",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Monitoring Praktikum",
      year: "2024",
      category: "individual",
      role: "Web Developer & System Designer",
      technologies: ["PHP Native", "MySQL", "Bootstrap", "JavaScript"],
      description:
        "A comprehensive attendance monitoring system for lab sessions, currently active and used by the Computer Science Faculty.",
      features: [
        "Digital attendance up to 10 sessions",
        "Course information management",
        "Material and assignment tracking",
        "Digital signatures",
        "Automatic attendance reports",
      ],
      link: "https://iclabs.fikom.umi.ac.id/s/monitoring-praktikum/",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my web development projects and technical solutions
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="individual">Individual</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={project.category === "team" ? "default" : "secondary"}>
                        {project.category === "team" ? "Team Project" : "Individual Project"}
                      </Badge>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.year}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{project.title}</CardTitle>
                    <div className="flex items-center text-sm text-blue-600 mb-3">
                      <User className="h-4 w-4 mr-1" />
                      {project.role}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex space-x-2">
                        {project.link && (
                          <Button size="sm" variant="default" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.github && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
