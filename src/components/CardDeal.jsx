import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      {/* LEFT SIDE — Text */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Supercharge your business with <br className='sm:block hidden' /> AI & automation.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We integrate advanced AI solutions — including GPT-powered chatbots,
          workflow automation, smart data processing, and personalized customer
          interactions.  
          <br /><br />
          From streamlining internal operations to enhancing user experience,
          our automation tools help you work faster, smarter, and with greater
          efficiency.
        </p>

        {/* <Button styles='mt-10' /> */}
      </div>

      {/* RIGHT SIDE — Image */}
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='ai-automation'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
