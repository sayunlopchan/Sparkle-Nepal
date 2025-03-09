import React from 'react'
import { NavLink } from 'react-router-dom'

const Booking = () => {
  return (
    <div className='flex flex-wrap items-center justify-center md:gap-5 p-10 md:p-20 gap-5 bg-gradient-to-tr from-yellow-500 to bg-orange-500 text-start text-white'>
      <p className='text-sm md:text-xl lg:text-2xl'>
        Empower Young Minds with Art, Dance, Yoga, <br /> and More. Ready to Sparkle?
      </p>
      <NavLink to={'/admissionform'} className=' text-sm md:text-lg px-3 py-2 rounded-2xl border-2 border-white hover:bg-orange-500 transition-all'
      >
        Join Us Today!
      </NavLink>

    </div>
  )
}

export default Booking