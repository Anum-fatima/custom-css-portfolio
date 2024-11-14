import React from 'react'
import Image from 'next/image'
import "../style/page.css"
import About from '@/component/About'
import Contactus from '@/component/Contactus'
import Footer from '@/component/Footer'
const page = () => {
  return (
    <div className='paragraph'>
      <div className='left'>
       <h1>I'm ANUM FATIMA..</h1><br />
       <h3>Frontened Developer</h3><br />
       <p>A passionate frontened developer <br />
       Bringing designs to life with frontend expertise <br />
        & creativity with HTML, CSS, JavaScript, React & Next.js</p><br />

        <button className='buut'>
       <a href="/about"></a> Download CV
        </button>

        <div className='abou'>
        <About/>
         </div> 
       
        <div className='cont'>
        <Contactus/>
       </div> 
       
       <div>
        <Footer/>
       </div>
         

      </div>
      <div className='right'>
       <Image 
       src= "/image/WhatsApp_Image_2024-11-13_at_04.49.16_914581e9-removebg-preview.png"
       width={200}
       height={300}
       alt="profile picture"
       />
      </div>

      
      
    </div>

    

  
  )
}

export default page
