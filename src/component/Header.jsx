import React from 'react'
import NavBar from './NavBar'
import HeaderImg from '../assets/header_img.jpg'

const Header = () => {
  return (
    <div
      className='relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
      style={{ backgroundImage: `url(${HeaderImg})` }}
      id='Header'
    >
      <div className="absolute inset-0 bg-black/40"></div>

    
      <div className='relative z-10 container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-10'>
          Explore homes that fit your dreams
        </h2>

        <div className="pt-5 flex justify-center gap-6">
          <a href="#Projects" className="bg-transparent border border-white px-6 py-2 rounded-full  hover:bg-gray-600" >Projects</a>
          <a href="#Contact" className="bg-black hover:bg-gray-600 text-white px-6 py-2 rounded-full">Contact Now</a>
        </div>
      </div>
      <NavBar />

    </div>
  )
}

export default Header
