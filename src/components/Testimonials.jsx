import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      
      {/* BG Gradient */}
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>

      {/* Title & Description */}
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>
          What our clients <br className='sm:block hidden'/>say about working with us
        </h2>

        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            From startups to growing businesses, we help clients build fast, secure and scalable
            digital solutions. Here's how our work has impacted their growth and success.
          </p>
        </div>
      </div>

      {/* Feedback Cards */}
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </div>

    </section>
  )
}

export default Testimonials
