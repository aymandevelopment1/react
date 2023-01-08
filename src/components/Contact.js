import React from 'react'

export default function Contact() {
  return (
 <section id='contact' className='py-4'>
  <div className='max-w-screen-lg text-center justify-center mx-auto flex flex-col'>
    <div className='text-center md:text-3xl text-2xl font-semibold  '>
      <h2 className='inline border-b-4 border-cyan-600'>contact</h2>
      <p className='py-3 text-gray-500'>submit the form below</p>
    </div>
    <div className='md:fle flex-col justify-center items-center md:px-0  px-6'>
      <form action="" className='flex flex-col bg-gradient-to-b from-black to-gray-800  w-full md:w-1/2'>
        <input type="text" name='name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'  placeholder='Enter your name'/>
        <input name='email' type="email"  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'  placeholder='Enter your email'/>
        <textarea name='message'  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'  rows="10"></textarea>
        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md duration-200 hover:scale-105'>Log in</button>
      </form>
    </div>
  </div>
 </section>
  )
}
