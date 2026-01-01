'use client'

import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const handleDownloadCV = () => {
    alert('CV downloaded! (In a real app, this would download your CV file)')
  }

  return (
    <section id="home" className="section-padding pt-24 md:pt-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I&apos;m <span className="text-primary">Kevin</span>
              <br />
              <span className="text-accent">Frontend Developer</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              I create beautiful, responsive websites and applications with modern technologies. 
              Let&apos;s build something amazing together!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2"
              >
                Get In Touch
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-primary to-accent rounded-full w-full h-full flex items-center justify-center p-1">
                <div className="bg-white rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                  {/* Image Profile */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src="/images/profile-photo.png"
                      alt="Kevin Bagas Putra - Frontend Developer"
                      fill
                      sizes="(max-width: 768px) 256px, 320px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}