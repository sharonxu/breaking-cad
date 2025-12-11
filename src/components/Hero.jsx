function Hero({ scrollY }) {
  const parallaxOffset = scrollY * 0.3

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12">
      {/* Background element with parallax */}
      <div 
        className="absolute top-0 left-0 w-full h-full transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-1/3 right-1/4 w-px h-96 bg-steel/20 rotate-12"></div>
        <div className="absolute bottom-1/3 left-1/4 w-px h-96 bg-steel/20 -rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-5xl text-center pt-24">
        <div className="mb-8 font-mono text-sm text-machine-orange uppercase tracking-wider">
          Physical AI × Advanced Manufacturing
        </div>
        
        {/* Breaking Bad style title */}
        <div className="mb-6 flex flex-col items-center">
          <div className="flex items-center justify-center gap-4">
            {/* Br periodic table element */}
            <div className="inline-block border-4 md:border-8 border-machine-orange bg-off-black p-4 md:p-5 relative">
              <div className="text-sm font-mono text-machine-orange absolute top-1 md:top-2 left-2 md:left-3">35</div>
              <div className="text-6xl md:text-8xl font-black text-machine-orange pt-2 md:pt-4">Br</div>
            </div>
            <span className="text-5xl md:text-7xl font-black text-off-white">eaking</span>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            {/* Ca periodic table element */}
            <div className="inline-block border-4 md:border-8 border-machine-orange bg-off-black p-4 md:p-5 relative">
              <div className="text-sm font-mono text-machine-orange absolute top-1 md:top-2 left-2 md:left-3">20</div>
              <div className="text-6xl md:text-8xl font-black text-machine-orange pt-2 md:pt-4">Ca</div>
            </div>
            <span className="text-5xl md:text-7xl font-black text-off-white">D</span>
          </div>
        </div>
        <p className="text-lg md:text-xl text-steel max-w-2xl leading-relaxed mx-auto">
          Building the future of manufacturing where AI meets physical reality. 
          From vibe CAD to industrial-grade fabrication.
        </p>
        <div className="mt-12 flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-machine-orange text-off-black font-mono font-semibold hover:bg-machine-orange/90 transition-colors"
          >
            VIEW PROJECTS
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-machine-orange text-machine-orange font-mono font-semibold hover:bg-machine-orange hover:text-off-black transition-colors"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
