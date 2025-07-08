"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Clock, MessageSquare, Lightbulb, Crown } from "lucide-react"

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("programming")

  const programmingSkills = [
    { 
      name: "HTML", 
      icon: "skill-icons/html-5.png" 
    },
    { 
      name: "CSS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
    },
    { name: "Bootstrap", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
    },
    { 
      name: "Tailwind CSS", 
      icon: "skill-icons/tailwind.png" 
    },
    { 
      name: "PHP", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
    },
    { name: "JQuery", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" 
    },
    { 
      name: "React JS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
    },
    { 
      name: "Node JS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
    },
    { 
      name: "Next JS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"  
    },
    { 
      name: "TypeScript JSX", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
    },
    { name: "Laravel", 
      icon: "skill-icons/laravel.png" 
    },
    { 
      name: "MySQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
    },
  ]

  const toolsSkills = [
    { 
      name: "Visual Studio Code", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  
    },
    { 
      name: "Git", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
    },
    { 
      name: "Postman", 
      icon: "https://cdn.simpleicons.org/postman/FF6C37"  
    },
    { 
      name: "Figma", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"  
    },
    { 
      name: "Adobe Illustrator", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" 
    },
    { 
      name: "Canva", 
      icon: "https://cdn.simpleicons.org/canva/00C4CC"  
    },
    { 
      name: "Microsoft Office", 
      icon: "skill-icons/microsoft.png" 
    },
    { 
      name: "Notion", 
      icon: "https://cdn.simpleicons.org/notion/000000"  
    },
    { 
      name: "Discord", 
      icon: "https://cdn.simpleicons.org/discord/5865F2"  
    },
    { 
      name: "Vercel", 
      icon: "https://cdn.simpleicons.org/vercel/000000"  
    },
  ]

  const softSkills = [
    { name: "Leadership", description: "Leading development teams and coordinating 50+ lab members", icon: Crown },
    { name: "Time Management", description: "Managing multiple projects and deadlines efficiently", icon: Clock },
    { name: "Teamwork", description: "Collaborating in 4+ web projects and 10+ lab activities", icon: Users },
    { name: "Communication", description: "Presenting research at 3 international conferences", icon: MessageSquare },
    { name: "Problem Solving", description: "Developing apps that reduced 85% manual process time", icon: Lightbulb },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical and soft skills
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
  <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8">
    <TabsTrigger value="programming" className="text-sm">
      Programming
    </TabsTrigger>
    <TabsTrigger value="tools" className="text-sm">
      Tools
    </TabsTrigger>
    <TabsTrigger value="soft" className="text-sm">
      Soft Skills
    </TabsTrigger>
  </TabsList>

  {/* Programming Skills */}
  <TabsContent value="programming">
    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
      {programmingSkills.map((skill) => (
        <Badge
          key={skill.name}
          variant="secondary"
          className="flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 cursor-default"
        >
          <img 
            src={skill.icon} 
            alt={skill.name}
            className="w-5 h-5 mr-2 object-contain"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMCAyYzQuNDE4IDAgOCAzLjU4MiA4IDhzLTMuNTgyIDgtOCA4LTgtMy41ODItOC04IDMuNTgyLTggOC04eiIvPjwvc3ZnPg==";
            }}
          />
          {skill.name}
        </Badge>
      ))}
    </div>
  </TabsContent>

  {/* Tools Skills */}
  <TabsContent value="tools">
    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
      {toolsSkills.map((skill) => (
        <Badge
          key={skill.name}
          variant="secondary"
          className="flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 cursor-default"
        >
          <img 
            src={skill.icon} 
            alt={skill.name}
            className="w-5 h-5 mr-2 object-contain"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMCAyYzQuNDE4IDAgOCAzLjU4MiA4IDhzLTMuNTgyIDgtOCA4LTgtMy41ODItOC04IDMuNTgyLTggOC04eiIvPjwvc3ZnPg==";
            }}
          />
          {skill.name}
        </Badge>
      ))}
    </div>
  </TabsContent>

  {/* Soft Skills (tetap menggunakan icon komponen) */}
  <TabsContent value="soft">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {softSkills.map((skill) => (
        <Card key={skill.name} className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-full">
                <skill.icon className="h-4 w-4 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-900">{skill.name}</span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">{skill.description}</p>
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
