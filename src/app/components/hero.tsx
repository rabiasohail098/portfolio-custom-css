import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const Hero = () => {
  return (
    <div className="container">
    <div className="main">
    <div className="info">
        <div className="devinfo">
            <div className="hello">Hi I am </div>
            <div className="name">Rabia Sohail</div>
            <div className="about">Developer, Youtuber, Teacher </div>
            <div className="moreabout">I am a developer, and I love to doing coding, and except chellenges in my life.I am very patients with my work and responsibilities. </div>
            <div className="btns">
                <Link href="/cv" target="_blank">
                <button className="btn">Download CV</button></Link>
                <Link href="/contact">
               
                <button className='btn'>Contact Me</button></Link>
                

            </div>
       
        </div>

            <div className="devpic"> 
                <Image src="/images/rab (4).jpg" alt="rabia-sohail" width={500} height={400}/>
            </div>
       
  
</div>
</div>
</div>
  )
}

export default Hero;