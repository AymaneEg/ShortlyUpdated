import React, { useState } from 'react'
import "./Menu.css"
import logo from "./logo.svg"
import 'boxicons'


export default function Menu() {

  const [ShowMenu , SetShowMenu ] = useState(false); 

  function Show() {
     SetShowMenu(prev => !prev)
  }


  return (
    <div className='w-full bg-white  p-5 flex items-center justify-between lg:px-36 px-12 '>
        <div className='flex items-center'>
            <div>
                <img src={logo}/>
            </div>
        </div>

        <div className={ShowMenu ? 'Menu Active' : 'Menu' } style={{top : ShowMenu ? "10%" : "5%"}} >
            <div className='MenuItems'>
                <a href="" className='text-Grayish px-4 hover:text-very_Dark_Violet hover:font-bold'>Features</a>
                <a href="" className='text-Grayish px-4 hover:text-very_Dark_Violet hover:font-bold'>Pricing</a>
                <a href="" className='text-Grayish px-4 hover:text-very_Dark_Violet hover:font-bold'>Resources</a>
            </div>

            <div className='MenuLogin'>
               <a href="" className='mx-4'>Login</a>
               <button className='w-26 bg-Cyanc p-2 text-white font-bold rounded-full mt-4'>Sign in</button>
            </div>
        </div>

        <div className='showMenu'>
          <box-icon name='menu' color='#bfbfbf' onClick ={Show}></box-icon>
        </div>
    </div>
  )
}
