import React from 'react'
import {footerLinks, socialMedia } from './constants'

const footer = (props) => {
  return (
    <div>
        <footer className='px-[7%] w-[fill] h-[700px] lg:h-[500px] bg-gray-800'>
           <div>
                <img width="135" className="pt-3"   src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
           </div>
           
           <div className='block  lg:flex gap-[200px] my-10 font-poppins text-white'>
                {footerLinks.map((links)=>(
                      <div > 
                          <h2 className='py-4 text-dimWhite text-center'>{links.title}</h2>
                          <ul className='my-3'>
                            {links.links.map((link)=>(
                              <li className='text-sm text-center my-3 md:text-center lg:mb-3 hover:text-green-500'><a href={link.link}>{link.name}</a></li>   
                            ))}
                          </ul>
                      </div>

                ))}
                <div className='flex lg:flex  gap-5'>
                  {socialMedia.map((social , index) => (
                     <a href={social.link}>
                      <img

                
                  src={social.icon}
                  key={social.id} 
                  alt={social.id} />
                     </a> 
                  ))}
                </div>
                
           </div>
           
          
           
        </footer>
    </div>
  )
}

export default footer