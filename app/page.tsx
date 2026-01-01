import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      
      {/* Debug - Tampilkan semua section */}
      <div className="fixed bottom-4 left-4 bg-primary text-white p-2 rounded text-sm z-50">
        All sections loaded ✓
      </div>
    </div>
  )
}