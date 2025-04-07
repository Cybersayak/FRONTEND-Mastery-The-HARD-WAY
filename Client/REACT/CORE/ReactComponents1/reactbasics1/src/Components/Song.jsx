import React from 'react'

function Song() {
  const songData =[
    {name: 'Radhe Radhe', description: 'हमें औरन की परवाह नहीं अपनी ठकुरानी श्री राधिका रानी', },
    {name: 'BholeNath ke Shaadi', description: 'Bholenath ke shadi ham toh nachenge',  },
    {name: 'Babam Bam', description: 'हमें औरन की परवाह नहीं अपनी ठकुरानी श्री राधिका रानी',},
   ];

  const handleClickDownload =() =>{alert("Downloading 🎧..."); } ;
  const handleLikedSong =(song) => {alert(`${song.name} is added in Liked Song List`); } ;

  return (
    <div className="w-full h-screen bg-zinc-500 flex flex-col gap-10 justify-center items-center">
      { songData.map((song, index) => (
        <div className="w-70 px-3 py-2 bg-zinc-100 rounded-md" key={index}>
          <h3 className='font-semibold text-xl'>{song.name}</h3>
          <p className='text-sm mt-3'>{song.description}</p>
            <button onClick={() => {alert(`Playing 🎧... ${song.name}`)}} className='bg-blue-500 hover:bg-sky-500 text-white px-2 py-0.5 rounded mt-2'>Play</button>
            <button onClick={handleClickDownload} className='bg-blue-500 hover:bg-sky-500 text-white px-2 py-0.5 rounded m-2'>Download</button>
            <button onMouseOver={()=> handleLikedSong(song)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-12 mr-1 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
            </button>
        </div>
      ))}
    </div>
  )
}


export default Song

