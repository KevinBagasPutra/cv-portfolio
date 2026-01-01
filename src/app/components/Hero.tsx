import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="section-padding pt-24 md:pt-32">
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
              <button
                onClick={() => alert('CV downloaded!')}
                className="btn-secondary flex items-center gap-2"
              >
                Download CV
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-primary to-accent rounded-full w-full h-full flex items-center justify-center">
                <div className="bg-white rounded-full w-60 h-60 md:w-72 md:h-72 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl font-bold text-primary">KB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}