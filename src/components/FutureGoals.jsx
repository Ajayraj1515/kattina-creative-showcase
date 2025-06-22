
import React from 'react';

const FutureGoals = () => {
  const goals = [
    {
      icon: "🎯",
      title: "Become a Proficient Full-Stack Developer",
      description: "Master both frontend and backend technologies to build complete web applications from conception to deployment.",
      timeline: "6-12 months",
      progress: 65,
      color: "linear-gradient(to right, #3b82f6, #8b5cf6)"
    },
    {
      icon: "🤖",
      title: "Master Machine Learning and AI",
      description: "Dive deep into ML algorithms, neural networks, and AI frameworks to solve complex real-world problems.",
      timeline: "12-18 months", 
      progress: 25,
      color: "linear-gradient(to right, #22c55e, #3b82f6)"
    },
    {
      icon: "🏗️",
      title: "Build Scalable Real-World Applications",
      description: "Create applications that can handle thousands of users while maintaining performance and reliability.",
      timeline: "Ongoing",
      progress: 45,
      color: "linear-gradient(to right, #8b5cf6, #ec4899)"
    },
    {
      icon: "👨‍🏫",
      title: "Learn from Experts and Mentors",
      description: "Connect with industry professionals and learn best practices through mentorship and collaboration.",
      timeline: "Ongoing",
      progress: 40,
      color: "linear-gradient(to right, #ea580c, #dc2626)"
    },
    {
      icon: "💡",
      title: "Continuously Improve as a Problem-Solver",
      description: "Enhance analytical thinking and problem-solving skills through consistent practice and learning.",
      timeline: "Lifelong",
      progress: 60,
      color: "linear-gradient(to right, #06b6d4, #22c55e)"
    }
  ];

  return (
    <section id="goals" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Future <span style={{ background: 'linear-gradient(to right, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Goals</span>
          </h2>
          <div style={{ background: 'linear-gradient(to right, #8b5cf6, #ec4899)' }} className="section-divider"></div>
          <p className="section-subtitle">
            My roadmap for continuous growth and professional development in the tech industry
          </p>
        </div>

        <div className="goals-list">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className="goal-item"
            >
              <div className="goal-content">
                <div className="goal-info">
                  <div className="goal-icon">
                    {goal.icon}
                  </div>
                  <div>
                    <div className="goal-details">
                      <h3>{goal.title}</h3>
                      <span className="goal-timeline">
                        {goal.timeline}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="goal-description">
                  <p>{goal.description}</p>
                </div>

                <div className="goal-progress">
                  <div className="progress-number">{goal.progress}%</div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${goal.progress}%`,
                        background: goal.color
                      }}
                    ></div>
                  </div>
                  <div className="progress-label">Progress</div>
                </div>
              </div>

              <div className="goal-hover-bg" style={{ background: goal.color }}></div>
            </div>
          ))}
        </div>

        <div className="goals-quote">
          <div className="quote-card">
            <blockquote>
              "The journey of a thousand miles begins with a single step, and every step forward is progress worth celebrating."
            </blockquote>
            <div className="quote-attribution">- My Development Philosophy</div>
            
            <div className="quote-badges">
              <div className="quote-badge">
                <span className="growth">🚀 Growth Mindset</span>
              </div>
              <div className="quote-badge">
                <span className="learning">💪 Persistent Learning</span>
              </div>
              <div className="quote-badge">
                <span className="goal">🎯 Goal-Oriented</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureGoals;
