import { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { fadeIn, slideIn } from '../utils/motion';

//template_3f0d1x6
//service_e7hqs78
//sPzBvMeZUmjL_xwny

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => { 
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })

  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    setLoading(false);

    if (!form.name || !form.email || !form.message) {
      return (alert('Please fill out all fields before submitting.'));
    }

    emailjs.send('service_e7hqs78', 'template_3f0d1x6', 
    {
      from_name: form.name,
      to_name : 'Suryanshu',
      from_email: form.email,
      to_email: "tshuryanshu@gmail.com",
      message: form.message,
    },
    'sPzBvMeZUmjL_xwny'
    )
    .then(() => {
      setLoading(false);
      alert('I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message:'',
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went Wrong.')
    })
  }

  return (
    <div  className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8
          rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-4"
        >
          <lable className="flex flex-col">
            <span className='text-white font-medium flex flex-wrap'>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className='bg-tertiary py-4 px-6 mt-4 placeholder:text-secondary
              text-white rounded-lg outline-none
              border-none font-medium'
            />
          </lable>

              <span className='text-white font-medium flex flex-wrap'>Your email</span>
              <input 
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What is your email?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary
                      text-white rounded-lg mt-4 outline-none
                      border-none font-medium'
              />

              <span className='text-white font-medium flex flex-wrap'>Your Message</span>
              <textarea
                rows="7" 
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary
                      // text-white rounded-lg mt-4 outline-none
                      border-none font-medium'
              />
            <button type='submit'
            className='py-4 px-6 bg-tertiary
                text-white rounded-xl outline-none w-fit shadow-md shadow-primary' 
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[500px]"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")