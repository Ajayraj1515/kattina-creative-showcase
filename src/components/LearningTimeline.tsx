
import React from 'react';

const LearningTimeline = () => {
  const timelineEvents = [
    {
      year: "2016-2017",
      title: "Secondary Education",
      institution: "VBR English Medium High School, Muthukur",
      achievement: "9.7 CGPA",
      description: "Built strong fundamentals in mathematics and science, developing problem-solving skills that would later prove valuable in programming.",
      icon: "🎓",
      color: "from-blue-500 to-purple-500"
    },
    {
      year: "2017-2019",
      title: "Intermediate (MPC)",
      institution: "Narayana Jr College, Nellore",
      achievement: "9.33 CGPA",
      description: "Specialized in Mathematics, Physics, and Chemistry. This analytical foundation helped in understanding logical programming concepts.",
      icon: "📚",
      color: "from-green-500 to-blue-500"
    },
    {
      year: "2020-2024",
      title: "B.Tech Mechanical Engineering",
      institution: "Deenbandhu Chhotu Ram University, Murthal",
      achievement: "6.98 CGPA",
      description: "During my mechanical engineering studies, I discovered my passion for technology and software development, leading to a career pivot.",
      icon: "⚙️",
      color: "from-orange-500 to-red-500"
    },
    {
      year: "Oct 2023 - Present",
      title: "Full-Stack Development Certification",
      institution: "Nxtwave Disruptive Technologies", 
      achievement: "Industry Ready Certification",
      description: "Intensive hands-on training in modern web technologies including React.js, Node.js, databases, and deployment. Built multiple real-world projects.",
      icon: "💻",
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2024 - Present",
      title: "Professional Development",
      institution: "Self-Directed Learning",
      achievement: "Multiple Projects & Continuous Learning",
      description: "Working on full-stack projects, practicing data structures & algorithms on LeetCode, and exploring AI/ML technologies for future growth.",
      icon: "🚀",
      color: "from-teal-500 to-green-500"
    },
    {
      year: "Future",
      title: "Advanced Specialization",
      institution: "Continuous Learning Path",
      achievement: "AI/ML & Full-Stack Mastery",
      description: "Planning to deepen expertise in machine learning, AI, and advanced full-stack development to build innovative solutions.",
      icon: "🌟",
      color: "from-purple-600 to-blue-600"
    }
  ];

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Learning <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My educational path and transformation from mechanical engineering to software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 transform lg:-translate-x-1/2"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 lg:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-slate-900 transform lg:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
                </div>

                {/* Content card */}
                <div className={`w-full lg:w-5/12 ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                  <div className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-500 interactive">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {event.icon}
                      </div>
                      <div>
                        <div className="text-purple-400 font-semibold text-sm">{event.year}</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-blue-300 font-medium">{event.institution}</div>
                      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3 border border-green-500/30">
                        <span className="text-green-300 font-semibold">🏆 {event.achievement}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{event.description}</p>
                    </div>

                    {/* Hover effect background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 -z-10`}></div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-purple-400">8+</div>
            <div className="text-gray-300 text-sm">Years of Education</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-blue-400">1+</div>
            <div className="text-gray-300 text-sm">Years in Tech</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-green-400">4+</div>
            <div className="text-gray-300 text-sm">Projects Built</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-pink-400">∞</div>
            <div className="text-gray-300 text-sm">Learning Mindset</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningTimeline;
