
import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Nxt Watch",
      subtitle: "YouTube Clone with Authentication",
      description: "Built a comprehensive YouTube clone with full authentication, JWT tokens, and theme switching. Features include login, trending videos, gaming section, saved videos, and search functionality.",
      longDescription: "A complete YouTube clone application that demonstrates advanced React.js skills with JWT authentication, protected routes, and dynamic content management. Users can explore trending videos, gaming content, save videos for later, and search through the entire catalog while maintaining their session.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
      liveUrl: "https://mynxttube.ccbp.tech",
      tech: ["React.js", "JavaScript", "JWT", "REST API", "CSS", "Bootstrap"],
      features: [
        "User Authentication with JWT",
        "Protected Routes",
        "Video Categories (Trending, Gaming)",
        "Search Functionality",
        "Dark/Light Theme Toggle",
        "Saved Videos Feature"
      ],
      color: "linear-gradient(to right, #ef4444, #f43f5e)"
    },
    {
      id: 2,
      title: "Nxt Trendz",
      subtitle: "E-Commerce Platform",
      description: "Modern e-commerce experience inspired by Amazon and Flipkart. Features secure login, product catalog, detailed product views, and cart functionality.",
      longDescription: "A sophisticated e-commerce platform that showcases full-stack development capabilities. Built with React Router for seamless navigation, secure JWT authentication, and comprehensive product management system.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      liveUrl: "https://nxxttrendzapp.ccbp.tech",
      tech: ["React.js", "React Router", "JWT", "REST API", "Bootstrap"],
      features: [
        "Secure User Authentication",
        "Product Catalog",
        "Product Detail Pages", 
        "Shopping Cart",
        "Responsive Design",
        "API Integration"
      ],
      color: "linear-gradient(to right, #3b82f6, #06b6d4)"
    },
    {
      id: 3,
      title: "Wikipedia Search App",
      subtitle: "Clean Wikipedia Interface",
      description: "Streamlined Wikipedia search application with intuitive design. Users can search and access curated results with one-click navigation to detailed articles.",
      longDescription: "A beautifully designed Wikipedia search interface that simplifies information discovery. Features responsive design, asynchronous API calls, and elegant result presentation with direct links to full articles.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
      liveUrl: "https://dhamojiwiki.ccbp.tech",
      tech: ["HTML", "CSS", "JavaScript", "REST API", "Bootstrap"],
      features: [
        "Real-time Search",
        "Responsive Design",
        "Clean UI/UX",
        "API Integration",
        "One-click Article Access",
        "Modern Styling"
      ],
      color: "linear-gradient(to right, #22c55e, #10b981)"
    },
    {
      id: 4,
      title: "InnoAccess",
      subtitle: "Creative Login System",
      description: "Beautifully crafted full-stack login and signup application with innovative design. Features smooth animations and elegant UI that showcases creativity and technical skill.",
      longDescription: "A stunning full-stack authentication system that demonstrates both frontend creativity and backend integration. The application features a welcoming landing page, dynamic signup flow, modern login interface, and custom forgot password functionality.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
      liveUrl: "https://logindhamoji.netlify.app/",
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Bootstrap"],
      features: [
        "Animated Landing Page",
        "Dynamic Signup Flow",
        "Modern Login Interface",
        "Forgot Password Feature",
        "Full-stack Integration",
        "Creative UI Design"
      ],
      color: "linear-gradient(to right, #6366f1, #8b5cf6)"
    },
    {
      id: 5,
      title: "Coming Soon...",
      subtitle: "Next Innovation in Progress",
      description: "I'm continuously working on new projects and won't stop creating! This space is reserved for my next breakthrough application that's currently in development.",
      longDescription: "As a passionate developer, I believe in continuous innovation and learning. This placeholder represents my commitment to never stop building, experimenting, and pushing the boundaries of what's possible with technology.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800",
      liveUrl: "#",
      tech: ["React.js", "Innovation", "Creativity", "Future Tech"],
      features: [
        "Cutting-edge Technology",
        "User-Centric Design",
        "Performance Optimized",
        "Scalable Architecture",
        "Modern UI/UX",
        "Best Practices"
      ],
      color: "linear-gradient(to right, #f59e0b, #ea580c)",
      isComingSoon: true
    }
  ];

  const ProjectModal = ({ project, onClose }) => (
    <div className="project-modal">
      <div className="modal-content">
        <button
          onClick={onClose}
          className="modal-close"
        >
          <ArrowLeft size={24} />
        </button>
        
        <div className="modal-header" style={{ background: project.color }}>
          <img 
            src={project.image} 
            alt={project.title}
          />
          <div className="modal-title">
            {project.title}
            {project.isComingSoon && <Clock style={{ marginLeft: '16px' }} size={32} />}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-grid">
            <div className="modal-section">
              <h3>About This Project</h3>
              <p className="modal-text">{project.longDescription}</p>
              
              {!project.isComingSoon && (
                <div className="modal-buttons">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-button"
                  >
                    View Live <ArrowRight size={16} />
                  </a>
                </div>
              )}
              
              {project.isComingSoon && (
                <div className="coming-soon-notice">
                  <p className="coming-soon-text">🚀 Exciting things are coming! Stay tuned for updates.</p>
                </div>
              )}
            </div>

            <div className="modal-section">
              <h3>Key Features</h3>
              <div className="features-list">
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <h3>Technologies Used</h3>
              <div className="tech-badges">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge-modal">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {!project.isComingSoon && (
            <div className="feedback-section">
              <h3>💡 Improvement Suggestions</h3>
              <textarea
                placeholder="Share your thoughts on how this project could be improved..."
                className="feedback-textarea"
                rows={3}
              />
              <button className="feedback-button">
                Submit Feedback
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span style={{ background: 'linear-gradient(to right, #fb923c, #dc2626)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span>
          </h2>
          <div style={{ background: 'linear-gradient(to right, #ea580c, #dc2626)' }} className="section-divider"></div>
          <p className="section-subtitle">
            Showcasing real-world applications built with modern technologies and best practices
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`project-card ${project.isComingSoon ? 'coming-soon' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                />
                <div className="project-overlay" style={{ background: project.color }}></div>
                <div className="project-badge">
                  {project.isComingSoon ? (
                    <>
                      <Clock size={14} />
                      Coming Soon
                    </>
                  ) : (
                    project.tech[0]
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-badge-small">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tech-badge-small">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="project-footer">
                  {!project.isComingSoon ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Live <ArrowRight size={16} />
                    </a>
                  ) : (
                    <div className="project-link">
                      <Clock size={16} />
                      In Development
                    </div>
                  )}
                  <button className="project-explore">
                    Click to explore →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
