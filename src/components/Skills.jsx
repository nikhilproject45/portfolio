import { motion } from 'framer-motion'

export default function Skills() {

  const skills = [
    'React JS',
    'JavaScript',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'Framer Motion',
    'Git & GitHub',
    'MS Excel',
    'MS Word',
    'Data Entry',
    'PDF Conversion',
    'Typing'
  ]

  return (

    <section
      id='skills'
      className='py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden'
    >

      <div className='max-w-6xl mx-auto'>

        <h2 className='text-4xl sm:text-5xl font-bold text-center text-cyan-400 mb-16'>
          My Skills
        </h2>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8'>

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{
                scale: 1.05,
                y: -8
              }}
              className='relative group overflow-hidden rounded-3xl p-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500'
            >

              <div className='bg-slate-900/90 backdrop-blur-xl rounded-3xl py-5 sm:py-8 px-3 sm:px-6 h-full flex items-center justify-center'>

                <h3 className='text-sm sm:text-lg font-semibold text-white group-hover:text-cyan-400 transition'>
                  {skill}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}