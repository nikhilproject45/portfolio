import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaFileExcel } from 'react-icons/fa'

export default function Services() {

  const services = [
    {
      icon: <FaCode size={45} />,
      title: 'Frontend Development',
      desc: 'Modern responsive websites using React JS, Tailwind CSS and smooth animations.'
    },
    {
      icon: <FaLaptopCode size={45} />,
      title: 'Website Design',
      desc: 'Creative UI/UX designs with premium modern layouts and interactive effects.'
    },
    {
      icon: <FaFileExcel size={45} />,
      title: 'Data Entry',
      desc: 'Fast typing, Excel work, PDF conversion, documentation and professional formatting.'
    }
  ]

  return (

    <section
      id='services'
      className='py-24 px-6 relative overflow-hidden'
    >

      <div className='max-w-6xl mx-auto'>

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl font-bold text-center text-cyan-400 mb-20'
        >
          My Services
        </motion.h2>

        <div className='grid md:grid-cols-3 gap-10'>

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2
              }}
              whileHover={{
                scale: 1.05,
                y: -12
              }}
              className='
                relative
                group
                overflow-hidden
                rounded-3xl
                p-[2px]
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-purple-500
              '
            >

              <div
                className='
                  bg-slate-900/90
                  backdrop-blur-xl
                  rounded-3xl
                  p-10
                  h-full
                  relative
                  z-10
                  transition-all
                  duration-500
                  group-hover:bg-slate-800
                '
              >

                <div
                  className='
                    text-cyan-400
                    mb-6
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:rotate-6
                  '
                >
                  {service.icon}
                </div>

                <h3
                  className='
                    text-2xl
                    font-bold
                    mb-4
                    text-white
                    group-hover:text-cyan-400
                    transition
                  '
                >
                  {service.title}
                </h3>

                <p
                  className='
                    text-gray-300
                    leading-relaxed
                    text-base
                  '
                >
                  {service.desc}
                </p>

              </div>

              <div
                className='
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  blur-3xl
                  bg-cyan-500/20
                '
              ></div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}