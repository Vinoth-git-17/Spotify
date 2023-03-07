import React from 'react'

const home4 = (props) => {
    return (
      <div  className='flex flex-col justify-center items-center text-black bg-white font-poppins text-6xl h-[400px] text-center '>
          <h1>{props.name}</h1>
          <button className="text-lg mt-9 p-3 border  rounded-3xl text-white bg-black  hover:text-xl">Get Spotify free</button>    
          
      </div>
    )
  }

export default home4
