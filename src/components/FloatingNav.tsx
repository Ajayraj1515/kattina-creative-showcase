
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
        const element = section as HTMLElement;
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(element.id);
        }
      });

      setIsVisible(window.scrollY < window.innerHeight * 4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-500 hidden lg:block ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <nav className="flex flex-col space-y-3 bg-white/10 backdrop-blur-xl p-3 rounded-2xl border border-cyan-500/30">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative p-3 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-cyan-500 text-white scale-110'
                  : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-105'
              }`}
              title={item.label}
            >
              <Icon size={18} />
              <span className="absolute left-full ml-4 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
        
        {/* Social Links */}
        <div className="border-t border-white/20 pt-3 mt-3">
          <a
            href="https://github.com/Ajayraj1515"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 text-white/70 hover:text-white hover:bg-white/10 hover:scale-105 rounded-xl transition-all duration-300"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhamoji-ajayraj-kattina/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 text-white/70 hover:text-white hover:bg-white/10 hover:scale-105 rounded-xl transition-all duration-300 mt-2"
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
