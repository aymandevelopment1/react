
import React, { useState } from 'react'
// const{theme,setTheme}=useTheme()
import { useTheme } from 'next-themes'

import {CiDark} from 'react-icons/ci'
import {MdDarkMode} from 'react-icons/md'


// import {AiFillWechat} from 'react-icons/ai'
export default function Bot() {
  const{theme,setTheme}=useTheme()


  return (
    <div className={`$darkMode ? "dark": ""1 fixed bottom-9 right-4 z-[999]    sm:right-8   cursor-pointer text-white text-4xl border-2 border-cyan-600 px-5 w-9 h-9 flex items-center justify-center rounded-full   animate-bounce` } >
      <div className='text-3xl '>
      {
        theme === 'dark' ?  <MdDarkMode  onClick={()=>setTheme("light")}/> : <CiDark size={30} style={{color:"black"}} onClick={()=>setTheme("dark")}/>
      }
      {/* <AiFillWechat onClick={()=>setDarkMode(!darkMode)} size={30}/> */}

      </div>
        
    </div>
  )
}
