
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "HTML", level: 95, color: "linear-gradient(to right, #ea580c, #dc2626)" },
        { name: "CSS", level: 90, color: "linear-gradient(to right, #3b82f6, #6366f1)" },
        { name: "JavaScript", level: 88, color: "linear-gradient(to right, #eab308, #ea580c)" },
        { name: "React.js", level: 85, color: "linear-gradient(to right, #06b6d4, #3b82f6)" },
        { name: "Bootstrap", level: 80, color: "linear-gradient(to right, #6366f1, #8b5cf6)" },
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 75, color: "linear-gradient(to right, #22c55e, #10b981)" },
        { name: "Python", level: 70, color: "linear-gradient(to right, #3b82f6, #eab308)" },
        { name: "Express", level: 72, color: "linear-gradient(to right, #6b7280, #374151)" },
      ]
    },
    {
      title: "Database & Others",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 70, color: "linear-gradient(to right, #22c55e, #15803d)" },
        { name: "SQLite", level: 75, color: "linear-gradient(to right, #3b82f6, #1e40af)" },
        { name: "C++", level: 78, color: "linear-gradient(to right, #2563eb, #6366f1)" },
        { name: "DSA", level: 68, color: "linear-gradient(to right, #ef4444, #f43f5e)" },
        { name: "OOP", level: 80, color: "linear-gradient(to right, #8b5cf6, #a855f7)" },
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span style={{ background: 'linear-gradient(to right, #60a5fa, #6366f1)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Skills</span>
          </h2>
          <div style={{ background: 'linear-gradient(to right, #3b82f6, #6366f1)' }} className="section-divider"></div>
          <p className="section-subtitle">
            Continuously evolving skillset with hands-on experience in modern web technologies
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="skill-category"
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          background: skill.color,
                          animationDelay: `${(categoryIndex * 3 + skillIndex) * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="skill-tags">
                {category.skills.slice(0, 3).map((skill) => (
                  <span 
                    key={skill.name}
                    className="skill-tag"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-cloud">
          <h3>Technologies I Work With</h3>
          <div className="tech-items">
            {['React', 'JavaScript', 'Node.js', 'Python', 'MongoDB', 'CSS3', 'HTML5', 'Bootstrap', 'Express', 'Git'].map((tech, index) => (
              <div 
                key={tech}
                className="tech-item"
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
