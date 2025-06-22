
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                🚀 I'm a <span className="text-emerald-400 font-semibold">passionate software developer</span> who 
                discovered the magic of coding after studying mechanical engineering. My journey began with curiosity 
                and evolved into a deep love for solving real-world problems through technology.
              </p>
              
              <p className="text-lg">
                💡 What started as an exploration has become my <span className="text-teal-400 font-semibold">calling</span>. 
                I'm highly skilled in <span className="text-emerald-400">React.js</span> and <span className="text-yellow-400">JavaScript</span>, 
                and I'm continuously expanding my expertise in full-stack development and machine learning.
              </p>
              
              <p className="text-lg">
                🎯 I believe in the power of <span className="text-green-400 font-semibold">continuous learning</span> 
                and problem-solving. Every line of code I write is a step towards building something meaningful 
                that can make a difference.
              </p>
            </div>

            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-emerald-400">4+</div>
                  <div className="text-gray-300 text-sm">Projects Built</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-teal-500/30 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-teal-400">1+</div>
                  <div className="text-gray-300 text-sm">Years Learning</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-green-500/30 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-green-400">10+</div>
                  <div className="text-gray-300 text-sm">Technologies</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-teal-400">∞</div>
                  <div className="text-gray-300 text-sm">Passion Level</div>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30">
                <blockquote className="text-white italic text-center">
                  "From gears to code, from mechanical to digital - 
                  every challenge is an opportunity to innovate."
                </blockquote>
                <div className="text-center text-emerald-400 font-semibold mt-3">- Ajayraj Kattina</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
