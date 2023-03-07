import React from 'react'

const home = (props) => {
  return (
    <div className='flex text-center  sm:flex bg-green-400 w-[100%] h-[600px] px-[7%]'>
        <div>
        
          <img className='hidden xl:flex shrink-0 relative bottom-[-25%] w-[950px] -rotate-6' src="/src/assets/iphone-mockup.png" role="none"/>
           
        </div>
       <div className='text-center my-auto text-6xl font-poppins'>
            <p className="lg:pl-[5%] ">Play millions of songs and podcasts, for free.</p>
            <button className=" lg: text-lg p-3 border text-black rounded-3xl bg-white hover:text-xl">Get Spotify free</button>
       </div>
        

    </div>
  )
}

export default home