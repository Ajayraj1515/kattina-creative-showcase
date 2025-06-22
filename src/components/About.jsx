
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="section-title-gradient">Me</span>
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              🚀 I'm a <span className="about-highlight">passionate software developer</span> who 
              discovered the magic of coding after studying mechanical engineering. My journey began with curiosity 
              and evolved into a deep love for solving real-world problems through technology.
            </p>
            
            <p>
              💡 What started as an exploration has become my <span className="about-highlight">calling</span>. 
              I'm highly skilled in <span className="about-highlight">React.js</span> and <span className="about-highlight">JavaScript</span>, 
              and I'm continuously expanding my expertise in full-stack development and machine learning.
            </p>
            
            <p>
              🎯 I believe in the power of <span className="about-highlight">continuous learning</span> 
              and problem-solving. Every line of code I write is a step towards building something meaningful 
              that can make a difference.
            </p>
          </div>

          <div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">4+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Learning</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">∞</div>
                <div className="stat-label">Passion Level</div>
              </div>
            </div>

            <div className="about-quote">
              <blockquote className="quote-text">
                "From gears to code, from mechanical to digital - 
                every challenge is an opportunity to innovate."
              </blockquote>
              <div className="quote-author">- Ajayraj Kattina</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
