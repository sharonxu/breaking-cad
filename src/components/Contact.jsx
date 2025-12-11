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

            <div className="border-2 border-steel/40 p-6 hover:border-machine-orange transition-colors group">
              <div className="font-mono text-sm text-machine-orange mb-2">FOUNDER'S CIRCLE</div>
              <div className="space-y-2">
                <a 
                  href="https://luma.com/founders-circle-nyc" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-black group-hover:text-machine-orange transition-colors flex items-center gap-3"
                >
                  <span className="text-2xl">📅</span>
                  Events Calendar
                </a>
                <a 
                  href="https://discord.gg/k8EphpDzM8" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-black group-hover:text-machine-orange transition-colors flex items-center gap-3"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
