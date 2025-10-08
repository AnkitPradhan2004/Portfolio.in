import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiVercel,
  SiFirebase,
  SiPostman,
  SiRender,
  SiExpress,
  SiRedis,
} from "react-icons/si";
import { DiNpm, DiGit } from "react-icons/di";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" /> },
  { icon: <FaCss3Alt className="text-blue-500" /> },
  { icon: <FaJs className="text-yellow-400" /> },
  { icon: <FaReact className="text-cyan-400" /> },
  { icon: <SiRedux className="text-purple-500" /> },
  { icon: <FaNodeJs className="text-green-500" /> },
  { icon: <SiExpress className="text-gray-600" /> },
  { icon: <SiTailwindcss className="text-sky-400" /> },
  { icon: <SiMongodb className="text-green-600" /> },
  { icon: <FaGithub className="text-gray-800" /> },
  { icon: <DiGit className="text-red-500" /> },
  { icon: <SiVercel className="text-black" /> },
  { icon: <SiFirebase className="text-yellow-500" /> },
  { icon: <SiPostman className="text-orange-400" /> },
  { icon: <SiRender className="text-purple-400" /> },
  { icon: <DiNpm className="text-red-600" /> },
  { icon: <SiRedis className="text-red-500" /> },
];

const RotatingSkills = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-60 md:h-80 lg:h-[500px] overflow-hidden">
      {/* Rotating Container */}
      <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] animate-spin-slow">
        {skills.map((skill, i) => {
          const angle = (360 / skills.length) * i;
          const radius = windowWidth >= 1024 ? 180 : windowWidth >= 768 ? 144 : 100;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <div
              key={i}
              className="absolute w-8 h-8 lg:w-14 lg:h-14 flex items-center justify-center text-lg lg:text-3xl transition-all duration-300 hover:scale-125 hover:shadow-lg rounded-full bg-white/10 backdrop-blur-sm"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              {skill.icon}
            </div>
          );
        })}
      </div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-heading font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-bounce">
            Tech
          </h3>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-heading font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Skills
          </h3>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RotatingSkills;