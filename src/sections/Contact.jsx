import { useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiGmail } from 'react-icons/si';
import { FaPhone, FaClock } from 'react-icons/fa';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useGSAP(() => {
    gsap.from('.contact-item', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: contactRef });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xldpnqqr', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setMessage('Message sent successfully!');
        e.target.reset();
      } else {
        setMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <section id="contact" ref={contactRef} className='py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white w-full relative overflow-hidden'>
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className='w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10'>
        <div className='text-center mb-8 sm:mb-12 contact-item'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight px-2'>
            Let's Create Something Amazing
          </h2>
          <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto px-4'>
            Ready to turn your vision into reality? Drop me a message and let's discuss your next project.
          </p>
        </div>
        
        <div className='w-full max-w-4xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start'>
            
            {/* Contact Form */}
            <div className='contact-item'>
              <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl'>
                <form onSubmit={sendEmail} className='space-y-4 sm:space-y-6'>
                  <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
                    <div className='group'>
                      <label htmlFor="name" className='block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-blue-400 transition-colors'>Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        id="name" 
                        required
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all text-white placeholder-gray-400 text-sm sm:text-base'
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div className='group'>
                      <label htmlFor="phone" className='block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-blue-400 transition-colors'>Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        id="phone" 
                        className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all text-white placeholder-gray-400 text-sm sm:text-base'
                        placeholder="+91"
                      />
                    </div>
                  </div>
                  
                  <div className='group'>
                    <label htmlFor="email" className='block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-blue-400 transition-colors'>Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      id="email" 
                      required
                      className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all text-white placeholder-gray-400 text-sm sm:text-base'
                      placeholder="example@gmail.com"
                    />
                  </div>
                  
                  <div className='group'>
                    <label htmlFor="description" className='block text-sm font-medium mb-2 text-gray-300 group-focus-within:text-blue-400 transition-colors'>Project Description *</label>
                    <textarea 
                      name="message"
                      id="description" 
                      rows="5"
                      required
                      className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all text-white placeholder-gray-400 resize-none text-sm sm:text-base'
                      placeholder="Tell me about your project, requirements, timeline, and any specific details..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className='w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 transform hover:scale-105'
                  >
                    {isLoading ? (
                      <span className='flex items-center justify-center gap-2'>
                        <div className='w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                        Sending...
                      </span>
                    ) : (
                      'Send Message ✨'
                    )}
                  </button>
                  
                  {message && (
                    <div className={`text-center p-3 sm:p-4 rounded-xl text-sm sm:text-base ${message.includes('success') ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                      {message}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className='contact-item space-y-6 sm:space-y-8'>
              <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl'>
                <h3 className='text-xl sm:text-2xl font-heading font-bold mb-4 sm:mb-6 text-white'>Get In Touch</h3>
                <p className='text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed'>
                  I'm actively seeking new opportunities and ready to contribute to innovative projects. 
                  Let's connect and discuss how I can add value to your team.
                </p>
                
                <div className='space-y-4 sm:space-y-6'>
                  <a href='mailto:ankitpradhanofficial2004@gmail.com' className='flex items-center gap-3 sm:gap-4 group cursor-pointer'>
                    <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform'>
                      <SiGmail className='text-white text-lg sm:text-xl' />
                    </div>
                    <div>
                      <p className='font-semibold text-white text-sm sm:text-base'>Email</p>
                      <p className='text-gray-300 group-hover:text-blue-400 transition-colors text-xs sm:text-sm break-all'>ankitpradhanofficial2004@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href='tel:+917750923239' className='flex items-center gap-3 sm:gap-4 group cursor-pointer'>
                    <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform'>
                      <FaPhone className='text-white text-lg sm:text-xl' />
                    </div>
                    <div>
                      <p className='font-semibold text-white text-sm sm:text-base'>Phone</p>
                      <p className='text-gray-300 group-hover:text-purple-400 transition-colors text-xs sm:text-sm'>+91 7750923239</p>
                    </div>
                  </a>
                  
                  <div className='flex items-center gap-3 sm:gap-4 group cursor-pointer'>
                    <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform'>
                      <FaClock className='text-white text-lg sm:text-xl' />
                    </div>
                    <div>
                      <p className='font-semibold text-white text-sm sm:text-base'>Response Time</p>
                      <p className='text-gray-300 group-hover:text-pink-400 transition-colors text-xs sm:text-sm'>Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact