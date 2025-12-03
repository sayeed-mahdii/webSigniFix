import React from 'react'
import styles from '../style'

const CTA = () => {
  return (
    <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      
      {/* Left Text */}
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Ready to build your next digital product?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          From websites and mobile apps to custom software and AI-powered automation — 
          we help businesses turn ideas into fast, secure and scalable solutions.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:ml-10 ml-0 mt-6 sm:mt-0 gap-4">

        {/* Short CTA text */}
        <p className="text-white text-lg font-semibold text-center sm:text-left">
          Contact Us About Your Project
        </p>

        {/* WhatsApp Row */}
        <div className="flex gap-3">
          <a
            href="https://wa.me/8801827641868"
            target="_blank"
            className="flex-1 text-center text-white px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 transition"
          >
            WhatsApp
          </a>

          <a
            href="https://wa.me/8801620170707"
            target="_blank"
            className="flex-1 text-center text-white px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 transition"
          >
            WhatsApp
          </a>
        </div>

        {/* Email Row */}
        <div className="flex gap-3">
          <a
            href="mailto:monjur.csecu@gmail.com"
            className="flex-1 text-center text-white px-6 py-3 rounded-xl bg-pink-900 hover:bg-pink-700 transition"
          >
            Email
          </a>

          <a
            href="mailto:mahdi.csecu@gmail.com"
            className="flex-1 text-center text-white px-6 py-3 rounded-xl bg-pink-900 hover:bg-pink-700 transition"
          >
            Email
          </a>
        </div>

      </div>
    </section>
  )
}

export default CTA
