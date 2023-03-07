import React from 'react';
import { SectionWrapper } from '../hoc';
//import { Button } from '../../components/Button';
import { styles } from '../style';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import resume from '../assets/Suryanshu_Tiwari_updated.pdf';

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Resume</h2>
        <p className={`${styles.sectionSubText}`}>Click below to download my resume.</p>
      </motion.div>
      <a href={resume} download="Suryanshu_Tiwari_resume.pdf">
      <button type='button'
            className='py-4 px-6 bg-tertiary mt-4 justify-center items-center
                text-white rounded-xl c outline-none w-fit shadow-md shadow-primary mx-auto' 
                
            >
              Download Resume
            </button>
        </a>
    </>
  )
}

export default SectionWrapper(Resume,"resume")