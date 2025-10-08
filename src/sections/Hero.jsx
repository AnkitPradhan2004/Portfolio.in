import React, { useRef } from 'react'
import GradientButton from '../components/GradientButton'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const Hero = () => {

  const heroRef = useRef(null);

  useGSAP(() => {



    // Animate h1
    SplitText.create("h1", {
      type: "lines, words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        gsap.from(self.words, {
          y: window.innerWidth < 640 ? 60 : window.innerWidth < 768 ? 50 : 100,
          opacity: 0,
          delay: 0.2,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    });

    // Animate h2
    SplitText.create("h2", {
      type: "lines, words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        gsap.from(self.words, {
          y: window.innerWidth < 640 ? 60 : window.innerWidth < 768 ? 50 : 100,
          opacity: 0,
          stagger: 0.15,
          delay: 0.4,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    });

    // Animate button
    gsap.from(".gradient-btn", {
      opacity: 0,
      y: window.innerWidth < 640 ? 40 : window.innerWidth < 768 ? 30 : 40,
      duration: 0.6,
      ease: "power2.out",
      delay: 1.0
    });

    // Animate star shape
    gsap.from(".star svg", {
      scale: 0,
      rotate: 180,
      opacity: 0,
      transformOrigin: "center center",
      duration: 1.3,
      ease: "back.out(1.7)",
      onComplete: () => {
        // Start continuous rotation after the initial animation
        gsap.to(".star svg", {
          rotate: "+=360", // rotate infinitely
          transformOrigin: "center",
          duration: 20,    // adjust speed
          ease: "linear",
          repeat: -1,
        });
      },
    });

  }, { scope: heroRef });

  return (
    <>
      <section id="home" ref={heroRef} className='relative overflow-hidden z-0'>

        {/* Text container */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 h-screen flex flex-col justify-center items-start py-4 sm:py-8 lg:py-12">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[3.2vw] uppercase font-heading font-semibold leading-tight text-white whitespace-nowrap">Hello , I am Ankit</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[8vw] font-heading font-black leading-[0.9] tracking-tight mt-2 sm:mt-3 mb-4 sm:mb-6 text-white">
            Web Developer <br/> & Designer
          </h2>
          <GradientButton text="Resume" link="/AnkitKumarPradhan.pdf" className="gradient-btn" target="_blank" download="AnkitKumarPradhan.pdf" />
        </div>
        {/* shape */}
        <div className="star absolute -z-1 top-1/4 sm:top-1/3 md:top-60 lg:top-32 right-[-15%] sm:right-[-15%] md:right-[-12%] lg:right-[-8%] opacity-80 sm:opacity-70 md:opacity-80 lg:opacity-90">
          <svg className='h-[25vh] sm:h-[30vh] md:h-[45vh] lg:h-[80vh] w-auto' viewBox="0 0 653 631" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M290.361 1.55611L333.686 284.91L333.88 286.179L334.595 285.114L496.712 43.7172L530.894 66.1542L354.53 298.39L353.719 299.458L355.031 299.182L644.761 238.164L651.694 276.116L359.086 321.398L357.759 321.603L358.897 322.315L605.849 476.828L581.885 510.336L344.939 341.783L343.894 341.039L344.16 342.294L403.733 622.683L363.139 630.092L319.819 346.737L319.626 345.469L318.911 346.534L156.783 587.928L122.522 565.048L298.964 333.261L299.777 332.192L298.463 332.469L8.73045 393.474L1.564 354.212L294.405 310.247L295.74 310.046L294.596 309.329L47.5646 154.375L71.6092 121.305L308.567 289.864L309.612 290.609L309.345 289.353L249.767 8.96559L290.361 1.55611Z" stroke="url(#paint0_linear_1074_2)"/>
            <defs>
            <linearGradient id="paint0_linear_1074_2" x1="4.77595" y1="374.593" x2="648.724" y2="257.056" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4D6D"/>
            <stop offset="0.25" stopColor="#BD3EB2"/>
            <stop offset="0.5" stopColor="#7B2FF7"/>
            <stop offset="0.75" stopColor="#2F86F7"/>
            <stop offset="1" stopColor="#2FF7ED"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
        
      </section>
    </>
  )
}

export default Hero