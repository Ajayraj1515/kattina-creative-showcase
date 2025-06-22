
import React from 'react';

const FutureGoals = () => {
  const goals = [
    {
      icon: "🎯",
      title: "Become a Proficient Full-Stack Developer",
      description: "Master both frontend and backend technologies to build complete web applications from conception to deployment.",
      timeline: "6-12 months",
      progress: 65,
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: "🤖",
      title: "Master Machine Learning and AI",
      description: "Dive deep into ML algorithms, neural networks, and AI frameworks to solve complex real-world problems.",
      timeline: "12-18 months", 
      progress: 25,
      color: "from-green-500 to-blue-500"
    },
    {
      icon: "🏗️",
      title: "Build Scalable Real-World Applications",
      description: "Create applications that can handle thousands of users while maintaining performance and reliability.",
      timeline: "Ongoing",
      progress: 45,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "👨‍🏫",
      title: "Learn from Experts and Mentors",
      description: "Connect with industry professionals and learn best practices through mentorship and collaboration.",
      timeline: "Ongoing",
      progress: 40,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "💡",
      title: "Continuously Improve as a Problem-Solver",
      description: "Enhance analytical thinking and problem-solving skills through consistent practice and learning.",
      timeline: "Lifelong",
      progress: 60,
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="goals" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Future <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Goals</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My roadmap for continuous growth and professional development in the tech industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500 interactive"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                {/* Icon and basic info */}
                <div className="flex items-center gap-4 lg:w-1/3">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {goal.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {goal.title}
                    </h3>
                    <span className="text-purple-400 text-sm font-medium">
                      {goal.timeline}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:w-1/2">
                  <p className="text-gray-300 leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                {/* Progress */}
                <div className="lg:w-1/4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">{goal.progress}%</div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${goal.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-gray-400 text-sm mt-2">Progress</div>
                  </div>
                </div>
              </div>

              {/* Hover effect gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${goal.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Motivational quote */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 max-w-3xl mx-auto">
            <blockquote className="text-2xl text-white font-light italic mb-4">
              "The journey of a thousand miles begins with a single step, and every step forward is progress worth celebrating."
            </blockquote>
            <div className="text-purple-400 font-semibold">- My Development Philosophy</div>
            
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-purple-300 font-medium">🚀 Growth Mindset</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-blue-300 font-medium">💪 Persistent Learning</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-green-300 font-medium">🎯 Goal-Oriented</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureGoals;
