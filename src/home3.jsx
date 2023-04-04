import React from 'react'
import {iphonemockup} from "./assets"


const home3 = (props) => {
  return (
    <div  className='flex flex-col justify-center items-center text-white  font-poppins text-4xl h-[500px]  bg-gradient-to-r from-green-400 to-blue-500 text-center '>
        <img className='lg:hidden relative  items-center -mt-[100px] w-[400px]' src={iphonemockup} role="none"/>
        
        <h1  >{props.name}<br></br>
            {props.content}
        </h1>
    </div>
  )
}

export default home3