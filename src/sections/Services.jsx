import React from "react";
import RotatingSkills from "../components/RotatingSkills";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Redux", "Redux Toolkit",
  "Node.js", "Express.js", "Tailwind", "MongoDB", "GitHub", "Git",
  "Vercel", "Firebase", "Postman", "Render", "npm", "Redis"
];

const half = Math.ceil(skills.length / 2);
const leftSkills = skills.slice(0, half);
const rightSkills = skills.slice(half);

const Services = () => {
  return (
    <>
      {/* Title */}
      <div className="bg-black text-white w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 pb-6 sm:pb-8 lg:pb-12">
          <h3 className="text-2xl mt-14 sm:text-3xl md:text-4xl font-mono font-bold text-center text-white uppercase">&lt;Skill/&gt;</h3>
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative w-full z-10">
        <div className="bg-black text-white pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-20 lg:pb-60 w-full">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
            
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 relative">
              {/* Left Skills */}
              <div className="flex-1 flex justify-start">
                <div className="flex flex-col gap-3 lg:gap-4">
                  {leftSkills.map((skill, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 rounded-lg text-sm lg:text-base font-semibold skill-text"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Center RotatingSkills */}
              <div className="flex-1 flex justify-center">
                <RotatingSkills />
              </div>

              {/* Right Skills */}
              <div className="flex-1 flex justify-end">
                <div className="flex flex-col gap-3 lg:gap-4">
                  {rightSkills.map((skill, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 rounded-lg text-sm lg:text-base font-semibold skill-text"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden flex flex-col items-center gap-4 sm:gap-6">
              {/* Animation First */}
              <div className="w-full flex justify-center mb-4">
                <RotatingSkills />
              </div>
              
              {/* Skills Grid Below */}
              <div className="w-full max-w-sm sm:max-w-md mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold skill-text text-center"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Skill Text Animations */}
      <style jsx>{`
        @keyframes floatText {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .skill-text {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
          color: #e5e5e5;
          border: 1px solid #333333;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: floatText 2s ease-in-out infinite, slideInLeft 0.8s ease forwards;
        }
        
        .skill-text::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          transition: left 0.6s ease;
        }
        
        .skill-text:hover::before {
          left: 100%;
        }
        
        .skill-text:hover {
          transform: translateY(-4px) scale(1.02);
          background: linear-gradient(135deg, #262626 0%, #404040 50%, #262626 100%);
          border-color: #555555;
          color: #ffffff;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
        }

        @media (max-width: 640px) {
          .skill-text:hover {
            transform: translateY(-2px) scale(1.01);
          }
        }
      `}</style>
    </>
  );
};

export default Services;