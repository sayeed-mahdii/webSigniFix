import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      
      {/* Top Section */}
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full items-start`}>

  {/* Left: Logo + Description */}
  <div className='flex-1 flex flex-col justify-start mr-10 mb-6 md:mb-0'>
    <img
      src={logo}
      alt='logo'
      className='w-[320px] h-[115px] object-contain mb-4'
    />
  </div>
  <div className='flex-1 flex flex-col justify-start mr-10 mb-6 md:mb-0'>
    <p className={`${styles.paragraph} max-w-[310px]`}>
      We create modern websites, apps, AI tools, chatbots, and automations that help businesses grow smarter and faster.
    </p>
  </div>

  {/* Right: Quick Links in horizontal order */}
  <div className='flex-1 flex flex-col'>
    <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white mb-4 text-center'>
  Quick Links
</h4>

    <div className='flex flex-wrap gap-6'>
      <a href="#home" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>
        Home
      </a>
      <a href="#services" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>
        Services
      </a>
      <a href="#projects" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>
        Projects
      </a>
      <a href="#faq" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>
        FAQ
      </a>
      <a href="#contact" className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>
        Contact
      </a>
    </div>
  </div>

</div>


      {/* Bottom Section */}
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>

        {/* Copyright */}
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          © 2025 WebSigniFix — Building the Future of Digital Experiences.
        </p>

        {/* Social Media Icons */}
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <a href="#contact" key={social.id}>
              <img
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
                }`}
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Footer
