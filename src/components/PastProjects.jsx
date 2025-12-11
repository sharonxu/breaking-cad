function PastProjects({ scrollY }) {
  const parallaxOffset = Math.max(0, (scrollY - 2800) * 0.06)

  return (
    <section id="past-projects" className="min-h-screen py-24 px-6 md:px-12 border-t border-steel/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            PAST
            <br />
            <span className="text-machine-orange">EXPERIENCE</span>
          </h2>
        </div>

        <div 
          className="space-y-12 transition-transform duration-150 ease-out"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          {/* Production ML at Scale */}
          <div className="border-l-4 border-machine-orange pl-8">
            <h3 className="text-3xl font-black mb-4">PRODUCTION ML AT SCALE</h3>
            <p className="text-lg text-steel leading-relaxed mb-8">
              I spent years shipping production ML systems at scale. At <span className="text-off-white font-semibold">Indigo Ag</span>, 
              I led teams building multimodal AI and computer vision models that analyzed satellite imagery, weather patterns, 
              and soil data to predict agricultural outcomes. At <span className="text-off-white font-semibold">TripAdvisor</span>, 
              I developed NLP and feed ranking systems that shaped experiences for millions of users, shipping microservices 
              that processed massive amounts of data in real time. At <span className="text-off-white font-semibold">Element AI</span> under{' '}
              <span className="text-off-white font-semibold">Yoshua Bengio</span>, I built graph neural networks for SIEM.
            </p>
          </div>

          {/* Career Timeline */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-steel/40 p-8 hover:border-machine-orange transition-colors">
              <div className="font-mono text-sm text-machine-orange mb-2">2020 - 2023</div>
              <h4 className="text-2xl font-black mb-4">Senior Data Scientist</h4>
              <div className="text-steel mb-4 font-semibold">Indigo Ag</div>
              <ul className="space-y-3 text-steel leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-machine-orange mt-1">→</span>
                  <span>Led team building state-of-the-art deep learning models to predict farming practices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-machine-orange mt-1">→</span>
                  <span>Built scalable systems ingesting satellite imagery, machine data, and weather data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-machine-orange mt-1">→</span>
                  <span>Achieved 30%+ improvements in F1 score and MAE across all applications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-machine-orange mt-1">→</span>
                  <span>Developed novel sensor fusion product serving daily gap-free satellite imagery</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-steel/40 p-8 hover:border-machine-orange transition-colors">
              <div className="font-mono text-sm text-machine-orange mb-2">2018 - 2020</div>
              <h4 className="text-2xl font-black mb-4">Machine Learning Engineer</h4>
              <div className="text-steel mb-4 font-semibold">TripAdvisor</div>
              <ul className="space-y-3 text-steel leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-machine-orange mt-1">→</span>
                  <span>Designed and productionized learn-to-rank ML models for personalization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-machine-orange mt-1">→</span>
                  <span>$20M annual revenue increase and 15.6% boost in customer engagement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-machine-orange mt-1">→</span>
                  <span>Integrated models into Java microservices, reducing timeouts by 50x</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-machine-orange mt-1">→</span>
                  <span>Built recommender systems and NLP frameworks ranking in top 5% engagement</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Founder's Circle */}
          <div className="border-2 border-machine-orange p-8 md:p-12">
            <h3 className="text-3xl font-black mb-6 text-machine-orange">FOUNDER'S CIRCLE</h3>
            <p className="text-lg text-steel leading-relaxed mb-4">
              Connecting high-impact startups with game-changing strategy, operations, and marketing expertise.
            </p>
            <p className="text-lg text-steel leading-relaxed mb-6">
              Strategy, growth, and marketing sessions from experts – plus hands-on AI workshops, hackathons, 
              and hardware builds for founders going 0 to 1.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://luma.com/founders-circle-nyc" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-machine-orange text-off-black font-mono font-semibold hover:bg-machine-orange/90 transition-colors text-center"
              >
                SUBSCRIBE TO EVENTS
              </a>
              <a 
                href="https://discord.gg/k8EphpDzM8" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-machine-orange text-machine-orange font-mono font-semibold hover:bg-machine-orange hover:text-off-black transition-colors text-center"
              >
                JOIN DISCORD
              </a>
            </div>
          </div>

          {/* Transition to Physical AI */}
          <div className="border-2 border-machine-orange p-8 md:p-12">
            <h3 className="text-3xl font-black mb-6 text-machine-orange">THE FUTURE IS PHYSICAL</h3>
            <p className="text-lg text-steel leading-relaxed mb-6">
              There's a massive opportunity at the intersection of AI and hardware, and I'm convinced the people who 
              understand both sides deeply will build the most interesting companies of the next decade. I'm diving 
              into the physical AI space, learning CNC machining and fabrication from the ground up.
            </p>
            <p className="text-lg text-off-white leading-relaxed">
              If you're working on robotics, physical AI, or trying to bridge software and hardware, let's connect. 
              I'm building in public and always looking for people on similar paths.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PastProjects

