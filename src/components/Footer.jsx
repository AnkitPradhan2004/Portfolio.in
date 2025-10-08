import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      {/* Divider */}
      <div className='max-w-[1500px] m-auto h-[1px] bg-white opacity-10'></div>
      
      {/* Footer Top */}
      <footer className="main-container grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
      
        <div>
          <h5 className='font-medium mb-5'>Services</h5>
          <ul className='flex flex-col gap-2 text-base lg:text-lg'>
            <li><a href="">Web Design</a></li>
            <li><a href="">UI / UX</a></li>
            <li><a href="">Web Development</a></li>
            <li><a href="">Branding</a></li>
          </ul>
        </div>
        <div>
          <h5 className='font-medium mb-5'>Accessibility</h5>
          <ul className='flex flex-col gap-2 text-base lg:text-lg'>
            <li>Mon - Fri: 9:00 - 5:00</li>
            <li>24/7 WhatsApp & Email</li>
          </ul>
        </div>
        <div>
          <h5 className='font-medium mb-5'>Contact</h5>
          <ul className='flex flex-col gap-2 text-base lg:text-lg'>
            <li>ankitpradhanofficial2004@gmail.com</li>
            <li>+91 7750923239</li>
          </ul>
        </div>
      </footer>

      {/* Divider */}
      <div className='max-w-[1500px] m-auto h-[1px] bg-white opacity-10'></div>

      {/* Footer Bottom */}
      <div className='main-container grid md:grid-cols-2 gap-3 py-6 lg:py-8 max-md:text-center'>
        <div className='text-base lg:text-lg'>© 2025 Ankit Pradhan | All rights reserved</div>
        <div className='flex gap-3 justify-center md:justify-end'>
          <a href="https://www.linkedin.com/in/2004ankitpradhan/" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform'>
            <FaLinkedin className='w-7 h-7 text-white hover:text-blue-400 transition-colors' />
          </a>
          <a href="https://github.com/AnkitPradhan2004" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform'>
            <FaGithub className='w-7 h-7 text-white hover:text-gray-400 transition-colors' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer