"use client"

import { useState, useRef, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { motion, useScroll, useTransform } from "framer-motion"
import type * as THREE from "three"

function Model() {
  const { scene } = useGLTF("/nintendo_switch_diorama.glb")
  const { viewport } = useThree()
  const ref = useRef<THREE.Group>(null!)
  const { scrollYProgress } = useScroll()

  useFrame(() => {
    if (ref.current) {
      // Rotate based on scroll progress
      ref.current.rotation.y = scrollYProgress.get() * Math.PI * 2
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={viewport.width / 4}
    />
  )
}




export default function Home() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-black via-gray-600 to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
        Tap into the frequency!
          </h1>
          <p className="mt-8 text-2xl text-gray-300 max-w-3xl mx-auto">
        AI/ML Engineer & Full Stack Developer crafting innovative solutions at the intersection of artificial
        intelligence and web technologies.
          </p>
        </div>
      </section>

      {/* Personal Journey Section */}
      <section className="py-24 px-4 bg-muted/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">My Journey</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            With a passion for technology and innovation, I've dedicated my career to pushing the boundaries of what's
            possible in software development. From developing cutting-edge AI solutions to building scalable web
            applications, my journey has been driven by a constant desire to learn and create meaningful impact through
            technology.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="relative min-h-[600px] overflow-hidden">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          {/* AI/ML Section */}
          <div
            className="flex-1 relative flex items-center justify-center p-12 transition-all duration-700 overflow-hidden group"
            onMouseEnter={() => setHoveredSection("ai")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-[#FF00FF] via-[#FF1CF7] to-[#FF00FF] opacity-0 transition-opacity duration-700 blur-2xl ${
                hoveredSection === "ai" ? "opacity-20" : ""
              }`}
            />

            <div className="relative z-10 w-full max-w-2xl mx-auto">
              <h3
                className={`text-6xl font-bold text-center transition-all duration-700 ${
                  hoveredSection === "ai" ? "transform -translate-y-12 scale-75" : "mb-8"
                } bg-gradient-to-r from-[#FF00FF] via-[#FF1CF7] to-[#FF00FF] bg-clip-text text-transparent`}
              >
                AI & Machine Learning
              </h3>

              <div
                className={`space-y-8 transition-all duration-700 ${
                  hoveredSection === "ai"
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-16 pointer-events-none"
                }`}
              >
                <p className="text-xl text-white text-center">
                  Pushing the boundaries of artificial intelligence with cutting-edge solutions in machine learning,
                  computer vision, and natural language processing.
                </p>
                <ul className="space-y-6 text-lg max-w-lg mx-auto">
                  <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-[#FF00FF] rounded-full shadow-glow-pink"></span>
                    <span className="text-white">Deep Learning & Neural Networks</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-[#FF1CF7] rounded-full shadow-glow-pink"></span>
                    <span className="text-white">Natural Language Processing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-[#F945FF] rounded-full shadow-glow-pink"></span>
                    <span className="text-white">Computer Vision</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-[#FF69FF] rounded-full shadow-glow-pink"></span>
                    <span className="text-white">MLOps & Model Deployment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Full Stack Section */}
          <div
            className="flex-1 relative flex items-center justify-center p-12 transition-all duration-700 overflow-hidden group"
            onMouseEnter={() => setHoveredSection("web")}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-[#00F5FF] via-[#00E5FF] to-[#00F5FF] opacity-0 transition-opacity duration-700 blur-2xl ${
                hoveredSection === "web" ? "opacity-20" : ""
              }`}
            />

            <div className="relative z-10 w-full max-w-2xl mx-auto">
              <h3
                className={`text-6xl font-bold text-center transition-all duration-700 ${
                  hoveredSection === "web" ? "transform -translate-y-12 scale-75" : "mb-8"
                } bg-gradient-to-r from-[#00F5FF] via-[#00E5FF] to-[#00F5FF] bg-clip-text text-transparent`}
              >
                Full Stack Development
              </h3>

              <div
                className={`space-y-8 transition-all duration-700 ${
                  hoveredSection === "web"
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-16 pointer-events-none"
                }`}
              >
                <p className="text-xl text-white text-center">
                  Building scalable, modern web applications with cutting-edge technologies and best practices in
                  full-stack development.
                </p>
                <ul className="space-y-6 text-lg max-w-lg mx-auto">
                  <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-[#00F5FF] rounded-full shadow-glow-blue"></span>
                    <span className="text-white">Modern Frontend Frameworks</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-[#00E5FF] rounded-full shadow-glow-blue"></span>
                    <span className="text-white">Backend Development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-[#00D5FF] rounded-full shadow-glow-blue"></span>
                    <span className="text-white">Cloud Architecture</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-3 h-3 bg-[#00C5FF] rounded-full shadow-glow-blue"></span>
                    <span className="text-white">DevOps & CI/CD</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Components and Scroll Effects Section */}
      <section ref={targetRef} className="h-[150vh] relative overflow-hidden bg-gradient-to-b from-black to-blue-900">
        <motion.div className="absolute inset-0 flex items-center justify-center" style={{ opacity }}>
          <Canvas className="w-full h-full">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Canvas>
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
         <h2 className="text-6xl font-bold text-white text-center">Discover the Possibilities</h2>
        </div>
      </section>
    </div>
  )
}

