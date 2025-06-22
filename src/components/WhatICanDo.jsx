
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
    <section id="capabilities" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            What I Can <span style={{ background: 'linear-gradient(to right, #a855f7, #d946ef)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Do</span>
          </h2>
          <div style={{ background: 'linear-gradient(to right, #8b5cf6, #a855f7)' }} className="section-divider"></div>
          <p className="section-subtitle">
            My core strengths and capabilities that I bring to every project
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="capability-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="capability-icon">
                {capability.icon}
              </div>
              <h3 className="capability-title">
                {capability.title}
              </h3>
              <p className="capability-description">
                {capability.description}
              </p>

              <div className="capability-skills">
                {capability.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="capability-skill"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              <div className="capability-hover-bg"></div>
            </div>
          ))}
        </div>

        <div className="capabilities-cta">
          <div className="cta-card">
            <h3 className="cta-title">Ready to Build Something Amazing?</h3>
            <p className="cta-text">
              Let's collaborate and turn your ideas into reality with clean, efficient, and scalable solutions.
            </p>
            <a
              href="#chat"
              className="cta-button"
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
