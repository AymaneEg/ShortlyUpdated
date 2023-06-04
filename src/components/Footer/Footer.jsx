import React from 'react'
import logo from '../Menu/logo.svg'
import Facebook from './icon-facebook.svg'
import Instagram from './icon-instagram.svg'
import Twitter from './icon-twitter.svg'
import Pinterest from './icon-pinterest.svg'


export default function Footer() {
  return (
    <div className='w-full '>
       <div className='Footer'> 
          <h1 className='text-white font-bold text-5xl text-center'>Boost your links today</h1>
          <button className='bg-Cyanc px-5 mx-5 h-9 mt-9 text-white font-bold h-7 rounded-full'>Get Started</button>
       </div>
       <div className='w-full bg-very_Dark_Violet flex flex-col lg:flex-row p-8 justify-between  lg:items-start text-center lg:text-left'> 
            <div>
               <h1 className='text-white text-3xl font-bold mb-8'>Shortly</h1>
            </div>
            <div className='text-Grayish lg:flex lg:w-2/3 justify-around  items-start'> 
                <div className='FooterItem'>
                    <h1 className='text-white text-xl font-bold mb-4'>Features</h1>
                    <a href="/" className='hover:text-Cyanc'>Link Shortening</a>
                    <a href="/" className='hover:text-Cyanc'>Branded Links</a>
                    <a href="/" className='hover:text-Cyanc'>Analytics</a>
                </div>

                <div className='FooterItem'>
                <h1 className='text-white text-xl font-bold mb-4'>Resources</h1>
                    <a href="/" className='hover:text-Cyanc'>Blog</a>
                    <a href="/" className='hover:text-Cyanc'>Developers</a>
                    <a href="/" className='hover:text-Cyanc'>Support</a>
                </div>
                <div className='FooterItem'>
                <h1 className='text-white text-xl font-bold mb-4'>Company</h1>
                    <a href="/" className='hover:text-Cyanc'>About</a>
                    <a href="/" className='hover:text-Cyanc'>Our Team</a>
                    <a href="/" className='hover:text-Cyanc'>Careers</a>
                    <a href="/" className='hover:text-Cyanc'>Contact</a>
                </div>
                <div className='flex items-center justify-center lg:justify-between gap-8'> 
                    <a href="/" ><img src={Facebook} alt="" /></a>
                    <a href="/" >  <img src={Twitter} alt="" /></a>
                    <a href="/" >  <img src={Pinterest} alt="" /></a>
                    <a href="/" ><img src={Instagram} alt="" /></a>
                </div>
            </div>
       </div>
    </div>
  )
}
