import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles  } from '../style';
import { services } from "../constants";
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
      <Tilt className = 'xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right","spring",index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div 
            options={{
              max:45,
              scale:1,
              speed:450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <img 
                src={icon}
                alt={title} 
                className='w-16 h-16 object-contain'
                />
                <h3 className='text-white text-[20px]
                  font-bold text-center'>{title}</h3>

                
          </div>

        </motion.div>
      </Tilt>

  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","", 0.1, 1)}
        className = "mt-4 text-secondary tracking-wider xs:text-[15px] sm:text-[15px] md:text-[18px] text-[17px] leading-[30px]"
      >
        I am skilled software developer with experience in 
        Python and JavaScript with good knowledge of frameworks
        like React, Node.Js, Three.js. I also have expertise of 
        front-end development and have a good understanding of 
        backend development. I am very punctual of my time and 
        my work and hence I take my work very seriously. I can 
        provide a very user-friendly, scalable and efficient 
        solution to my clients that can help them to solve real
        world problems. 
      </motion.p>

       <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index ={index}
            {...service}/>
        ))}
      </div> 
    
    
    </>
  )
}

export default SectionWrapper(About, "about");