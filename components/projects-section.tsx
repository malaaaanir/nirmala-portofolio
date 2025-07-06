"use client"

import { useState } from "react"
import { ExternalLink, Github, Calendar, User, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "SD Inpres Cambaya IV Information System",
      year: "2022",
      category: "team",
      role: "Web Developer & System Designer",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      detail:
        "Click me for details",
      description: [
        "The Information System of SD Inpres Cambaya IV is a web-based application developed to facilitate communication between teachers and parents and assist school administration in managing academic data. This application provides features for managing student data, lesson schedules, grades, and student progress reports that can be accessed online by student guardians.",
        "In addition, this application allows the school to provide information on activities, announcements, and important notes in a fast and structured manner through the chat feature on the website. With this system, the school administration process becomes more efficient and interaction between teachers, parents, and students can be better established through a centralized digital platform.",
      ],
      features: [
        "Student data management",
        "Class schedules and grades",
        "Student progress reports",
        "Real-time chat system",
        "School announcements",
      ],
      images: [
        "/project-images/image1.png",
        "/project-images/image2.png", 
        "/project-images/image3.png",
      ],
      // link: "https://sdinprescambaya-iv.sch.id/",
    },
    {
      title: "Blue Action",
      year: "2023",
      category: "team",
      role: "Web Developer",
      technologies: ["React JS", "MySQL", "Bootstrap", "JavaScript"],
      detail:
        "Click me for details",
      description: [
        "Blue Action is a web-based application developed as an educational media and a means of real action in efforts to reduce plastic waste in the community. This application provides interactive educational features, such as video content and news about the impact of plastic waste, statistical data on environmental pollution, and action commitment forms for users.",
        "In addition, the app is also equipped with an admin dashboard to monitor user participation and manage educational content. Blue Action was developed as a team in the MSIB 2023 Independent Study program, with the aim of raising public awareness of environmental issues and encouraging active involvement in the plastic waste reduction movement.",
      ],
      features: [
        "Interactive educational content",
        "Environmental impact statistics",
        "User commitment forms",
        "Admin dashboard",
        "Community engagement features",
      ],
      images: [
        "/project-images/image4.png",
        "/project-images/image5.png",
        "/project-images/image6.png",
      ],
      github: "https://github.com/malaaaanir/BlueAction_FE-master/",
    },
    {
      title: "Monitoring Praktikum",
      year: "2024",
      category: "individual",
      role: "Web Developer & System Designer",
      technologies: ["PHP Native", "MySQL", "Bootstrap", "JavaScript"],
      detail:
        "Click me for details",
      description: [
        "Practicum Monitoring is a web-based application developed to support the management of practicum attendance schedules and reports at the Faculty of Computer Science, Universitas Muslim Indonesia. This application is specifically designed to facilitate laboratory assistants in monitoring student attendance directly, as well as recording practicum material, assignments given, and managing digital signatures of lecturers and assistants.",
        "Some of the main features offered by this application include digital attendance for up to 10 meetings, complete recording of course information such as code, name, schedule, room, lecturer, and main and substitute assistants. In addition, this application allows input of material descriptions and practicum assignments for each session, and produces an automatic attendance recap in a print-ready table format. With this application, the reporting process becomes more efficient, minimizes human error in manual recap, and speeds up laboratory administrative work. Since its implementation, this application has become the standard in practicum reporting in the faculty environment.",
      ],
      features: [
        "Digital attendance up to 10 sessions",
        "Course information management",
        "Material and assignment tracking",
        "Digital signatures",
        "Automatic attendance reports",
      ],
      images: [
        "/project-images/image20.png",
        "/project-images/image19.png",
        "/project-images/image18.png",
      ],
      github: "https://github.com/malaaaanir/monitoring-praktikum/",
    },
    {
      title: "Hawaki.id",
      year: "2024",
      category: "team",
      role: "Web Developer & System Designer",
      technologies: ["PHP Native", "MySQL", "Bootstrap", "JavaScript"],
      detail:
        "Click me for details",
      description: [
        "Hawaki.id is a web-based e-commerce application developed to facilitate the sale of bead-based handmade bag products. This application provides product catalog features, product details, shopping cart system, transaction management, and purchase history for customers. In addition, the admin can manage product data, stock items, incoming orders. This application aims to assist local businesses in marketing handicraft products more widely and professionally through a digital platform.",
      ],
      features: [
        "Product catalog",
        "Shopping cart system",
        "Order management",
        "Purchase history",
        "Admin product management",
      ],
      images: [
        "/project-images/image10.png",
        "/project-images/image11.png",
        "/project-images/image12.png",
      ],
      github: "https://github.com/malaaaanir/Hawakiid",
    },
    {
      title: "Lguard",
      year: "2024",
      category: "individual",
      role: "Web Developer & System Designer",
      technologies: ["PHP Native", "MySQL", "Bootstrap", "JavaScript"],
      detail:
        "Click me for details",
      description: [
        "Lguard is a web-based application developed to monitor and handle violations committed by practicum assistants at the Faculty of Computer Science, Universitas Muslim Indonesia. This application is designed to facilitate the management and monitoring of practicum assistant behavior during the implementation of activities in the laboratory. Lguard allows the practicum coordinator to record any violations that occur and take the necessary actions appropriately and efficiently.",
        "Some of the main features offered by Lguard include recording assistant violations, storing data related to the actions taken, and easily accessible violation reports. The application also provides a structured database that stores information related to practicum assistants, making it easier to manage their overall data. In addition, Lguard enables accurate report management and can be used for performance assessment of practicum assistants. With this application, the process of monitoring and handling violations can be done more efficiently, reducing dependence on manual records, and ensuring fairness in the assessment of practicum assistants.",
      ],
      features: [
        "Violation recording",
        "Action tracking",
        "Structured database",
        "Performance reports",
        "Digital notifications",
      ],
      images: [
        "/project-images/image13.png",
        "/project-images/image14.png",
        "/project-images/image15.png",
      ],
      github: "https://github.com/malaaaanir/lguard",
    },
    {
      title: "GasEase",
      year: "2024",
      category: "team",
      role: "Web Developer & System Designer",
      technologies: ["PHP Native", "MySQL", "Bootstrap", "JavaScript"],
      detail:
        "Click me for details",
      description: [
        "gasEase is a web-based application developed to simplify the process of ordering LPG gas online for customers and distribution agents. This application provides customer registration, gas ordering, stock data management, and transaction history features that can be accessed by both admins and users. With a responsive and simple interface, this application aims to improve the efficiency of gas ordering services, minimize manual queues, and simplify transaction recording.",
      ],
      features: [
        "Customer registration",
        "Online gas ordering",
        "Stock management",
        "Transaction history",
        "Admin dashboard",
      ],
      images: [
        "/project-images/image8.png",
        "/project-images/image9.png",
        "/project-images/image7.png",
      ],
      github: "https://github.com/malaaaanir/gasEase",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
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
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card
                      className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      

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
                        <div className="flex items-center text-sm text-purple-500 mb-3">
                          <User className="h-4 w-4 mr-1" />
                          {project.role}
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{project.detail}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>

                  {selectedProject && (
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <Badge variant={selectedProject.category === "team" ? "default" : "secondary"}>
                            {selectedProject.category === "team" ? "Team Project" : "Individual Project"}
                          </Badge>
                          <span className="text-gray-600">{selectedProject.year}</span>
                          <span className="text-purple-500 flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {selectedProject.role}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {selectedProject.images?.map((image, imgIndex) => (
                            <div key={imgIndex} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src={image || "/placeholder.svg"}
                                alt={`${selectedProject.title} screenshot ${imgIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                                              
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed text-justify">
                          {selectedProject.description.map((description, i) => (
                              <p key={i}>{description}</p>
                            ))}
                          {/* {selectedProject.description} */}
                          </p>

                        <div>
                          <h3 className="font-semibold mb-2">Key Features:</h3>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            {selectedProject.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        

                        <div className="flex justify-center gap-4">
                          {selectedProject.link && (
                            <Button asChild>
                              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                View Live Demo
                              </a>
                            </Button>
                          )}
                          {selectedProject.github && (
                            <Button variant="outline" asChild>
                              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-1" />
                                View Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  )}
                </Dialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}