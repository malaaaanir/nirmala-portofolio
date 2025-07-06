"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mnnvyjnk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New message from your website"
        })
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "malaaaanir@gmail.com",
      href: "mailto:malaaaanir@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 895 3076 3882",
      href: "tel:+6289530763882",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Makassar, Sulawesi Selatan",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/malaaaanir/",
      href: "https://linkedin.com/in/malaaaanir/",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Let's discuss opportunities and collaborations</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-l-4 border-l-purple-500 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <info.icon className="h-6 w-6 text-pink-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-900 font-medium hover:text-purple-500 transition-colors"
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
                  Feel free to reach out!
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://linkedin.com/in/malaaaanir/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/malaaaanir" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              
              <form onSubmit={handleSubmit} className="space-y-6">
              {/* <form action="https://formspree.io/f/mnnvyjnk" method="POST"> */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-300 hover:from-purple-600 hover:to-pink-400"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
