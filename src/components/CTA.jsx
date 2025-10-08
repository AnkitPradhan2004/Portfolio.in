import React, { useRef } from 'react'
import GradientButton from './GradientButton'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef(null);

  useGSAP(() => {
    const element = ctaRef.current;

    // Remove any existing triggers before new setup (avoids duplicate triggers)
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Responsive trigger positions
    const startPoint = window.innerWidth < 768 ? "top 85%" : "center bottom";
    const endPoint = window.innerWidth < 768 ? "top 60%" : "60% bottom";

    // Animate background colour on scroll
    gsap.fromTo(
      element,
      { backgroundColor: "#fff" },
      {
        backgroundColor: "#000",
        scrollTrigger: {
          trigger: element,
          start: startPoint,
          end: endPoint,
          scrub: true,
          markers: false,
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      ref={ctaRef}
      className="transition-colors duration-300 mix-blend-difference flex items-center justify-center py-20 lg:py-28"
    >
      <div
        className="
          main-container 
          flex flex-col justify-center items-center gap-8 
          text-center
          px-6
          mt-8 sm:mt-12 md:mt-16
        "
      >
        <h4
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-5xl 
            leading-[1.25] 
            max-w-5xl 
            text-white 
            font-semibold 
            mix-blend-difference
          "
        >
          Freelance projects, collaborations and full-time opportunities. <br />
          Let's get acquainted
        </h4>

        <GradientButton text="Book a Call" link="/" />
      </div>
    </div>
  );
};

export default CTA;
