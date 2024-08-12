import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import Profile from '../assets/shruti.png'

function Home() {

    const [text] = useTypewriter({
        words:["Web Developer",
      "Web Designer"],
        loop:0,
        typeSpeed:80,
        deleteSpeed:50,
        delaySpeed: 2000
    });

    const container = (delay) =>({
        hidden:{x:-100, opacity:0 },
        visible:{x:0,opacity:1, transition:{duration:0.5,delay:delay}},


    });
  return (
    <div className="flex flex-wrap lg:flex-row flex-col-reverse ">
        <div className="w-full lg:w-1/2 px-14">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 variants={container(0)}
                initial= "hidden"
                whileInView="visible"
                className='text-6xl lg:text-8xl font-thin tracking-normal mt-20 lg:mt-60 pb-6'>Shruti Patil</motion.h1>
                <motion.span variants={container(0.3)}
                initial= "hidden"
                whileInView="visible"
                className='pb-6 text-3xl text-teal-500 dark:text-yellow-400 lg:text-4xl'>{text}<Cursor cursorColor="teal" /></motion.span>
                <motion.p variants={container(1)}
                initial= "hidden"
                whileInView="visible"
                className=' text-center lg:text-start'>
                A frontend focused Web Developer building Websites and Web Applications that leads to the success of the overall product.
                </motion.p>
                <div className="flex flex-wrap items-center gap-8 md:mb-0 mb-8">
                    <div className="my-6 text-white lg:text-3xl text-2xl flex items-center lg:gap-8 gap-6 justify-center lg:justify-start">
                                <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.25 }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.25, delay: 0 },
                                }}
                                href="https://www.linkedin.com/in/shruti-patil-ba039a169/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <FaLinkedin className="cursor-pointer" />
                                </motion.a>
                                <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.25 }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.25, delay: 0 },
                                }}
                                href="https://github.com/ShrutiPatil-dev/ShrutiPatil-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <FaGithub className="cursor-pointer" />
                                </motion.a>

                     </div>
                </div>      
             </div>
        </div>  
        {/* //section left ends here  */}

        <div className="w-full lg:w-1/2 mt-24 lg:mt-20">
          <div className="flex justify-center">
            <div className=" border-white mt-5 mb-8 lg:rounded-none rounded-full lg:border-0 border-[2px]">
              <motion.img
                // initial={{ x: 100, opacity: 0 }}
                // animate={{ x: 0, opacity: 1 }}
                // transition={{ duration: 0.5, delay: 0 }}
                src={Profile}
                alt="Profile"
                className="lg:w-[35rem] w-52 lg:rounded-none rounded-full "
              />
            </div>
          </div>
        </div>
    </div>
    


    
     
  )
}

export default Home
