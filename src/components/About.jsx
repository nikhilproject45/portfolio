import { motion } from 'framer-motion'

export default function About() {

  return (

    <section
      id='about'
      className='py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden'
    >

      <div className='max-w-6xl mx-auto'>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='relative group rounded-[30px] p-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 overflow-hidden'
        >

          <div className='bg-slate-900/90 backdrop-blur-xl rounded-[30px] p-6 sm:p-10 md:p-14'>

            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400 mb-6'>
              About Me
            </h2>

            <p className='text-gray-300 leading-relaxed text-base sm:text-lg'>
              I am a modern frontend web developer and professional data entry freelancer focused on creating responsive, animated and visually impressive websites.

              <br /><br />

              I build premium UI designs using React JS, Tailwind CSS and Framer Motion. Along with web development, I also provide professional data entry services, Excel work, PDF conversion, typing and documentation solutions with accuracy and fast delivery.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}