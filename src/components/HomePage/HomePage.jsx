import React, { useEffect, useState } from 'react'
import illusration from "./illustration-working.svg"
import img from './bg-shorten-desktop.svg'
import icon1 from './icon-brand-recognition.svg'
import icon2 from './icon-detailed-records.svg'
import icon3 from './icon-fully-customizable.svg'
import { useGlobalContext } from '../../Api/Context'

export default function HomePage() {

  const [Copied , setCopied] = useState(false); 
  const [TextErr , setTextErr] = useState(false); 
  const {loading , links ,  SetLink , setcopied} = useGlobalContext();


  function Copy(code){

    links.map(link =>{
       if(link.code === code){
        navigator.clipboard.writeText(link.short);
        link.copied = true
        }
        else{
          link.copied = false
        }
      })
      setcopied(prev => !prev)
      SetLink('');
  }

  const Click = () =>{
     let input = document.getElementById("LinkText").value;
     if(input == ""){
       setTextErr(true);
     }
     else{
       SetLink(input)
     }
     
     document.getElementById("LinkText").value = " "
  } 

  useEffect(()=>{

    document.getElementById('LinkText').addEventListener("keydown" , (event)=>{
      if(event.key.toLowerCase() == "enter"){
         Click();
      }
    })

  } , [])


  return (
    <div> 
        <div className='w-full bg-white min-h-screen flex flex-col lg:flex-row lg:justify-around lg:p-20 p-6 mb-20 lg:mb-0 '>
            <div className='px-10 py-16  lg:w-76 leading-8 text-center lg:text-left'>
                <h1 className='text-6xl font-bold text-Dark_Blue'>More than just <br /> shorter link</h1>
                <p className='text-gray-400 mt-6'>Build your brand's recognation and get detailed <br /> insight on how your links are performing</p>
                <button className='bg-Cyanc p-2 text-white font-bold rounded-full mt-4 w-32'>Get Started</button>
            </div>
            <div>
                <img src={illusration} alt="" />
            </div>
        </div> 

        <div className='w-full bg-light_violet flex justify-center  items-center flex-col pt-24 relative' >
   
            <div className='Search'>
              <div className='absolute w-full flex flex-col lg:flex-row justify-around items-center rounded-md '>
                 <input type="text" id='LinkText' onChange={()=> setTextErr(false)} className={TextErr ? 'SerachText err'  : 'SerachText' }placeholder='Shorten a link here...'/> 
                 <button className='bg-Cyanc lg:w-1/5 text-white h-10 z-10 font-bold rounded-md w-10/12 ' onClick={Click}>Shorten it!</button>
              </div> 

              <p className='text-red-500 absolute left-8 bottom-4' style={{display :TextErr ? 'block'  : 'none' }}>Please add a link</p>
              
            </div>
           
            {/* To be Updated    */}

            {
              links.map(link => {
                return (
              <div className='links' key={link.code}>
                <p className='max-w-full'>{link.original}</p>
                <div className='flex justify-around items-center text-left flex-col lg:flex-row '>
                   <p className='text-Cyanc'>{link.short}</p>
                   <button className='bg-Cyanc px-5 mx-5 text-white font-bold h-8 rounded-md w-full' onClick={() => Copy(link.code)} style={{backgroundColor : link.copied ? "hsl(257, 27%, 26%)" : "hsl(180, 66%, 49%)"}}>{ link.copied ? "Copied !" : "Copy"}</button>
                </div>
            </div> ) })
            }

            


            <div className='mt-10 flex flex-col justify-center items-center'>
                <div className='text-center'>
              
                  <h1 className=' text-Dark_Blue text-3xl font-bold' >Advanced Statistics</h1>
                  <p className='mt-4'>Track how your links are performing across the web with <br /> our advanced statistics dashboard</p>
                </div> 

                <div className='CardsContainer'> 
                  <div className='Cards first'>
                    <div className='bg-Dark_Blue flex items-center justify-center w-16 rounded-full h-16 absolute -top-8'>
                       <img src={icon1} alt="" className=' '/>
                    </div>
                    <h1 className='text-Dark_Blue font-bold text-xl my-4'>Brand Recognition</h1>
                    <p>Boost your brand recognation with each click. Generic links don't mean a thing .Branded links help instil confidence in your content</p>
                  </div>

                  <div className='Cards second'>
                  <div className='bg-Dark_Blue flex items-center justify-center w-16 rounded-full h-16 absolute -top-8'>
                       <img src={icon2} alt="" className=' '/>
                    </div>
                  <h1 className='text-Dark_Blue font-bold text-xl my-4'>Detailed Records</h1>
                  <p>Boost your brand recognation with each click. Generic links don't mean a thing .Branded links help instil confidence in your content</p>

                  </div>
                  <div className='Cards third'>
                     <div className='bg-Dark_Blue flex items-center justify-center w-16 rounded-full h-16 absolute -top-8'>
                       <img src={icon3} alt="" className=' '/>
                    </div>
                  <h1 className='text-Dark_Blue font-bold text-xl my-4'>Fully customizable</h1>
                  <p>Boost your brand recognation with each click. Generic links don't mean a thing .Branded links help instil confidence in your content</p>

                  </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
