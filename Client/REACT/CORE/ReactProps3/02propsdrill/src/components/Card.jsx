import React from 'react'

function Card({props}) {
    const {image, name, profile}= props
  return (
    <div className='w-60 bg-sky-200 p-3 rounded-md'>
        <div className='w-full h-30 bg-sky-400 '>
            <img className='w-full h-full object-cover object-center' src={image} alt="profile" />
        </div>
        <div className='w-full p-3'>
            <h3 className='tex-xl font-semibold'>{name}</h3>
            <h5 className='text-xs'> {profile}</h5>
            <button className='bg-blue-500 rounded-lg hover:bg-blue-700 text-white px-2 py-1 m-2'>Follow + </button>
        </div>
    </div>
  )
}

export default Card