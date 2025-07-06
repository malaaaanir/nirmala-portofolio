"use client"

import { useState } from "react"
import { Award, BookOpen, Trophy, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function AchievementsSection() {
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const achievements = [
    {
      category: "Awards & Recognition",
      icon: Trophy,
      items: [
        {
          title: "PKM-PM Funding Recipient",
          detail:
            "Click me for documentation",
          description: "Received funding for the Program Kreativitas Mahasiswa (PKM) program.",
          year: "2023",
          type: "Funding",
          images: [
            "/documentation-images/image1-pkm.png?height=200&width=300",
            "/documentation-images/image3-pkm.png?height=200&width=300",
            "/documentation-images/image2-buktipkm.png?height=200&width=300",
          ],
          link: "https://drive.google.com/file/d/1bddGpKyde66CUHFu2e2tcsp42vNsixXr/view?usp=sharing",
        },
        {
          title: "6th Place - Youth Sharia Sociopreneurship Competition",
          detail:
            "Click me for documentation",
          description: "Recognized for innovative sharia-based business solutions.",
          year: "2023",
          type: "Competition",
          images: [
            "/documentation-images/YSSC.jpg?height=200&width=300",
          ],
          link: "https://drive.google.com/file/d/1W4uH9mkBOLvnak5dk4OEh6d2uz78KD5C/view?usp=sharing",
        },
      ],
    },
    {
      category: "Publications & Conferences",
      icon: BookOpen,
      items: [
        {
          title: "IMCOM 2024 - Flower Classification Research",
          description:
            "Unveiling Algorithm Classification Excellence: Exploring Calendula and Coreopsis Flower Datasets.",
          detail:
            "Click me for documentation",
          year: "2024",
          type: "International Conference",
          images: [
            "/documentation-images/imcom24-1.png?height=200&width=300",
            "/documentation-images/imcom24-2.png?height=200&width=300",
            "/documentation-images/imcom24-3.jpg?height=200&width=300",
          ],
          link: "https://drive.google.com/file/d/1gumWHmZdLL9hR5U7by5hTb2M_36s7-Z5/view?usp=sharing",
          publication: "https://drive.google.com/file/d/1gumWHmZdLL9hR5U7by5hTb2M_36s7-Z5/view?usp=sharing",
        },
        {
          title: "EiConCIT 2024 - Conference Presentation",
          detail:
            "Click me for documentation",
          description: "6th East Indonesia Conference on Computer and Information Technology.",
          year: "2024",
          type: "National Conference",
          images: [
            "/documentation-images/eiconcit1.JPG?height=200&width=300",
            "/documentation-images/eiconcit2.png?height=200&width=300",
            "/documentation-images/eiconcit3.jpg?height=200&width=300",
          ],
          link: "https://drive.google.com/file/d/1nL1ase_6AL5oSl0PQrshkOU_pgZmWdTl/view?usp=sharing",
        },
        {
          title: "IMCOM 2025 - ResNet-50 Research",
          detail:
            "Click me for documentation",
          description: "ResNet-50 for Flower Image Classification: A Comparative Study.",
          year: "2025",
          type: "International Conference",
          images: [
            "/documentation-images/IMCOM25-2.JPG?height=200&width=300", 
            "/documentation-images/IMCOM25-1.JPG?height=200&width=300",
            "/documentation-images/IMCOM2025-3.jpg?height=200&width=300",
          ],
          link: "https://drive.google.com/file/d/1dU2KHF0N6QyNommCRkzD3gM8w7iKcHf8/view?usp=sharing",
        },
      ],
    },
    {
      category: "Certifications",
      icon: Award,
      items: [
        {
          title: "Junior Web Programmer Certificate",
          detail:
            "Click me for documentation",
          description: "Certificate of Competence in Web Programming.",
          year: "2024",
          type: "Professional",
          images: [
            "/documentation-images/certifications1.jpg?height=200&width=300",
          ],
          link: "https://drive.google.com/file/d/1s91kYqtF__A3h93LvovnYJ2AWQAaYbZB/view?usp=sharing",
        },
        {
          title: "Microsoft Azure Data Fundamentals",
          detail:
            "Click me for documentation",
          description: "Microsoft Certified Fundamentals (MCF) for DP-900.",
          year: "2024",
          type: "Cloud Computing",
          images: [
            "/documentation-images/certifications2.jpg?height=200&width=300",
          ],
          link: "https://drive.google.com/file/d/1QNQ1TD61UfvWUvfKYvryvfa1P-4CalQs/view?usp=sharing",
        },
        {
          title: "MSIB Batch 5 Completion",
          detail:
            "Click me for documentation",
          description: "Web Development specialization completion certificate.",
          year: "2023",
          type: "Program",
          images: [
            "/documentation-images/certifications3.jpg?height=200&width=300",
          ],
          link: "https://drive.google.com/file/d/1I-Kj-AYdoFI6AokwG5iyRKPicsWi9QKz/view?usp=sharing",
        },
      ],
    },
  ]

  const stats = [
    { label: "International Publications", value: "3+", icon: BookOpen },
    { label: "Projects Completed", value: "6+", icon: Users },
    { label: "Students Taught", value: "500+", icon: Users },
    { label: "Process Efficiency", value: "85%", icon: Trophy },
  ]

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highlighting my academic and professional accomplishments
          </p>
        </div>

        {/* Stats Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
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
        </div> */}

        {/* Achievements Grid */}
        <div className="space-y-12">
          {achievements.map((category, index) => (
            <div key={index}>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Dialog key={itemIndex}>
                    <DialogTrigger asChild>
                      <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary">{item.type}</Badge>
                            <span className="text-sm text-gray-500">{item.year}</span>
                          </div>
                          <CardTitle className="text-lg font-bold text-gray-900">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p> <small><i>{item.detail}</i></small>
                        </CardContent>
                        {/* <CardFooter>
                          <small><i>{item.detail}</i></small>
                        </CardFooter> */}
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">{item.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary">{item.type}</Badge>
                          <span className="text-gray-600">{item.year}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item.description} </p>
                        

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {item.images.map((image, imgIndex) => (
                            <div key={imgIndex} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src={image || "/placeholder.svg"}
                                alt={`${item.title} evidence ${imgIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-center">
                          <Button asChild>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              View Certificate
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
