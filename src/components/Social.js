import React from 'react'
import {BsFacebook,BsWhatsapp,BsLinkedin} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Social() {
  const links=[
    {
      links: "https://www.facebook.com/ifraax.shaxleylaydareersool",
      name: <BsFacebook/>,
    }, {
      links: "https://www.linkedin.com/in/abdiazis-maxamed-a66a82250/",
      name:   <BsLinkedin/>,
    }, {
      links: "http://Wa.me/+252612702631",
      name: <BsWhatsapp/>,
    }
  ]
  return (
   <section className='mt-3 flex md:text-center justify-center'>
   <div className='flex gap-4 md:text-4xl text-2xl'>
   
   <ul className='flex gap-3'>
    {
      links.map(count=>(
        <li>
          <a href={count.links} target="_blank">{count.name}</a>
        </li>
      ))
    }
   </ul>
     
 
  
    
   </div>
   </section>
  )
}
