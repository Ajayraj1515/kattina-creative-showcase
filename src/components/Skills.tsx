
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "HTML", level: 95, color: "from-orange-500 to-red-500" },
        { name: "CSS", level: 90, color: "from-blue-500 to-purple-500" },
        { name: "JavaScript", level: 88, color: "from-yellow-500 to-orange-500" },
        { name: "React.js", level: 85, color: "from-cyan-500 to-blue-500" },
        { name: "Bootstrap", level: 80, color: "from-purple-500 to-pink-500" },
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 75, color: "from-green-500 to-emerald-500" },
        { name: "Python", level: 70, color: "from-blue-500 to-yellow-500" },
        { name: "Express", level: 72, color: "from-gray-500 to-gray-700" },
      ]
    },
    {
      title: "Database & Others",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 70, color: "from-green-500 to-green-700" },
        { name: "SQLite", level: 75, color: "from-blue-500 to-blue-700" },
        { name: "C++", level: 78, color: "from-blue-600 to-purple-600" },
        { name: "DSA", level: 68, color: "from-red-500 to-pink-500" },
        { name: "OOP", level: 80, color: "from-indigo-500 to-purple-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Continuously evolving skillset with hands-on experience in modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-300 hover:bg-white/15"
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-purple-300 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform scale-x-0 animate-scale-in`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 3 + skillIndex) * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating skill badges */}
              <div className="mt-8 flex flex-wrap gap-2">
                {category.skills.slice(0, 3).map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full text-xs text-purple-200 border border-purple-500/50"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive skill cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'JavaScript', 'Node.js', 'Python', 'MongoDB', 'CSS3', 'HTML5', 'Bootstrap', 'Express', 'Git'].map((tech, index) => (
              <div 
                key={tech}
                className="interactive bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg px-6 py-3 rounded-full border border-purple-500/30 text-white hover:scale-110 hover:bg-purple-500/30 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
