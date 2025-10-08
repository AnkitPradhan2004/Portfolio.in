import React from 'react'
import { FaGithub } from 'react-icons/fa'

const GitHubStats = () => {
  const username = 'AnkitPradhan2004'
  
  return (
    <section className='bg-gray-900 text-white py-16 sm:py-20 lg:py-28 w-full'>
      <div className='w-full px-4 sm:px-6 md:px-8 lg:px-12'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-black leading-[0.8] tracking-wider text-center mb-12 sm:mb-16 text-white uppercase transform hover:scale-105 transition-transform duration-500'>
          &lt; GitHub Stats /&gt;
        </h2>
        
        <div className='max-w-6xl mx-auto grid gap-8 md:grid-cols-2'>
          {/* GitHub Contribution Graph */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl'>
            <img 
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-dark&hide_border=true&bg_color=0d1117&color=58a6ff&line=58a6ff&point=c9d1d9&area=true&area_color=58a6ff`}
              alt="GitHub Activity Graph"
              className='w-full h-auto rounded-lg'
            />
          </div>
          
          {/* Top Languages */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl'>
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9`}
              alt="Top Languages"
              className='w-full h-auto rounded-lg'
            />
          </div>
          
          {/* GitHub Streak */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl md:col-span-2'>
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true&background=0d1117&stroke=58a6ff&ring=58a6ff&fire=58a6ff&currStreakLabel=c9d1d9&sideLabels=c9d1d9&currStreakNum=c9d1d9&sideNums=c9d1d9&dates=c9d1d9`}
              alt="GitHub Streak"
              className='w-full h-auto rounded-lg'
            />
          </div>
        </div>
        
        {/* GitHub Link */}
        <div className='text-center mt-12'>
          <a 
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className='inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl'
          >
            <FaGithub className='text-3xl text-white' />
            <span className='text-white font-semibold text-lg'>View on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default GitHubStats