import React from 'react'
import { useState } from 'react'
import {menu ,close} from './assets'




const nav = () => {
  const [toggle, settoggle] = useState(false);
  return (
   

    <div  className='px-5 bg-black width-[100%] h-[50px]'>
        <nav className="flex  justify-between">
              <div>
                <img width='140' className=" grow-0 shrink-0 pt-3 pl-10"   src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />

              </div>
                  
          
        
          <div>
              <ul class="hidden sm:flex gap-10 font-poppins p-10 pt-4 text-sm text-white cursor-pointer">
                  <li className="hover:text-green-500">
                    <a href='/premium'>Premium</a></li>
                  <li className="hover:text-green-500">
                    <a href='/support'>Support</a></li>
                  <li className="hover:text-green-500">
                    <a href='/download'>Download</a></li>
                  <span>|</span>
                  <li className="hover:text-green-500">
                    <a href='/signup'>Signup</a></li>
                  <li className="hover:text-green-500 shrink-0">
                    <a href="/login">Log in</a></li>
              </ul>
          </div>
             
           <div className='sm:hidden'>
              {/* mobile menu */}
                 <img  className='ml-36 mr-12 mt-5 md:hidden ' src={toggle ? close : menu} onClick={(()=> settoggle(prev => !prev))}  alt="" />
              
              <div className={`${toggle ? "block": "hidden"}`}>
                <ul className='pt-10 sidebar text-white text-center font-poppins'>
                    <li className=" p-2 mb-2 bg-black-gradient rounded hover:text-green-500">
                      <a href='/premium'>Premium</a></li>
                    <li className="p-2 mb-2 bg-black-gradient rounded hover:text-green-500">
                      <a href='/support'>Support</a></li>
                    <li className="p-2 mb-2 bg-black-gradient rounded hover:text-green-500">
                      <a href='/download'>Download</a></li>
                  
                    <li className="p-2 mb-2 bg-black-gradient rounded hover:text-green-500">
                      <a href='/signup'>Signup</a></li>
                    <li className="p-2 mb-2 bg-black-gradient rounded hover:text-green-500 shrink-0">
                      <a href="/login">Log in</a></li>
                  </ul>
              </div> 
             
              </div>
                   
        </nav>
        
      
            {/* mobile menu */}
       </div>

  )

}
 

export default nav