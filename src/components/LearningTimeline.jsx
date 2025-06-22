
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
      color: "linear-gradient(135deg, #3b82f6, #8b5cf6)"
    },
    {
      year: "2017-2019",
      title: "Intermediate (MPC)",
      institution: "Narayana Jr College, Nellore",
      achievement: "9.33 CGPA",
      description: "Specialized in Mathematics, Physics, and Chemistry. This analytical foundation helped in understanding logical programming concepts.",
      icon: "📚",
      color: "linear-gradient(135deg, #22c55e, #3b82f6)"
    },
    {
      year: "2020-2024",
      title: "B.Tech Mechanical Engineering",
      institution: "Deenbandhu Chhotu Ram University, Murthal",
      achievement: "6.98 CGPA",
      description: "During my mechanical engineering studies, I discovered my passion for technology and software development, leading to a career pivot.",
      icon: "⚙️",
      color: "linear-gradient(135deg, #ea580c, #dc2626)"
    },
    {
      year: "Oct 2023 - Present",
      title: "Full-Stack Development Certification",
      institution: "Nxtwave Disruptive Technologies", 
      achievement: "Industry Ready Certification",
      description: "Intensive hands-on training in modern web technologies including React.js, Node.js, databases, and deployment. Built multiple real-world projects.",
      icon: "💻",
      color: "linear-gradient(135deg, #8b5cf6, #ec4899)"
    },
    {
      year: "2024 - Present",
      title: "Professional Development",
      institution: "Self-Directed Learning",
      achievement: "Multiple Projects & Continuous Learning",
      description: "Working on full-stack projects, practicing data structures & algorithms on LeetCode, and exploring AI/ML technologies for future growth.",
      icon: "🚀",
      color: "linear-gradient(135deg, #06b6d4, #22c55e)"
    },
    {
      year: "Future",
      title: "Advanced Specialization",
      institution: "Continuous Learning Path",
      achievement: "AI/ML & Full-Stack Mastery",
      description: "Planning to deepen expertise in machine learning, AI, and advanced full-stack development to build innovative solutions.",
      icon: "🌟",
      color: "linear-gradient(135deg, #7c3aed, #2563eb)"
    }
  ];

  return (
    <section id="timeline" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Learning <span style={{ background: 'linear-gradient(to right, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Journey</span>
          </h2>
          <div style={{ background: 'linear-gradient(to right, #8b5cf6, #ec4899)' }} className="section-divider"></div>
          <p className="section-subtitle">
            My educational path and transformation from mechanical engineering to software development
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="timeline-events">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className="timeline-event"
              >
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <div className="timeline-icon">
                        {event.icon}
                      </div>
                      <div className="timeline-meta">
                        <div className="timeline-year">{event.year}</div>
                        <h3 className="timeline-title">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    <div className="timeline-details">
                      <div className="timeline-institution">{event.institution}</div>
                      <div className="timeline-achievement">
                        <span className="achievement-text">🏆 {event.achievement}</span>
                      </div>
                      <p className="timeline-description">{event.description}</p>
                    </div>

                    <div className="timeline-hover-bg" style={{ background: event.color }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-stats">
          <div className="timeline-stat">
            <div className="timeline-stat-number stat-purple">8+</div>
            <div className="timeline-stat-label">Years of Education</div>
          </div>
          <div className="timeline-stat">
            <div className="timeline-stat-number stat-blue">1+</div>
            <div className="timeline-stat-label">Years in Tech</div>
          </div>
          <div className="timeline-stat">
            <div className="timeline-stat-number stat-green">4+</div>
            <div className="timeline-stat-label">Projects Built</div>
          </div>
          <div className="timeline-stat">
            <div className="timeline-stat-number stat-pink">∞</div>
            <div className="timeline-stat-label">Learning Mindset</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningTimeline;
