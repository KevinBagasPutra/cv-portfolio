// app/components/Services.tsx
'use client'

import { Code, Laptop, GraduationCap, Video, Database, Settings } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description:
      'Building modern, responsive, and scalable websites using the latest web technologies.',
    icon: <Code className="h-8 w-8" />,
  },
  {
    title: 'IT Onsite Freelance',
    description:
      'Providing onsite IT services including computer, network, software, hardware, and technical troubleshooting.',
    icon: <Laptop className="h-8 w-8" />,
  },
  {
    title: 'Information Systems Thesis Support',
    description:
      'Providing technical support for applications, databases, system analysis, and Information Systems thesis projects.',
    icon: <GraduationCap className="h-8 w-8" />,
  },
  {
    title: 'Video Content Creator',
    description:
      'Creating and editing video content for social media, promotional campaigns, branding, and digital marketing.',
    icon: <Video className="h-8 w-8" />,
  },
  {
    title: 'SQL Database',
    description:
      'Designing, managing, optimizing, and maintaining SQL databases such as MySQL and PostgreSQL.',
    icon: <Database className="h-8 w-8" />,
  },
  {
    title: 'Maintenance',
    description:
      'Providing maintenance and troubleshooting for systems, websites, computers, networks, and IT equipment.',
    icon: <Settings className="h-8 w-8" />,
  },
]

export default function Services() {
  const handleWhatsAppClick = (serviceTitle: string) => {
    const phoneNumber = '+6289666664656' // Ganti dengan nomor WhatsApp Anda
    const message = `Hello! I'm interested in your ${serviceTitle} services. Can we discuss my project?`
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <section id="services" className="section-padding bg-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Freelance Services</h2>
          <p className="section-subtitle">
            I offer a range of professional services. Click on any service to discuss your project via WhatsApp.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => handleWhatsAppClick(service.title)}
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-lg mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-primary font-medium">
                <span>Contact via WhatsApp</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              const phoneNumber = '+6289666664656' // Ganti dengan nomor WhatsApp Anda
              const message = encodeURIComponent('Hello! I\'d like to discuss a custom project with you.')
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
            }}
            className="btn-primary"
          >
            Discuss Your Project via WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}