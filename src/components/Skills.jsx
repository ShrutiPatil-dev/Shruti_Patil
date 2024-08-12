import React from 'react'
import Title from './Title'
import JS from "../assets/JSsvg.svg";
import Java from "../assets/Javasvg.svg";
import Bootstrap from "../assets/Bootstrapsvg.svg";
import Tailwind from "../assets/Tailwindsvg.svg";
import { RiReactjsLine } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa6";
import Git from "../assets/Gitsvg.svg";
import Figma from "../assets/figma.svg"
import CSS from '../assets/css.svg'
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";


function Skills() {
    Title('Skills');

    const iconVariant = (duration) => ({
      initial: { y: -10 },
      animate: {
        y: [10, -10],
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    });
  return (
    <div className="py-10 px-12">
    <h2 className="text-center text-2xl lg:text-4xl my-20"><span className='text-teal-500 dark:text-yellow-400'>Skills And </span>Tech Stack</h2>
    <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4 mb-4"
      >
        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
       <motion.div
          variants={iconVariant(4.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <img src={JS} alt="Java" />
        </motion.div>


        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <img src={Tailwind} alt="Java" />
        </motion.div>
        </motion.div>

        <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4 mb-4"
      >
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <img src={CSS} alt="Css" />
        </motion.div>

      
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <img src={Java} alt="Java" />
        </motion.div>
        <motion.div
          variants={iconVariant(6)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <img src={Bootstrap} alt="Bootstrap" />
        </motion.div>
        
       
        <motion.div
          variants={iconVariant(3.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <img src={Git} alt="Git" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          whileHover={{
            scale: 1.1,
            opacity: 0.8,
            transition: { duration: 0.5 },
          }}
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <img src={Figma} alt="figma" />
        </motion.div>
      </motion.div>
     
      <div>
      <h1 className="text-center text-3xl lg:text-4xl my-20">Work Experience</h1>

        <div className="bg-primary dark:bg-blue-700 w-full lg:w-3/5 mx-auto flex flex-col justify-center items-center p-7 shadow-lg">
           <FaLaptopCode className='m-5' size={40}/>
           <h1 className='text-lg'>Associate Consultant</h1>
           <br/>
           <p className='text-base font-normal'>Eviden (Atos)</p>
           <p className='text-base font-extralight'>July 2021 - Current</p>
        </div>
      </div>
        
    </div>
  )
}

export default Skills
