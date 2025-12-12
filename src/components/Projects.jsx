function Projects({ scrollY }) {
  // Only apply parallax on larger screens
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768
  const parallaxOffset = isDesktop ? Math.max(0, (scrollY - 1400) * 0.08) : 0

  const projects = [
    {
      title: "LOW-COST MOBILE MANIPULATOR",
      description: "Holonomic mobile robot with integrated manipulator arm, inspired by LeKiwi design principles. Features 3-wheel kiwi drive for omnidirectional movement, standardized modular base plates (20mm grid), dual RGB cameras, and industrial-grade construction. Combines precision-cut steel/aluminum base with 3D printed components for optimal cost and performance",
      status: "In Progress",
      tech: ["Raspberry Pi 5", "Kiwi Drive", "STS3215 Servos", "Modular Design", "LeRobot"],
      link: "https://github.com/SIGRobotics-UIUC/LeKiwi"
    },
    {
      title: "VIBE CAD",
      description: "AI-powered CAD assistant that understands natural language and generates manufacturing-ready designs",
      status: "Active Development",
      tech: ["GPT-4", "CAD API", "Manufacturing AI"],
      link: null
    },
    {
      title: "CNC XY PLOTTER",
      description: "Custom-built XY plotter with multi-use toolhead for paint, charcoal, pen, and more. CoreXY motion system designed as a foundation for future CNC projects",
      status: "Planning",
      tech: ["CoreXY", "Stepper Motors", "Arduino", "G-code"],
      link: "https://szymonkaliski.com/writing/2023-10-02-building-a-diy-pen-plotter"
    },
    {
      title: "AUTOMATED PLANT GROWING SYSTEM",
      description: "Precision-controlled grow chamber with IoT sensors for environmental monitoring and AI-powered optimization. Custom-fabricated with climate control, automated watering, and data logging",
      status: "Planning",
      tech: ["ESP32", "Environmental Sensors", "Climate Control", "Data Analytics"],
      link: null
    },
    {
      title: "INTERNET OF THINGS HOME SYSTEM",
      description: "ESP32-based home automation network integrated with Home Assistant. Controls mechanical ventilation, awnings, and heat pumps while monitoring environmental data like crawl space humidity.",
      status: "Planning",
      tech: ["ESP32", "Home Assistant", "Thread/Matter", "Sensors"],
      link: null
    }
  ]

  return (
    <section id="projects" className="md:min-h-screen pt-20 pb-16 md:pt-28 md:pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            CURRENT
            <br />
            <span className="text-machine-orange">PROJECTS</span>
          </h2>
          <p className="text-xl text-steel font-mono">Building the future of physical AI</p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid md:grid-cols-2 gap-8 transition-transform duration-150 ease-out" style={{ transform: `translateY(${parallaxOffset}px)` }}>
          {/* Featured project - spans full width on first row */}
          {projects[0].link ? (
            <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="md:col-span-2 border-2 border-steel/40 p-8 md:p-12 hover:border-machine-orange transition-colors group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-4xl font-black mb-2 group-hover:text-machine-orange transition-colors">
                    {projects[0].title}
                  </h3>
                  <div className="font-mono text-sm text-machine-orange">{projects[0].status}</div>
                </div>
                <svg className="w-8 h-8 text-steel group-hover:text-machine-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="text-steel mb-6 leading-relaxed">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-3">
                {projects[0].tech.map((tech, i) => (
                  <span key={i} className="px-4 py-2 border border-steel/40 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ) : (
            <div className="md:col-span-2 border-2 border-steel/40 p-8 md:p-12 hover:border-machine-orange transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-4xl font-black mb-2 group-hover:text-machine-orange transition-colors">
                    {projects[0].title}
                  </h3>
                  <div className="font-mono text-sm text-machine-orange">{projects[0].status}</div>
                </div>
                <svg className="w-8 h-8 text-steel group-hover:text-machine-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="text-steel mb-6 leading-relaxed">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-3">
                {projects[0].tech.map((tech, i) => (
                  <span key={i} className="px-4 py-2 border border-steel/40 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Other projects in grid */}
          {projects.slice(1).map((project, idx) => 
            project.link ? (
              <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className="border-2 border-steel/40 p-8 hover:border-machine-orange transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black group-hover:text-machine-orange transition-colors">
                    {project.title}
                  </h3>
                  <svg className="w-6 h-6 text-steel group-hover:text-machine-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="font-mono text-sm text-machine-orange mb-4">{project.status}</div>
                <p className="text-steel mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 border border-steel/40 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ) : (
              <div key={idx} className="border-2 border-steel/40 p-8 hover:border-machine-orange transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black group-hover:text-machine-orange transition-colors">
                    {project.title}
                  </h3>
                  <svg className="w-6 h-6 text-steel group-hover:text-machine-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="font-mono text-sm text-machine-orange mb-4">{project.status}</div>
                <p className="text-steel mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 border border-steel/40 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
