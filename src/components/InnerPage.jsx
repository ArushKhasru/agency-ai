import React from 'react'
import { company_logos } from '../assets/company_logos'
import assets from '../assets/assets'
import LatestWork from './LatestWork'
import Help from './Help'
import Team from './Team'
import ContactForm from './ReachOut'



export default function InnerPage() {
  return (
    <>
      <div id='home' className='flex flex-col items-center justify-center text-center px-6 pt-20 pb-10'>


        <div className='border border-gray-300 dark:border-gray-600 rounded-full flex items-center gap-2 px-3 py-2 mb-8 shadow-sm bg-white dark:bg-gray-800'>
          <img className='w-20' src={assets.group_profile} alt="Profiles" />
          <span className='text-xs sm:text-sm text-gray-600 dark:text-gray-400'>
            Trusted by 10K+ people
          </span>
        </div>


        <h1 className=' text-5xl  md:text-8xl font-semibold tracking-tight text-gray-800 dark:text-white max-w-5xl'>
          Turning imagination into
          <div className='flex justify-center gap-5'>

            <p className='text-blue-500 my-2'>digital </p>
            <p className='text-gray-800 dark:text-white my-2 '>impact.</p>
          </div>
        </h1>


        <p className='mt-8 text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed'>
          Creating meaningful connections and turning big ideas <br className='hidden md:block' />
          into interactive digital experiences.
        </p>
        <img className='w-[75%] my-12' src={assets.hero_img} alt="" />
        <img src={assets.bgimage1} alt="" className=' absolute' />

        {/* Trusted Partners */}
        <p className='text-gray-700 mt-14 font-semibold  dark:text-gray-500 text-sm  '>
          Trusted by Leading Companies
        </p>

        <div className=' w-full max-w-5xl'>
          <div className='flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-8  mt-9'>
            <img className='w-24 md:w-28 object-contain' src={company_logos.coinbase_logo} alt="Coinbase" />
            <img className='w-20 md:w-24 object-contain' src={company_logos.google_logo} alt="Google" />
            <img className='w-24 md:w-28 object-contain' src={company_logos.rakuten_logo} alt="Rakuten" />
            <img className='w-24 md:w-28 object-contain' src={company_logos.microsoft_logo} alt="Microsoft" />
            <img className='w-20 md:w-24 object-contain' src={company_logos.airbnb_logo} alt="Airbnb" />
            <img className='w-20 md:w-24 object-contain' src={company_logos.zoom_logo} alt="Zoom" />
          </div>

        </div>
        <Help />
        <LatestWork />
        <Team />
        <ContactForm />
      </div>
    </>
  )
}
