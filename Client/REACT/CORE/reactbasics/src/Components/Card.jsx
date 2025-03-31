import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-200'>
      <div className='w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-zinc-300'>
          <img className='w-full h-full object-cover' src="https://wallpaperaccess.com/full/3949076.jpg "></img>
           </div>
        <div className='w-full px-3 py-4 '></div>
        <h2 className='font-semibold m-2 '>React Basics </h2>
        <p className='text-xs mt-1 m-2 '>React can change how you think about the designs you look at and the apps you build. </p>
      </div>
    </div>
  )
}

export default Card;