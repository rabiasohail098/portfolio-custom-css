import React from 'react'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <h1>RSK ZAI</h1>
      </div>
      <div>
        <ul className='list flex'>
            <li><Link href="/" target="_blank">Home</Link></li>
            <li><Link href="/intro" target="_blank">My Intro</Link></li>
            <li><Link href="/services" target="_blank">Projects</Link></li>
            <li><Link href="/blog" target="_blank">Blog</Link></li>
            <li><Link href="/contact" target="_blank">Contact Me</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar