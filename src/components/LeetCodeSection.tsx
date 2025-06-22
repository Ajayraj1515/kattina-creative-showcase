
import React from 'react';
import { ArrowRight } from 'lucide-react';

const LeetCodeSection = () => {
  return (
    <section id="leetcode" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Coding <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Practice</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 relative overflow-hidden group">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* LeetCode Logo/Visual */}
                <div className="lg:w-1/3 text-center">
                  <div className="inline-block p-6 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 interactive">
                    <div className="text-6xl font-bold text-white">LC</div>
                    <div className="text-sm font-semibold text-orange-900 mt-2">LeetCode</div>
                  </div>
                  
                  {/* Floating elements around logo */}
                  <div className="relative">
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce">
                      ✓
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs animate-bounce delay-1000">
                      {}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Active DSA Learner 🧠
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Solving problems consistently to build a strong foundation in 
                    <span className="text-purple-400 font-semibold"> Data Structures</span> and 
                    <span className="text-blue-400 font-semibold"> Algorithms</span>. 
                    Every problem solved is a step towards becoming a better problem solver.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <div className="text-2xl font-bold text-green-400">50+</div>
                      <div className="text-gray-400 text-sm">Problems Solved</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <div className="text-2xl font-bold text-blue-400">Daily</div>
                      <div className="text-gray-400 text-sm">Practice</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                      <div className="text-2xl font-bold text-purple-400">Growing</div>
                      <div className="text-gray-400 text-sm">Stronger</div>
                    </div>
                  </div>

                  {/* Action button */}
                  <a
                    href="https://leetcode.com/u/Ajay1515/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <span>View My LeetCode Profile</span>
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>

              {/* Skills showcase */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <h4 className="text-xl font-bold text-white mb-6 text-center">Problem-Solving Focus Areas</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Arrays & Strings',
                    'Linked Lists', 
                    'Trees & Graphs',
                    'Dynamic Programming',
                    'Sorting & Searching',
                    'Hash Tables',
                    'Two Pointers',
                    'Sliding Window'
                  ].map((topic, index) => (
                    <span 
                      key={topic}
                      className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-300 px-4 py-2 rounded-full text-sm border border-orange-500/30 hover:scale-105 transition-transform duration-300 interactive"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Motivational quote */}
              <div className="mt-8 text-center">
                <blockquote className="text-gray-300 italic text-lg">
                  "Every problem is an opportunity to grow. Every solution is a step towards mastery."
                </blockquote>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
