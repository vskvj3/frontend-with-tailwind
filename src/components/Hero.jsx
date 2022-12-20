import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
        <p className='text-[#00df9a] font-bold p-2'>YOUR FIRST TAILWIND PROJECT</p> 
        <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold py-4'> Tailwind is awesome</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold'>React is </p>
            <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-1' strings={[' Cool', ' Open source', ' Javascript library']} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 '>Try react with tailwind</p>
        <button className='bg-[#00df9a] w-[150px] rounded my-6 mx-auto font-medium py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
