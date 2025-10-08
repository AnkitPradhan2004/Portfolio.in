import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Projects from '../sections/Projects'
import GitHubStats from '../sections/GitHubStats'
import Contact from '../sections/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <GitHubStats />
      <Contact />
    </>
  )
}

export default Home