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
    </div>
  )
}