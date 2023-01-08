import React from 'react'
import {GoLocation} from 'react-icons/go'
export default function About() {
  return (
  <section id='about' className='py-20 mt-12    '>
  <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 '>
    <div className='text-center '>
      <h2 className=' inline border-b-2 text-2xl  border-cyan-700'>About me</h2>
    </div>
    <p className='max-w-m py-2'>Frontend development dhoobo khibrad 2 sano ah uleeyhy oo waayo-aragnimo ah ee naqshadaynta iyo horumarinta interfaces user, baaritaanka, debugging, iyo tababarka shaqaalaha gudahood tiknoolajiyada casriga ah. Awoodda la caddeeyay ee ay tayeynayaan hawlaha webka oo hagaajiya dib u soo celinta xogta iyo hawlaha shaqada. qaar ka mid ah shaqada aan u dhammaystirtay iyaga waxaa ka mid ahaa abuurista websites, codsiyada web, magac, iyo waxyaabo kale.!</p>
    <br/>
    
 
  </div>
  <div className=' max-w-screen-lg mx-auto px-5 flex gap-4 text-2xl font-semibold'>
      <p>
  <GoLocation style={{color:"cyan"}}/></p>
  <p>Mogadisho</p>
    </div>
    {/* <p>lo</p> */}

  </section>
  )
}
