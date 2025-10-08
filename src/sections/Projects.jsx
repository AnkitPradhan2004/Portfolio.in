import React, { useState } from 'react'
import projects from '../components/projectsData'

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardTouch = (id) => {
    setHoveredCard(hoveredCard === id ? null : id);
  };

  return (
    <section id="projects" className='bg-white text-black py-16 sm:py-20 lg:py-28 w-full'>
      <div className='w-full px-4 sm:px-6 md:px-8 lg:px-12'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-black leading-[0.8] tracking-wider text-center mb-12 sm:mb-16 md:mb-20 lg:mb-20 bg-clip-text text-transparent uppercase transform hover:scale-105 transition-transform duration-500' style={{backgroundImage: 'linear-gradient(to top, #020024, #01010D, #7D7C7C)', textShadow: '0 0 30px rgba(125, 124, 124, 0.3)'}}>
          &lt; PROJECTS /&gt;
        </h2>
        <div className='grid md:grid-cols-2 gap-10 max-w-7xl mx-auto relative'>
          {projects.map(({ id, name, image, description, techStack, github, demo, themeColor, hoverColor }) => {
            return (
            <div
              key={id}
              className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl hover:-translate-y-6 hover:scale-105 transition-all duration-700 border border-gray-100 group backdrop-blur-sm ${hoveredCard === id ? 'shadow-3xl -translate-y-6 scale-105 [&_.theme-bg]:bg-opacity-20 [&_.theme-text]:text-gray-800' : ''}`}
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)'
              }}
              onClick={() => handleCardTouch(id)}
              onTouchStart={() => handleCardTouch(id)}
            >
              <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 -z-10 blur-sm ${hoveredCard === id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} style={{backgroundColor: themeColor}}></div>
              
              <div className="overflow-hidden h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />

              </div>
              
              <div className="p-6 relative">
                <h3 className={`text-xl font-heading font-bold mb-3 transition-all duration-500 group-hover:text-gray-800 ${hoveredCard === id ? 'text-gray-800' : ''}`} style={{color: hoveredCard === id ? '#1f2937' : themeColor}}>{name}</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{description}</p>
                
                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1.5 text-xs rounded-full font-semibold hover:scale-110 hover:shadow-md transition-all duration-300 theme-bg theme-text`}
                        style={{
                          backgroundColor: hoveredCard === id ? `${themeColor}30` : `${themeColor}15`,
                          color: themeColor,
                          borderColor: `${themeColor}30`
                        }}
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-gray-800 to-black text-white py-3 px-4 rounded-xl text-center text-sm font-semibold hover:from-gray-700 hover:to-gray-900 hover:scale-105 hover:shadow-xl transition-all duration-400 transform hover:-translate-y-1"
                  >
                    GitHub
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-white py-3 px-4 rounded-xl text-center text-sm font-semibold hover:scale-105 hover:shadow-xl transition-all duration-400 transform hover:-translate-y-1"
                    style={{backgroundColor: themeColor, opacity: themeColor === '#AFEEEE' || themeColor === '#FFD700' ? 0.9 : 1, color: themeColor === '#AFEEEE' || themeColor === '#FFD700' ? '#000' : '#fff'}}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            );
          })}
          
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
    </section>
  )
}

export default Projects