import React from 'react'
import { features } from '../constants' // We'll update these to WebSignifix services
import styles, { layout } from '../style'

const ServiceCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='services' className={layout.section}>
      {/* Section Info */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Our Services <br className='sm:block hidden'/> for Your Digital Success
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We specialize in delivering custom websites, mobile apps, and software solutions
          that help your business grow. Our team focuses on performance, usability, and long-term support for all projects.
        </p>
        {/* <Button styles='mt-10'/> */}
      </div>

      {/* Service Cards */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <ServiceCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business
