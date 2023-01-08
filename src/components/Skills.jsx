import React from 'react'
import {AiFillHtml5}from 'react-icons/ai'
import {SiTypescript}from 'react-icons/si'

import {DiCss3,DiJavascript1,DiReact}from 'react-icons/di'

export default function Skills() {
  const skills =[
    {
      name:"Html",
      link:<AiFillHtml5/>,
      text:"advance"
    },{
      name:"Css",
      link:<DiCss3/>,
      text:"advance"
    },{
      name:"Javascript",
      link:<DiJavascript1/>,
      text:"intermedia"
    },{
      name:"Reacts",
      link:<DiReact/>,
      text:"advance"
    },{
      name:"TypeScript",
      link:<SiTypescript/>,
      text:"advance"
    },
  ]
  return (
   <section id='skill' className='py-10   '>
    
  <div className='max-w-screen-lg mx-auto'>
    <div className='text-center  md:text-3xl text-2xl font-semibold'>
      <p className='inline border-b-4 border-cyan-600 hover:scale-105' >skills <span>me</span> </p>
 {/* <p className='py-3'>knowlege</p> */}
    </div>
    <div className='flex  items-center justify-center  mt-12 gap-8 flex-wrap duration-200 hover:scale-105'>
      {
        skills.map(count=>(
          <div className='border-2  border-cyan-700 relativemin-w-[16rem] max-w-[10rem] p-14 bg-gray-700  rounded-xl'>
        <p>{count.name}</p>
        <div className='w-32 h-32  flex items-center  p-4 '>
          <p className='text-6xl pr-6'>{count.link}</p>
        </div>

       

      </div>
      

        ))
      }
      

    </div>
    <div className='px-8 text-2xl mt-4'>
          <p>..... 2021 - 2023</p>
        </div>
   
  </div>
    
   </section>
  )
}
