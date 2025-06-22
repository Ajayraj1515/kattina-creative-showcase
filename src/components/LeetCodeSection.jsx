
import React from 'react';
import { ArrowRight } from 'lucide-react';

const LeetCodeSection = () => {
  return (
    <section id="leetcode" className="section">
      <div className="container">
        <div className="leetcode-container">
          <div className="section-header">
            <h2 className="section-title">
              Coding <span style={{ background: 'linear-gradient(to right, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Practice</span>
            </h2>
            <div style={{ background: 'linear-gradient(to right, #8b5cf6, #ec4899)' }} className="section-divider"></div>
          </div>

          <div className="leetcode-card">
            <div className="leetcode-bg"></div>
            
            <div className="leetcode-content">
              <div className="leetcode-main">
                <div className="leetcode-logo">
                  <div className="logo-container">
                    <div className="logo-text">LC</div>
                    <div className="logo-label">LeetCode</div>
                  </div>
                  
                  <div className="logo-decorations">
                    <div className="decoration">✓</div>
                    <div className="decoration">{}</div>
                  </div>
                </div>

                <div className="leetcode-info">
                  <h3>
                    Active DSA Learner 🧠
                  </h3>
                  <p className="leetcode-description">
                    Solving problems consistently to build a strong foundation in 
                    <span className="leetcode-highlight"> Data Structures</span> and 
                    <span className="leetcode-highlight"> Algorithms</span>. 
                    Every problem solved is a step towards becoming a better problem solver.
                  </p>

                  <div className="leetcode-stats">
                    <div className="leetcode-stat">
                      <div className="stat-value green">50+</div>
                      <div className="stat-description">Problems Solved</div>
                    </div>
                    <div className="leetcode-stat">
                      <div className="stat-value blue">Daily</div>
                      <div className="stat-description">Practice</div>
                    </div>
                    <div className="leetcode-stat">
                      <div className="stat-value purple">Growing</div>
                      <div className="stat-description">Stronger</div>
                    </div>
                  </div>

                  <a
                    href="https://leetcode.com/u/Ajay1515/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leetcode-button"
                  >
                    <span>View My LeetCode Profile</span>
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>

              <div className="leetcode-topics">
                <h4>Problem-Solving Focus Areas</h4>
                <div className="topics-grid">
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
                      className="topic-badge"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="leetcode-quote">
                <blockquote>
                  "Every problem is an opportunity to grow. Every solution is a step towards mastery."
                </blockquote>
              </div>
            </div>

            <div className="decorative-elements"></div>
            <div className="decorative-elements"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
