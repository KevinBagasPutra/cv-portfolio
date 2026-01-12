import { Briefcase, GraduationCap } from 'lucide-react'

const experiences = [
  {
    year: '2025 - 2026',
    role: 'Desktop Support Engineer',
    company: 'PT Berca Hardayana Perkasa',
    description: 'A Desktop Support Engineer provides technical support by troubleshooting hardware, software, and network issues for end users.',
  },
  {
    year: '2025 - 2025',
    role: 'IT Support',
    company: 'Klinik Gigi Sehat',
    description: 'Leading frontend development for multiple client projects.',
  },
  {
    year: '2021 - 2024',
    role: 'IT Support Role',
    company: 'Micro Electronics',
    description: 'Built responsive websites and web applications.',
  },
  {
    year: '2020 - 2021',
    role: 'Web Developer',
    company: 'Micro Usaha UD.FR',
    description: 'Assisted in developing mobile and web applications.',
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
  { name: 'React/Next.js', level: 70 },
  { name: 'TypeScript', level: 70 },
  { name: 'Tailwind CSS', level: 70 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Git & DevOps', level: 75 }
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Experienced frontend developer with passion for creating beautiful and functional web applications
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