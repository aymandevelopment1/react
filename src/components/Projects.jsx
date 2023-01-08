import React from 'react'
import web1 from '../assets/web1.png'
import web2 from '../assets/web2.png'
import web3 from '../assets/web3.png'
import web4 from '../assets/web4.png'
import web5 from '../assets/web5.png'
export default function Projects() {
  const por=[
  {
    id:1,
    src:web1,
  },  {
    id:1,
    src:web2,
  },  {
    id:1,
    src:web3,
  },  {
    id:1,
    src:web3,
  },  {
    id:1,
    src:web5,
  },
]
  return (
  <section id='portfolia' className=' py-10 '>
    <div className='max-w-screen-lg mx-auto px-5 flex flex-col flex-wrap justify-center w-full h-full'>
      <div className='text-center py-1 '>
        <h2 className='md:text-3xl text-2xl font-semibold inline border-b-4 border-cyan-700'>portoflia <span className='text-cyan-600'>me</span></h2>
      </div>
      <div className='grid sm:grid-cols-2 mt-4 py-5 md:grid-cols-3 text-center gap-6 px-12 sm:px-0'>
       {
        por.map((count,id)=>(
          <div key={id} className='shadow-md shadow-gray-500 rounded-xl relative'>
          <img src={count.src }className="h-80 w-80 rounded-md duration-200 hover:scale-105"/>
          <div className='text-center p-3 flex justify-center'>
            <button id='home'>view</button>
          </div>
        </div>

        ))
       }
       
      </div>
    </div>
    
    
  </section>
  )
}
