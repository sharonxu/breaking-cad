function Hero({ scrollY }) {
  const parallaxOffset = scrollY * 0.3

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12 pt-16">
      {/* Background element with parallax */}
      <div 
        className="absolute top-0 left-0 w-full h-full transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-1/3 right-1/4 w-px h-96 bg-steel/20 rotate-12"></div>
        <div className="absolute bottom-1/3 left-1/4 w-px h-96 bg-steel/20 -rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-5xl text-center md:scale-[1.68] origin-center">
        <div className="mb-4 font-mono text-sm text-machine-orange uppercase tracking-wider">
          Physical AI × Advanced Manufacturing
        </div>
        
        {/* Breaking Bad style title */}
        <div className="mb-4 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3">
            {/* Br periodic table element */}
            <div className="inline-block border-4 md:border-6 border-machine-orange bg-off-black p-3 md:p-4 relative">
              <div className="text-xs font-mono text-machine-orange absolute top-1 left-2">35</div>
              <div className="text-4xl md:text-6xl font-black text-machine-orange pt-2 md:pt-3">Br</div>
            </div>
            <span className="text-3xl md:text-5xl font-black text-off-white">eaking</span>
          </div>
          <div className="flex items-center justify-center gap-3 mt-3">
            {/* Ca periodic table element */}
            <div className="inline-block border-4 md:border-6 border-machine-orange bg-off-black p-3 md:p-4 relative">
              <div className="text-xs font-mono text-machine-orange absolute top-1 left-2">20</div>
              <div className="text-4xl md:text-6xl font-black text-machine-orange pt-2 md:pt-3">Ca</div>
            </div>
            <span className="text-3xl md:text-5xl font-black text-off-white">D</span>
          </div>
        </div>
        <p className="text-base md:text-lg text-steel max-w-2xl leading-relaxed mx-auto mb-6">
          Building the future of manufacturing where AI meets physical reality. 
          From vibe CAD to industrial-grade fabrication.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-machine-orange text-off-black font-mono font-semibold hover:bg-machine-orange/90 transition-colors text-sm"
          >
            VIEW PROJECTS
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border-2 border-machine-orange text-machine-orange font-mono font-semibold hover:bg-machine-orange hover:text-off-black transition-colors text-sm"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
