
import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

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
      color: "from-red-500 to-pink-500"
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
      color: "from-blue-500 to-purple-500"
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
      color: "from-green-500 to-blue-500"
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
      color: "from-purple-500 to-pink-500"
    }
  ];

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white z-10 interactive"
          >
            <ArrowLeft size={24} />
          </button>
          
          <div className={`h-64 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white text-center">{project.title}</h2>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">About This Project</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.longDescription}</p>
                
                <div className="flex gap-4 mb-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    View Live <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-center gap-2">
                      <span className="text-purple-400">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">💡 Improvement Suggestions</h3>
              <textarea
                placeholder="Share your thoughts on how this project could be improved..."
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                rows={3}
              />
              <button className="mt-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:scale-105 transition-all duration-300 interactive">
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies and best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 transform hover:scale-105 transition-all duration-500 interactive cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                    {project.tech[0]}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-purple-300 text-sm mb-3">{project.subtitle}</p>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-purple-300 text-xs px-2 py-1">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive text-purple-400 hover:text-purple-300 flex items-center gap-2 font-semibold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Live <ArrowRight size={16} />
                  </a>
                  <button className="text-gray-400 hover:text-white transition-colors duration-300">
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
