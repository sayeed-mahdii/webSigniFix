import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='features' className={layout.sectionReverse}>
      {/* Left Image */}
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='payment integration'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>

      {/* Right Content */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Secure Online Payments <br className='sm:block hidden'/> Integrated for Your Business.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We help businesses accept online payments effortlessly.  
          Whether you need local gateways like SSLCommerz, bKash, Nagad, Rocket, or 
          international gateways like Stripe & PayPal — we integrate them smoothly into your website or app.
          Fast, secure, and fully customized to fit your business needs.
        </p>
        <a href="#contact">
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img
            src={apple}
            alt='apple-pay'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src={google}
            alt='google-pay'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div>
        </a>
      </div>
    </section>
  )
}

export default Billing
