import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {

  return (
    <footer className='border-t border-gray-800 py-8 px-6'>

      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>

        <div>
          <h2 className='text-2xl font-bold text-cyan-400'>
            Nikhil Portfolio
          </h2>

          <p className='text-gray-400 mt-2'>
            Web Developer & Data Entry Freelancer
          </p>
        </div>

        <div className='flex gap-5 text-2xl'>

          <a
            href='https://github.com/nikhilproject45/'
            target='_blank'
            rel='noreferrer'
            className='hover:text-cyan-400 transition'
          >
            <FaGithub />
          </a>

          <a
            href='https://www.linkedin.com/in/nikhil-agrahari-196a5824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/'
            target='_blank'
            rel='noreferrer'
            className='hover:text-cyan-400 transition'
          >
            <FaLinkedin />
          </a>

          <a
            // href='mailto:agraharinikhil049@gmail.com'
            // className='hover:text-cyan-400 transition'

              href='https://mail.google.com/mail/?view=cm&fs=1&to=agraharinikhil049@gmail.com'
  target='_blank'
  rel='noreferrer'
  className='hover:text-cyan-400 transition'
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className='text-center text-gray-500 mt-8 text-sm'>
        © 2026 All Rights Reserved | Made with React & Tailwind CSS
      </div>

    </footer>
  )
}