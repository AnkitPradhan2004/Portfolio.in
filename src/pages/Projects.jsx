import React from 'react'
import projects from '../components/projectsData'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <>
    <div className='bg-white text-black'>
      <div className='main-container py-28'>
        <h2 className='text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight text-center mb-16'>Projects</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map(({ id, name, image, description, techStack, github, demo }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* Project Image */}
              <div className="group overflow-hidden h-48">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2" style={{color: 'var(--color-primary)'}}>{name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:opacity-90 transition-opacity"
                    style={{backgroundColor: 'var(--color-primary)'}}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <CTA />
    </>
  )
}

export default Projects