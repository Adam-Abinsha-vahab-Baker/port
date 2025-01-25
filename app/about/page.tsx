"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, GraduationCap } from "lucide-react"
import pic from "@/app/assets/portfolio.jpg"
import { Button } from "@/components/ui/button"

const TECH_STACK = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "OpenCV",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "GraphQL",
]

const EDUCATION = [
  {
    degree: "BEng Robotics and Artificial Intelligence",
    institution: "University of Hertfordshire",
    year: "2020-2023",
  },
 
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 relative mb-8 md:mb-0">
              <div className="absolute inset-0 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
              <Image
                src={pic || "/placeholder.svg"}
                alt="Your Name"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl object-cover w-full h-[500px]"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-5xl font-bold mb-4">Adam Abinsha Vahab</h1>
                <h2 className="text-3xl text-blue-400 mb-4">Everything Computer Science.</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Passionate about creating innovative solutions at the intersection of web development and artificial
                  intelligence. Committed to pushing the boundaries of what's possible in tech.
                </p>
                <div className="flex space-x-4 mb-8">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="mailto:your.email@example.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <Button>Download CV</Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {TECH_STACK.map((tech, index) => (
            <span key={index} className="px-4 py-2 bg-blue-600 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-400" />
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
              </div>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-gray-400">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

