import React, { useRef, useState } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // GSAP animation
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.6
    });
  });

  // Resume click handler
  const handleResumeClick = (e) => {
    e.preventDefault();
    // Open in new tab
    window.open("/AnkitKumarPradhan.pdf", "_blank");
    // Trigger download
    const link = document.createElement("a");
    link.href = "/AnkitKumarPradhan.pdf";
    link.download = "AnkitKumarPradhan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Close menu if open (mobile/tablet)
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="
          fixed top-0 z-20 w-full 
          backdrop-blur-md 
          bg-transparent 
          mix-blend-difference 
          shadow-sm 
          h-[60px] sm:h-[65px] md:h-[60px] lg:h-[55px]
          flex items-center
        "
      >
        <div className="main-container w-full flex justify-between items-center">
          {/* Logo */}
          <Link to='/'>
            <p className="text-xl sm:text-2xl font-bold">AP</p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-6 xl:gap-8">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-white hover:text-blue-400 transition-colors text-sm lg:text-base cursor-pointer">Home</a>
            <a href="#about" className="text-white hover:text-blue-400 transition-colors text-sm lg:text-base">About Me</a>
            <a href="#projects" className="text-white hover:text-blue-400 transition-colors text-sm lg:text-base">Projects</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors text-sm lg:text-base">Contact</a>
            <button onClick={handleResumeClick} className="text-white hover:text-blue-400 transition-colors text-sm lg:text-base cursor-pointer bg-transparent border-none p-0">Resume</button>
          </div>

          {/* Menu Button - Mobile & Tablet */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="menubar flex flex-col gap-1.5 cursor-pointer xl:hidden"
          >
            <span
              className={`inline-block w-8 sm:w-10 h-0.5 bg-current transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            ></span>
            <span
              className={`inline-block w-8 sm:w-10 h-0.5 bg-current transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            ></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed z-40 inset-0 transition-opacity duration-300 ease-in-out xl:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dimmed Background */}
        <div 
          className="absolute inset-0 bg-black/50 md:hidden"
          onClick={() => setMenuOpen(false)}
        />

        {/* Fullscreen Menu for Tablet (md to xl) */}
        <div
          className={`hidden md:flex xl:hidden fixed inset-0 bg-black text-white flex-col items-center justify-center gap-6 sm:gap-8 transition-transform duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} className="menu-link cursor-pointer">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="menu-link">About Me</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="menu-link">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="menu-link">Contact</a>
          <button onClick={handleResumeClick} className="menu-link cursor-pointer bg-transparent border-none p-0">Resume</button>
        </div>

        {/* Mobile Side Menu - Left 50% */}
        <div
          className={`md:hidden fixed left-0 top-0 w-1/2 h-full bg-black text-white flex flex-col items-center justify-center gap-6 transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} className="mobile-menu-link cursor-pointer">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="mobile-menu-link">About Me</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="mobile-menu-link">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mobile-menu-link">Contact</a>
          <button onClick={handleResumeClick} className="mobile-menu-link cursor-pointer bg-transparent border-none p-0">Resume</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
