import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import pic from "../assets/pic.jpeg";

export default function Hero() {

  return (

    <section
      id='home'
      name='home'
      className='min-h-screen flex items-center justify-center px-4 sm:px-6 pt-36 pb-16 scroll-mt-24'
    >

      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center'>

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h2 className='text-4xl sm:text-5xl md:text-7xl font-bold leading-tight'>
            Hi, I'm <span className='text-cyan-400'>Nikhil</span>
          </h2>

          <p className='mt-6 text-gray-300 text-base sm:text-lg leading-relaxed'>
            Freelance Web Developer & Data Entry Specialist creating modern websites,
            responsive UI designs and professional digital solutions.
          </p>

          <div className='flex gap-4 mt-8 flex-wrap'>

            <a
              href='/Nikhil-CV.pdf'
              download='Nikhil-CV.pdf'
              className='bg-cyan-500 hover:bg-cyan-600 px-5 sm:px-6 py-3 rounded-xl flex items-center gap-2 transition'
            >
              <FaDownload />
              Download CV
            </a>

            <a
              href='https://github.com/nikhilproject45/'
              target='_blank'
              rel='noreferrer'
              className='glass px-5 sm:px-6 py-3 rounded-xl flex items-center gap-2'
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href='https://www.linkedin.com/in/nikhil-agrahari-196a5824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/'
              target='_blank'
              rel='noreferrer'
              className='glass px-5 sm:px-6 py-3 rounded-xl flex items-center gap-2'
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='flex justify-center relative'
        >

          <div className='w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-cyan-500/20 blur-3xl absolute'></div>

          <img
            src={pic}
            alt='profile'
            className='w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-cyan-400 relative z-10'
          />

        </motion.div>

      </div>

    </section>
  )
}