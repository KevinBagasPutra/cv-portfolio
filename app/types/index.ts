export interface Service {
  id: number
  title: string
  description: string
  icon: string
  whatsappMessage: string
}

export interface Project {
  id: number
  title: string
  description: string
  category: string
  technologies: string[]
  image?: string
}

export interface Experience {
  year: string
  role: string
  company: string
  description: string
}

export interface Education {
  year: string
  degree: string
  institution: string
  description: string
}

export interface Skill {
  name: string
  level: number
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}