const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-featured online store with payment integration.',
    category: 'Web Development',
  },
  {
    title: 'Health & Fitness App',
    description: 'Mobile application for tracking workouts and nutrition.',
    category: 'Mobile App',
  },
  {
    title: 'Corporate Website',
    description: 'Modern website for a tech startup company.',
    category: 'Web Design',
  },
  {
    title: 'Task Management Tool',
    description: 'Productivity application for team collaboration.',
    category: 'Web Development',
  },
  {
    title: 'Travel Blog',
    description: 'Responsive blog with custom content management.',
    category: 'Web Design',
  },
  {
    title: 'Finance Dashboard',
    description: 'Analytics dashboard for financial data visualization.',
    category: 'Web Development',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">
            A collection of my recent projects and work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-4xl font-bold text-primary/50">{project.category.charAt(0)}</div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}