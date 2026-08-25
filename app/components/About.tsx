import { Briefcase, GraduationCap } from 'lucide-react'

const experiences = [
  {
    year: 'Juli 2026 - Present',
    role: 'IT Support',
    company: 'PT Mitra Service Infotama',
    description: 'An IT Support Vendor provides technical support services to client organizations by handling helpdesk requests, managing user accounts and access, supporting Microsoft Intune and Active Directory environments, assisting with email migration and configuration, and performing technical testing and troubleshooting using Postman while ensuring issues are resolved according to service level agreements (SLAs).',
  },
  {
    year: 'Jan 2026 - Juni 2026',
    role: 'IT Support EOS',
    company: 'PT Berca Hardayana Perkasa',
    description: 'An IT Support & Infrastructure Engineer responsible for deploying and supporting IT infrastructure, configuring network and end-user devices, providing helpdesk support for project rollouts, performing hardware staging, troubleshooting technical issues, and maintaining project documentation and handover records.',
  },
  {
    year: '2024 - 2025',
    role: 'IT Support',
    company: 'Klinik Gigi Sehat',
    description: 'A Support & Admin professional responsible for developing and managing patient data systems, organizing patient records using MySQL and Excel, managing clinic information systems, troubleshooting and maintaining IT hardware, software, and networks, training staff, and preparing monthly financial reports.',
  },
  {
    year: '2021 - 2024',
    role: 'IT Support',
    company: 'Micro Electronics',
    description: 'An IT Support responsible for providing technical support across electronics retail stores, including troubleshooting computers, IT equipment, installing and maintaining hardware and software, supporting store operations, and ensuring IT systems remain stable and operational.',
  }
]

const educations = [
  {
    year: '2016 - 2021',
    degree: 'Bachelor of Computer Science',
    institution: 'STMIK Indonesia Padang',
    description: 'Specialized in Software Engineering',
  },
  {
    year: '2018 - 2019',
    degree: 'Development Mikrotik',
    institution: 'Mikrotik Academy',
    description: 'Mikrotik Network Development',
  }
]

const skills = [
  { name: 'Networking (TCP/IP, DNS, DHCP)', level: 80 },
  { name: 'Switching & VLAN', level: 75 },
  { name: 'Routing', level: 70 },
  { name: 'Firewall & VPN', level: 65 },
  { name: 'Windows & Linux Server', level: 80 },
  { name: 'Active Directory', level: 65 },
  { name: 'Network Monitoring', level: 70 },
  { name: 'IT Support & Troubleshooting', level: 85 },
  { name: 'Remote Support', level: 85 },
  { name: 'ITSM & Helpdesk', level: 75 },
  { name: 'Backup & Recovery', level: 75 },
  { name: 'Network Security', level: 65 }
]


export default function About() {
  return (
    <section id="about" className="section-padding bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Experienced IT Support Specialist with passion for providing professional services and solutions for your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                    {exp.year}
                  </span>
                  <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                  <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">My Education</h3>
            <div className="space-y-8">
              {educations.map((edu, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 bg-accent/10 text-accent rounded-full">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-2">
                    {edu.year}
                  </span>
                  <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                  <p className="text-gray-600 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">My Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}