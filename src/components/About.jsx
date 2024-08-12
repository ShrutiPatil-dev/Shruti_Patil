import React from 'react'
import Home from './Home'
import { motion } from 'framer-motion';
import Title from './Title';
import PDF from'../assets/PDF.svg'
import Resume from '../assets/Shruti_Patil.pdf'

function About() {
  Title('About')

  const container = (delay) =>({
    hidden:{x:50, opacity:0 },
    visible:{x:0,opacity:1, transition:{duration:0.5,delay:delay}},


});
  return (
    <div>
      <Home/>
      <div className="px-12">
       <motion.h1 variants={container(0)}
                initial= "hidden"
                whileInView="visible"
                className='text-center text-4xl lg:text-5xl py-14'>Get to know Me!</motion.h1>
        <motion.p variants={container(0.5)}
                initial= "hidden"
                whileInView="visible"
                 className='w-full lg:w-4/5 text-base mx-auto text-neutral-300 pb-14'>
        Hello! I'm <span className='text-teal-500 dark:text-yellow-400'>Shruti Patil</span> throughout my coding journey, I've honed my skills in designing and implementing robust web applications that blend creativity with functionality. I believe in leveraging technology to solve real-world problems, and my project portfolio reflects my commitment to delivering impactful solutions using cutting-edge technologies.
        Currently, I am eager to apply my knowledge and skills in a professional setting where innovation and continuous learning are valued. I am enthusiastic about contributing to projects that challenge me to grow and evolve as a developer, while making a meaningful impact in the field of technology.
        </motion.p>
        <div className='flex justify-center items-center mb-10'>
        <motion.a variants={container(1)}
                initial= "hidden"
                whileInView="visible"
                                href={Resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <img className='w-10' src={PDF} alt="PDF" />
                                <h2 className='py-5 text-base'>Hire Me</h2>
                                </motion.a>
        </div>
        </div>
    </div>
  )
}

export default About
