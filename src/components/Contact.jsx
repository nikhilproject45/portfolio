import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {

  const form = useRef()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

    setErrors({
      ...errors,
      [e.target.name]: ''
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    let newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    // INSTANT SUCCESS MESSAGE

    setSuccess(true)

    // EMAIL SEND

    emailjs.sendForm(
      'service_t0eztoa',
      'template_d2uoccf',
      form.current,
      'Nqm86Ro_gH-9hcbQI'
    )

    .then(() => {

      // CLEAR FORM

      setFormData({
        name: '',
        email: '',
        message: ''
      })

      // AUTO HIDE MESSAGE

      setTimeout(() => {
        setSuccess(false)
      }, 5000)

    })

    .catch((error) => {
      console.log(error)
    })
  }

  return (

    <section
      id='contact'
      className='py-20 sm:py-24 px-4 sm:px-6'
    >

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='
          max-w-4xl
          mx-auto
          rounded-[30px]
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
            rounded-[30px]
            p-6
            sm:p-10
          '
        >

          <h2
            className='
              text-4xl
              sm:text-5xl
              font-bold
              text-center
              text-cyan-400
              mb-10
            '
          >
            Contact Me
          </h2>

          <form
            ref={form}
            onSubmit={handleSubmit}
            className='grid gap-6'
          >

            {/* NAME */}

            <div>

              <input
                type='text'
                name='name'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                className={`
                  w-full
                  p-4
                  rounded-2xl
                  bg-slate-800/60
                  border
                  outline-none
                  text-white
                  transition-all
                  duration-300
                  ${
                    errors.name
                      ? 'border-red-500'
                      : 'border-gray-700 focus:border-cyan-400'
                  }
                `}
              />

              {errors.name && (
                <p className='text-red-400 text-sm mt-2'>
                  {errors.name}
                </p>
              )}

            </div>

            {/* EMAIL */}

            <div>

              <input
                type='email'
                name='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={handleChange}
                className={`
                  w-full
                  p-4
                  rounded-2xl
                  bg-slate-800/60
                  border
                  outline-none
                  text-white
                  transition-all
                  duration-300
                  ${
                    errors.email
                      ? 'border-red-500'
                      : 'border-gray-700 focus:border-cyan-400'
                  }
                `}
              />

              {errors.email && (
                <p className='text-red-400 text-sm mt-2'>
                  {errors.email}
                </p>
              )}

            </div>

            {/* MESSAGE */}

            <div>

              <textarea
                rows='6'
                name='message'
                placeholder='Your Message'
                value={formData.message}
                onChange={handleChange}
                className={`
                  w-full
                  p-4
                  rounded-2xl
                  bg-slate-800/60
                  border
                  outline-none
                  text-white
                  resize-none
                  transition-all
                  duration-300
                  ${
                    errors.message
                      ? 'border-red-500'
                      : 'border-gray-700 focus:border-cyan-400'
                  }
                `}
              ></textarea>

              {errors.message && (
                <p className='text-red-400 text-sm mt-2'>
                  {errors.message}
                </p>
              )}

            </div>

            {/* SUCCESS MESSAGE */}

            <AnimatePresence>

              {success && (

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className='
                    rounded-3xl
                    border
                    border-cyan-400/40
                    bg-cyan-500/10
                    backdrop-blur-xl
                    py-5
                    px-6
                    text-center
                  '
                >

                  <div className='text-5xl mb-3'>
                    ✅
                  </div>

                  <h3 className='text-2xl font-bold text-cyan-300 mb-2'>
                    Thank You!
                  </h3>

                  <p className='text-gray-200'>
                    Your message has been sent successfully.
                    <br />
                    I will contact you soon 🚀
                  </p>

                </motion.div>

              )}

            </AnimatePresence>

            {/* BUTTON */}

            <button
              type='submit'
              className='
                bg-cyan-500
                hover:bg-cyan-600
                py-4
                rounded-2xl
                font-semibold
                text-lg
                transition-all
                duration-300
                hover:scale-[1.02]
              '
            >
              Send Message
            </button>

          </form>

        </div>

      </motion.div>

    </section>
  )
}