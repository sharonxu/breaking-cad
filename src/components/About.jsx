function About({ scrollY }) {
  const parallaxOffset = Math.max(0, (scrollY - 600) * 0.1)

  return (
    <section id="about" className="min-h-screen flex items-center relative pt-28 pb-24 px-6 md:px-12 border-t border-steel/20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          {/* Left side - Text */}
          <div>
            {/* Profile picture for mobile */}
            <div className="md:hidden mb-12 flex justify-center overflow-hidden w-48 h-48 border-4 border-machine-orange">
              <img 
                src="/images/profile.png" 
                alt="Sharon Xu" 
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              WHERE AI MEETS
              <br />
              <span className="text-machine-orange">STEEL</span>
            </h2>
            <div className="space-y-6 text-lg text-steel leading-relaxed">
              <p>
                I'm Sharon Xu, an engineer exploring the convergence of artificial intelligence and physical fabrication.
              </p>
              <p>
                The most transformative applications of AI won't happen in software alone. I'm developing expertise in electronics, robotics, and CNC manufacturing to build intelligent systems that can autonomously design and produce physical objects. I document my work publicly, lead technical workshops, and collaborate with others pushing the boundaries of physical AI.
              </p>
              <p>
                This site showcases my projects and research as I work toward a future where AI agents can reason about materials, fabrication constraints, and design intent to bridge the gap between concept and manufactured reality.
              </p>
            </div>
          </div>

          {/* Right side - Profile and Stats with parallax */}
          <div 
            className="space-y-8 transition-transform duration-150 ease-out pl-8"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            {/* Profile picture for desktop */}
            <div className="hidden md:flex justify-start mb-12 overflow-hidden w-64 h-64 border-4 border-machine-orange">
              <img 
                src="/images/profile.png" 
                alt="Sharon Xu" 
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            
            <h3 className="text-2xl font-black mb-6 text-machine-orange font-mono">MANUFACTURING CAPABILITIES</h3>
            
            <div className="border-l-4 border-machine-orange pl-6">
              <div className="text-5xl font-black font-mono mb-2 text-machine-orange">0.02mm</div>
              <div className="text-steel">Laser cutting precision</div>
            </div>
            <div className="border-l-4 border-steel pl-6">
              <div className="text-5xl font-black font-mono mb-2">10mm</div>
              <div className="text-steel">Carbon steel cutting depth</div>
            </div>
            <div className="border-l-4 border-machine-orange pl-6">
              <div className="text-5xl font-black font-mono mb-2 text-machine-orange">4-AXIS</div>
              <div className="text-steel">CNC mill & lathe capability</div>
            </div>
            <div className="border-l-4 border-steel pl-6">
              <div className="text-5xl font-black font-mono mb-2">3D</div>
              <div className="text-steel">Multi-material printing</div>
            </div>
            <div className="border-l-4 border-machine-orange pl-6">
              <div className="text-5xl font-black font-mono mb-2 text-machine-orange">600ft²</div>
              <div className="text-steel">Woodshop access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
