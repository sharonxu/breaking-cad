function Tools({ scrollY }) {
  const parallaxOffset = Math.max(0, (scrollY - 2200) * 0.06)

  const capabilities = [
    {
      name: "Industrial Laser Cutter",
      specs: "0.02mm precision • ½\" stainless steel",
      desc: "Cuts through stainless steel like butter"
    },
    {
      name: "4-Axis CNC Mill & Lathe",
      specs: "Multi-axis machining • Precision tooling",
      desc: "Complex geometries and tight tolerances"
    },
    {
      name: "Press Brake",
      specs: "Sheet metal forming • Production bending",
      desc: "Precision bending for enclosures and parts"
    },
    {
      name: "Welding Equipment",
      specs: "MIG/TIG capable • Steel fabrication",
      desc: "Structural assembly and joining"
    },
    {
      name: "3D Printing",
      specs: "Rapid prototyping • Multiple materials",
      desc: "Fast iteration from concept to physical"
    },
    {
      name: "KUKA Robotic Arm",
      specs: "Coming soon • Automated fabrication",
      desc: "Next-gen precision and repeatability"
    }
  ]

  return (
    <section id="tools" className="min-h-screen py-24 px-6 md:px-12 border-t border-steel/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            MANUFACTURING
            <br />
            <span className="text-machine-orange">ARSENAL</span>
          </h2>
          <p className="text-xl text-steel font-mono">Industrial-grade capabilities</p>
        </div>

        <div 
          className="grid md:grid-cols-3 gap-6 transition-transform duration-150 ease-out"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          {capabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="border-l-2 border-steel/40 pl-6 hover:border-machine-orange transition-colors group"
            >
              <h3 className="text-xl font-black mb-2 group-hover:text-machine-orange transition-colors">
                {cap.name}
              </h3>
              <div className="font-mono text-sm text-machine-orange mb-3">
                {cap.specs}
              </div>
              <p className="text-steel text-sm">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-2 border-steel/40 p-8">
          <h3 className="text-2xl font-black mb-4">FULL STACK FABRICATION</h3>
          <p className="text-steel leading-relaxed">
            From initial concept to final product, I have end-to-end manufacturing capabilities. 
            This allows rapid iteration cycles—test an idea in the morning, hold the prototype by afternoon. 
            No outsourcing delays, no minimum orders, just pure speed from design to reality.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Tools
