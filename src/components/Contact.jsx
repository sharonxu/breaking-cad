function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-24 px-6 md:px-12 border-t border-steel/20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              LET'S BUILD
              <br />
              <span className="text-machine-orange">SOMETHING</span>
            </h2>
            <p className="text-xl text-steel mb-8 leading-relaxed">
              Working on physical AI? Need manufacturing expertise? 
              Want to collaborate on the future of fabrication?
            </p>
            <p className="text-lg text-steel mb-12 leading-relaxed">
              I'm always interested in ambitious projects that push the boundaries 
              of what's possible when AI meets advanced manufacturing.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-steel/40 p-6 hover:border-machine-orange transition-colors group">
              <div className="font-mono text-sm text-machine-orange mb-2">EMAIL</div>
              <a 
                href="mailto:sharon@breakingcad.ai" 
                className="text-2xl font-black group-hover:text-machine-orange transition-colors"
              >
                sharon@breakingcad.ai
              </a>
            </div>

            <div className="border-2 border-steel/40 p-6 hover:border-machine-orange transition-colors group">
              <div className="font-mono text-sm text-machine-orange mb-2">X</div>
              <a 
                href="https://x.com/sharxist" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-black group-hover:text-machine-orange transition-colors"
              >
                @sharxist
              </a>
            </div>

            <div className="border-2 border-steel/40 p-6 hover:border-machine-orange transition-colors group">
              <div className="font-mono text-sm text-machine-orange mb-2">GITHUB</div>
              <a 
                href="https://github.com/sharonxu" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-black group-hover:text-machine-orange transition-colors"
              >
                github.com/sharonxu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
