'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, MapPin, Calendar, Wrench } from 'lucide-react'

const projects = [
  {
    title: 'Helpdesk Support & Call Center',
    location: 'Jakarta (Mandiri Digital Tower)',
    date: 'Jan 2026 - Juli 2026',
    category: 'Support & Maintenance',
    description: 'Troubleshooting, maintenance, and support for IT systems, including handling helpdesk requests, managing user accounts, and providing technical assistance to end-users.',
    photos: ['/images/Helpdesk/1.jpg', '/images/Helpdesk/2.jpg', '/images/Helpdesk/3.jpg', '/images/Helpdesk/4.jpg', '/images/Helpdesk/5.jpg', '/images/Helpdesk/6.jpg'],
  },
  {
    title: 'Troubleshooting ATM & CCTV',
    location: 'Jakarta',
    date: 'Jan 2026 - Juli 2026',
    category: 'Maintenance & Support',
    description: 'Troubleshooting and maintenance of ATM and CCTV systems, including diagnosing technical issues, performing repairs, and ensuring optimal performance of the equipment.',
    photos: ['/images/ATM/1.jpg', '/images/ATM/2.jpg', '/images/ATM/3.jpg'],
  },
  {
    title: 'Staging & Deployment of IT Infrastructure',
    location: 'Jakarta',
    date: 'Jan 2026 - Juli 2026',
    category: 'Installation & Configuration',
    description: 'Staging and deployment of IT infrastructure, including configuring and installing network devices, servers, and end-user devices for client organizations.',
    photos: ['/images/Staging/1.jpg', '/images/Staging/2.jpg', '/images/Staging/3.jpg', '/images/Staging/4.jpg', '/images/Staging/5.jpg', '/images/Staging/6.jpg', '/images/Staging/7.jpg'],
  },
  {
    title: 'Engineer Onsite Jakarta',
    location: 'Jakarta',
    date: 'Jan 2026 - Juli 2026',
    category: 'Jaringan Server & Hardware',
    description: 'Deployment and maintenance of network infrastructure, including installation of switches, access points, and implementation of Smartbranch Tablet solutions for client organizations.',
    photos: ['/images/Jakarta/1.jpg', '/images/Jakarta/2.jpg', '/images/Jakarta/3.jpg', '/images/Jakarta/4.jpg', '/images/Jakarta/5.jpg', '/images/Jakarta/6.jpg', '/images/Jakarta/7.jpg', '/images/Jakarta/8.jpg', '/images/Jakarta/9.jpg', '/images/Jakarta/10.jpg', '/images/Jakarta/11.jpg', '/images/Jakarta/12.jpg', '/images/Jakarta/13.jpg', '/images/Jakarta/14.jpg', '/images/Jakarta/15.jpg', '/images/Jakarta/16.jpg', '/images/Jakarta/17.jpg', '/images/Jakarta/18.jpg', '/images/Jakarta/19.jpg', '/images/Jakarta/20.jpg', '/images/Jakarta/21.jpg', '/images/Jakarta/22.jpg', '/images/Jakarta/23.jpg', '/images/Jakarta/24.jpg'],
  },
  {
    title: 'Engineer Onsite Bandung',
    location: 'Bandung',
    date: 'Jan 2026 - Juli 2026',
    category: 'Jaringan Server & Hardware',
    description: 'Deployment and maintenance of network infrastructure, including installation of switches, access points, and implementation of Smartbranch Tablet solutions for client organizations.',
    photos: ['/images/Bandung/1.jpg', '/images/Bandung/2.jpg', '/images/Bandung/3.jpg'],
  },
  {
    title: 'Engineer Onsite Karawang',
    location: 'Karawang',
    date: 'Jan 2026 - Juli 2026',
    category: 'Jaringan Server & Hardware',
    description: 'Deployment and maintenance of network infrastructure, including installation of switches, access points, and implementation of Smartbranch Tablet solutions for client organizations.',
    photos: ['/images/Karawang/1.jpg', '/images/Karawang/2.jpg', '/images/Karawang/3.jpg', '/images/Karawang/4.jpg'],
  },
  {
    title: 'Engineer Onsite Makassar',
    location: 'Makassar',
    date: 'Jan 2026 - Juli 2026',
    category: 'Jaringan Server & Hardware',
    description: 'Deployment and maintenance of network infrastructure, including installation of switches, access points, and implementation of Smartbranch Tablet solutions for client organizations.',
    photos: ['/images/Makassar/1.jpg', '/images/Makassar/2.jpg', '/images/Makassar/3.jpg', '/images/Makassar/4.jpg', '/images/Makassar/5.jpg', '/images/Makassar/6.jpg', '/images/Makassar/7.jpg', '/images/Makassar/8.jpg', '/images/Makassar/9.jpg', '/images/Makassar/10.jpg', '/images/Makassar/11.jpg', '/images/Makassar/12.jpg', '/images/Makassar/13.jpg', '/images/Makassar/14.jpg'],
  },
  {
    title: 'Engineer Onsite Belitung',
    location: 'Belitung',
    date: 'Jan 2026 - Juli 2026',
    category: 'Jaringan Server & Hardware',
    description: 'Deployment and maintenance of network infrastructure, including installation of switches, access points, and implementation of Smartbranch Tablet solutions for client organizations.',
    photos: ['/images/Belitung/1.jpg', '/images/Belitung/2.jpg', '/images/Belitung/3.jpg'],
  },
  {
    title: 'Engineer Onsite Kupang & Sumba',
    location: 'Kupang & Sumba',
    date: 'Jan 2026 - Juli 2026',
    category: 'Jaringan Server & Hardware',
    description: 'Deployment and maintenance of network infrastructure, including installation of switches, access points, and implementation of Smartbranch Tablet solutions for client organizations.',
    photos: ['/images/Kupang & Sumba/1.jpg', '/images/Kupang & Sumba/2.jpg', '/images/Kupang & Sumba/3.jpg'],
  },
  {
    title: 'Engineer Onsite NTT',
    location: 'NTT',
    date: 'Jan 2026 - Juli 2026',
    category: 'Jaringan Server & Hardware',
    description: 'Deployment and maintenance of network infrastructure, including installation of switches, access points, and implementation of Smartbranch Tablet solutions for client organizations.',
    photos: ['/images/NTT/1.jpg', '/images/NTT/2.jpg', '/images/NTT/3.jpg'],
  },
  {
    title: 'Engineer Onsite Palembang',
    location: 'Palembang',
    date: 'Jan 2026 - Juli 2026',
    category: 'Jaringan Server & Hardware',
    description: 'Deployment and maintenance of network infrastructure, including installation of switches, access points, and implementation of Smartbranch Tablet solutions for client organizations.',
    photos: ['/images/Palembang/1.jpg', '/images/Palembang/2.jpg', '/images/Palembang/3.jpg', '/images/Palembang/4.jpg'],
  },
]

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [index, setIndex] = useState(0)
  const total = project.photos.length

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 bg-gray-100 group">
        <Image
          src={project.photos[index]}
          alt={`${project.title} - foto ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Foto sebelumnya"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Foto berikutnya"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.photos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Lihat foto ${i + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === index ? 'bg-white w-4' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>

            <span className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
              {index + 1}/{total}
            </span>
          </>
        )}
      </div>

      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
          {project.category}
        </span>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 border-t pt-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {project.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {project.date}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title flex items-center justify-center gap-2">
            <Wrench className="w-7 h-7" />
            Portofolio IT Support
          </h2>
          <p className="section-subtitle">
            Dokumentasi kegiatan onsite: instalasi, maintenance, dan troubleshooting di lapangan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}