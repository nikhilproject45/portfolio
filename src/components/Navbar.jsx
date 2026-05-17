import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function Navbar() {

  const navItems = [
    'home',
    'about',
    'skills',
    'services',
    'projects',
    'contact'
  ]

  return (

    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='fixed top-0 left-0 w-full z-50 px-2 sm:px-6 py-3'
    >

      <div
        className='
          max-w-7xl
          mx-auto
          flex
          justify-between
          items-center
          rounded-2xl
          border
          border-white/10
          bg-slate-900/70
          backdrop-blur-xl
          px-4
          sm:px-6
          py-3
        '
      >

        {/* LOGO */}

        <Link
          to='home'
          smooth={true}
          duration={300}
          offset={-80}
        >

          <motion.h1
            whileHover={{ scale: 1.05 }}
            className='
              text-2xl
              sm:text-3xl
              font-extrabold
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
              whitespace-nowrap
              cursor-pointer
            '
          >
            Portfolio
          </motion.h1>

        </Link>

        {/* NAV ITEMS */}

        <div
          className='
            flex
            items-center
            gap-2
            sm:gap-5
            flex-wrap
            justify-end
          '
        >

          {navItems.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className='relative group'
            >

              <Link
                activeClass='text-cyan-400'
                to={item}
                spy={true}
                smooth={true}
                duration={300}
                offset={-80}
                className='
                  cursor-pointer
                  text-[11px]
                  sm:text-sm
                  md:text-base
                  font-medium
                  text-gray-200
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  whitespace-nowrap
                '
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>

              <span
                className='
                  absolute
                  left-0
                  -bottom-1
                  w-0
                  h-[2px]
                  bg-cyan-400
                  rounded-full
                  transition-all
                  duration-300
                  group-hover:w-full
                '
              ></span>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.nav>
  )
}