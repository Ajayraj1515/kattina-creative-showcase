
import React from 'react';

const WhatICanDo = () => {
  const capabilities = [
    {
      icon: "🚀",
      title: "Build Scalable Frontends",
      description: "Create responsive, modern user interfaces using React.js with component-based architecture and state management.",
      skills: ["React.js", "Component Architecture", "State Management"]
    },
    {
      icon: "🔗",
      title: "REST API Integration", 
      description: "Seamlessly connect frontend applications with backend services using modern API integration techniques.",
      skills: ["Fetch API", "Axios", "Error Handling"]
    },
    {
      icon: "🔐",
      title: "JWT-based Secure Auth",
      description: "Implement robust authentication systems with JSON Web Tokens, protected routes, and secure user sessions.",
      skills: ["JWT Tokens", "Protected Routes", "Session Management"]
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Design and develop fully responsive applications that work perfectly across all devices and screen sizes.",
      skills: ["CSS Grid", "Flexbox", "Mobile-First Design"]
    },
    {
      icon: "🧩",
      title: "Problem-solving with DSA",
      description: "Apply data structures and algorithms knowledge to solve complex programming challenges efficiently.",
      skills: ["Algorithms", "Data Structures", "Optimization"]
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "Stay updated with latest technologies and frameworks through consistent practice and learning on platforms like LeetCode.",
      skills: ["Self-Learning", "Adaptability", "Growth Mindset"]
    },
    {
      icon: "🤖",
      title: "Exploring AI & ML",
      description: "Eager to learn and implement Machine Learning and AI solutions to solve real-world problems.",
      skills: ["Python", "Data Analysis", "ML Concepts"]
    },
    {
      icon: "💡",
      title: "Creative Problem Solving",
      description: "Approach challenges with innovative thinking and create unique solutions that make a difference.",
      skills: ["Innovation", "Critical Thinking", "User-Centric Design"]
    }
  ];

  return (
    <section id="capabilities" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What I Can <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Do</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My core strengths and capabilities that I bring to every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 interactive"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {capability.description}
                </p>

                <div className="space-y-2">
                  {capability.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-3 py-1 rounded-full text-xs border border-purple-500/30 inline-block mx-1"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-gray-300 mb-6">
              Let's collaborate and turn your ideas into reality with clean, efficient, and scalable solutions.
            </p>
            <a
              href="#chat"
              className="interactive bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
            >
              Let's Connect 🚀
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatICanDo;
