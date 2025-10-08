import { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef(null);
  const splitInstance = useRef(null);

  useGSAP(() => {
    const initSplit = () => {
      // If already split, revert before splitting again
      if (splitInstance.current) {
        splitInstance.current.revert();
      }

      // Wait for fonts to finish loading (fixes width on first load)
      document.fonts.ready.then(() => {
        splitInstance.current = SplitText.create(".about-text", {
          type: "lines, chars",
        });

        gsap.set(splitInstance.current.chars, { opacity: 0.25, y: 10 });

        gsap.to(splitInstance.current.chars, {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1,
          },
        });
      });
    };

    // Initial split
    initSplit();

    // 🧠 Re-split after resize ends (with debounce)
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initSplit();
      }, 300);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (splitInstance.current) splitInstance.current.revert();
    };
  }, { scope: aboutRef });

  return (
    <>
      <section
        id="about"
        ref={aboutRef}
        className="w-full min-h-[calc(100vh-100px)] bg-white rounded-tl-[30px] rounded-tr-[30px] sm:rounded-tl-[60px] sm:rounded-tr-[60px] relative z-20 mb-8 lg:mb-0"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 pb-16 sm:pb-20 lg:pb-24 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-16">
          
          {/* 🖼️ Photo */}
          <div className="flex-shrink-0 order-1 lg:order-1">
            <img
              src="/assets/me.png"
              alt="Ankit Pradhan - Professional Photo"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full object-cover border-2 sm:border-4 border-gray-200 shadow-lg"
            />
          </div>

          {/* 📝 Text */}
          <div className="about-text flex-1 w-full font-heading text-black text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[1.25] text-center lg:text-left order-2 lg:order-2 max-sm:px-0 max-sm:mx-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800">
              About Me
            </h2>
            <p className="leading-relaxed text-gray-800 dancing-script-text">
              My name is <strong>Ankit Pradhan</strong>, a passionate developer driven by creativity, precision, and purpose.
              For me, a project isn’t just about building—it’s about crafting meaningful digital experiences that feel effortless,
              look stunning, and truly connect with users. I love turning ideas into clean, functional, and scalable solutions that
              merge aesthetic design with powerful code. Every line I write is focused on impact, performance, and innovation.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .dancing-script-text {
          font-family: 'Dancing Script', cursive !important;
          font-size: 1.3em;
          font-weight: 500;
          line-height: 1.6;
          width: 100% !important;
          max-width: none !important;
          text-align: center;
          display: block;
        }
        @media (min-width: 1024px) {
          .dancing-script-text {
            text-align: justify;
          }
        }
      `}</style>
    </>
  );
};

export default About;
