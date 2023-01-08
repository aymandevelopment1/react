import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose}from 'react-icons/ai'
import {CiDark} from 'react-icons/ci'
import {MdDarkMode} from 'react-icons/md'
export default function Navbar() {
  const nava=[
    {
       name:"home",
       link:"#home",
    },
    {
      name:"about",
      link:"#about",
   },  {
    name:"skill",
    link:"#skill",
 },  {
  name:"portfolia",
  link:"#portfolia",
},  {
  name:"contact",
  link:"#contact",
},
   

  ]
  const[open,setOpen]=useState(false)

  return (
   <section className='flex   justify-between w-full fixed'>
    <div className='text-2xl  font-semibold'>
      <h1 className='px-10'>🅰🆈🅼🅰🅽</h1>
    </div>
   
    <nav className='text-2xl font-semibold md:block hidden '>
      <ul className='flex px-3 gap-5 '>
        {
          nava.map((con,id)=>(
              <li key={id} className="p-2">
          <a href={con.link}>{con.name}</a>
        </li>
          ))
        }
      
      </ul>
      
    </nav>
   
      <div className='md:hidden z-10 text-2xl  border-1 py-5 rounded-sm pr-2 '  onClick={()=>setOpen(!open)}>
      {
     
        open ?  <AiOutlineClose style={{color:"black" ,border:"2px"}} size={30}/> :  <AiOutlineMenu className='' size={20}/>
      }

      </div>

      <ul className={`flex flex-col  text-center absolute  rounded-2xl bg-gray-200  top-0 ${open ? "right-0" :"right-[-100%]"} px-3 gap-5 md:hidden`}>
        {
          nava.map((con,id)=>(
              <li key={id} className="p-5 font-bold uppercase text-black">
          <a href={con.link}>{con.name}</a>
        </li>
          ))
        }
      
      </ul>
   </section>

  )
}
