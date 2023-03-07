import React from 'react'



const home2 = () => {
  return (
    <div className='relative px-[7%] py-10 font-poppins text-sm text-center bg-white  '>
        <h1 className='my-10 text-3xl text-green-400'>Why Spotify?</h1>
        <ul className='block  lg:flex  gap-5 text-xl items-center mb-10'>
            <li  className='mb-10'>
           <img className='mx-auto m-3' src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Play-Media-64.png" alt="" /> 

                <h1 >Play your favorites.</h1>
                <p>Listen to the songs you love, and discover new music and podcasts.</p>
            </li>
            <li className='mb-10'>
              
                <img className='mx-auto m-3' src="https://cdn2.iconfinder.com/data/icons/media-icons-23/24/File00001-64.png" alt="" />
                <h1>Playlists made easy.</h1>
                <p>We'll help you make playlists. Or enjoy playlists made by music experts.</p>
            </li>
            <li className='mb-10'>
               
            <img className='mx-auto m-3' src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_favorite_48px-64.png" alt="" />
                <h1>Make it yours.</h1>
                <p>Tell us what you like, and we'll recommend music for you.</p>
            </li>
            <li className='mb-10'>
               
                <img className='mx-auto m-3' src="https://cdn3.iconfinder.com/data/icons/ui-solid-3/32/Mobile_Data_internet_network_online_ui-64.png" alt="" />
                <h1>Save mobile data.</h1>
                <p>To use less data when you play music, turn on Data Saver in Settings.</p>
            </li>
        </ul>
    </div>
  )
}

export default home2