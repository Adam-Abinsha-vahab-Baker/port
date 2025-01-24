"use client";

import { useEffect, useRef } from 'react';

const TECH_STACK = [
  "Python", "TensorFlow", "PyTorch", "OpenCV",
  "React", "Next.js", "TypeScript", "Node.js",
  "Docker", "Kubernetes", "AWS", "GCP",
  "MongoDB", "PostgreSQL", "Redis", "GraphQL"
];

export default function About() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const clone = marquee.innerHTML;
      marquee.innerHTML += clone;
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[60vh] flex items-center justify-center bg-background">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h1>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 bg-muted/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="bg-background border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">BEng Robotics and Artificial Intelligence</h3>
            <p className="text-xl text-muted-foreground">University of Hertfordshire</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-24 overflow-hidden bg-background">
        <h2 className="text-4xl font-bold mb-12 text-center">Tech Stack</h2>
        <div className="relative">
          <div 
            ref={marqueeRef}
            className="flex gap-8 animate-marquee whitespace-nowrap"
          >
            {TECH_STACK.map((tech, index) => (
              <span 
                key={index}
                className="text-xl font-semibold px-4 py-2 bg-muted/5 rounded-lg border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}