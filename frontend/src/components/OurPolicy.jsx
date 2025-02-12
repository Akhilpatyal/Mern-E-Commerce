import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-5'>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer husselfree exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Seven Days Policy</p>
        <p className='text-gray-400'>we will provide 7 Day's return policy</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Best Cutomer Support</p>
        <p className='text-gray-400'>We offer 24/hrs Customer Support</p>
      </div>
    </div>
  )
}

export default OurPolicy
