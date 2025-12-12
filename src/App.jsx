import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import PastProjects from './components/PastProjects'
import Contact from './components/Contact'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0)
    
    // Disable browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Simple fixed nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 bg-off-black">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="font-mono text-lg font-semibold tracking-tight flex items-center gap-1.5">
            <span className="border-2 border-machine-orange text-machine-orange px-1 py-0.5">
              <span className="text-[8px] align-super">35</span>Br
            </span>
            <span className="text-base">eaking</span>
            <span className="border-2 border-machine-orange text-machine-orange px-1 py-0.5">
              <span className="text-[8px] align-super">20</span>Ca
            </span>
            <span className="text-base">D</span>
          </a>
          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 font-mono text-lg">
            <a href="#about" className="hover:text-machine-orange transition-colors">ABOUT</a>
            <a href="#projects" className="hover:text-machine-orange transition-colors">PROJECTS</a>
            <a href="#past-projects" className="hover:text-machine-orange transition-colors">PAST EXPERIENCE</a>
            <a href="#contact" className="hover:text-machine-orange transition-colors">CONTACT</a>
          </div>
          {/* Mobile hamburger button */}
          <button 
            className="md:hidden text-off-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-steel/20 pt-4">
            <div className="flex flex-col gap-4 font-mono text-lg">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-machine-orange transition-colors">ABOUT</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-machine-orange transition-colors">PROJECTS</a>
              <a href="#past-projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-machine-orange transition-colors">PAST EXPERIENCE</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-machine-orange transition-colors">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      <Hero scrollY={scrollY} />
      <About scrollY={scrollY} />
      <Projects scrollY={scrollY} />
      <PastProjects scrollY={scrollY} />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-steel/20 py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center text-sm text-steel font-mono">
          © 2025 Breaking CAD. Building the future, one layer at a time.
        </div>
      </footer>
    </div>
  )
}

export default App
