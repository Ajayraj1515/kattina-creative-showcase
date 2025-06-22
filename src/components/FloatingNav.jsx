
import React, { useState, useEffect } from 'react';
import { User, Settings, Book, BookOpen, MessageSquare, Github, Linkedin } from 'lucide-react';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { id: 'hero', icon: User, label: 'About Me' },
    { id: 'skills', icon: Settings, label: 'Skills' },
    { id: 'projects', icon: Book, label: 'Projects' },
    { id: 'timeline', icon: BookOpen, label: 'Journey' },
    { id: 'chat', icon: MessageSquare, label: 'Chat' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section.id);
        }
      });

      setIsVisible(window.scrollY < window.innerHeight * 4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`floating-nav ${!isVisible ? 'hidden' : ''}`}>
      <nav className="nav-container">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              title={item.label}
            >
              <Icon size={18} />
              <span className="nav-tooltip">
                {item.label}
              </span>
            </button>
          );
        })}
        
        <div className="social-divider">
          <a
            href="https://github.com/Ajayraj1515"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhamoji-ajayraj-kattina/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default FloatingNav;
