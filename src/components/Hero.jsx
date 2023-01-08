import React from 'react'
import hero from '../assets/picture.jpg'
import Social from './Social'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
  <section className='h-screen w-full py-8'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full px-4 md:flex-row'>
      <div className='flex-1 flex-col   font-semibold justify-center text-center sm:mt-12 md:mt-0 mt-12 '>
        <div className='md:py-0  md:mt-0 mt-20'>
            <h1 className='text-3xl ' style={{ paddingTop: '', margin: 'auto 0', fontWeight: 'normal' }}>
        My name ayman{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Iam', 'frontend', 'development', '!']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>
      </h1>
        </div>
      
      <h3 className='md:text-3xl text-2xl py-4'>A Frontend Developer with 2+ years of experience in designing and developing user interfaces, testing, debugging</h3>

        <p className='md:text-3xl text-2xl '></p>
        {/* <p>  </p> */}
        <div className='py-4 '>
          <p className='inline border-b-2 border-cyan-600'>Social link media</p>

        </div>
        <Social/>
      </div>
      <div className='flex-1 flex mt-8  mx-auto w-2/3 md:w-full items-center justify-center'>
        <img className='h-80 w-80 rounded-full object-cover' src={hero}/>
      </div>
    </div>
  </section>
  )
}
