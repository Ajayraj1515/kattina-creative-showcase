
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Passionate Software Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div>
              <h1 className="hero-name">
                <span className="hero-name-gradient">
                  Dhamoji
                </span>
                <span className="hero-title">
                  Ajayraj Kattina
                </span>
              </h1>
              
              <div className="hero-typing">
                <p className="hero-subtitle">
                  {typedText}
                  <span className="typing-cursor">|</span>
                </p>
              </div>
            </div>

            <div className="hero-contact">
              <p className="contact-item">
                📍 Nellore, Andhra Pradesh, 524344
              </p>
              <p className="contact-item">
                📞 +91 9121429127
              </p>
              <p className="contact-item">
                📧 ajayraj3461@gmail.com
              </p>
            </div>

            <div className="hero-buttons">
              <a
                href="#projects"
                className="hero-button"
              >
                View My Work
              </a>
              <a
                href="#chat"
                className="hero-button hero-button-secondary"
              >
                Let's Chat
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="image-rings"></div>
              <div className="image-rings"></div>
              
              <div className="profile-image">
                <img
                  src="/lovable-uploads/4b169dbd-8f07-46af-9409-37474f631f21.png"
                  alt="Dhamoji Ajayraj Kattina"
                />
                
                <div className="profile-overlay"></div>
              </div>

              <div className="tech-badge">
                JS
              </div>
              <div className="tech-badge">
                ⚛️
              </div>
              <div className="tech-badge">
                💻
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <ArrowDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
