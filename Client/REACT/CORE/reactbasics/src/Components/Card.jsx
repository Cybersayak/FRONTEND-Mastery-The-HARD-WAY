import React from 'react'

function Card() {
  const data =[
    {image: "https://wallpaperaccess.com/full/3949076.jpg" ,name : 'React Basics', description: 'React can change how you think about the designs you look at and the apps you build.'},
    {image: "https://wallpapersafari.com/download/M0rP6h/",name : 'React Native', description: 'React Native is a framework for building native-style applications for both iOS and Android using JavaScript.'}, 
    {image: "https://miro.medium.com/max/762/1*zgbi_fJN2p-VMvCvwin8-g.png",name : 'Expo', description: 'Expo is a framework that makes developing Android and iOS apps easier.'},
    {image: "https://cdn.filestackcontent.com/8MbtJ4hTAaOk3KPcptqZ",name : 'NextJS', description: 'Next.js is a React framework for building full-stack web applications'},

  ];
  
  return (
    <div className='w-full h-screen bg-zinc-200 flex justify-center items-center gap-10'>
      { data.map((elem, index) => (
        <div key={index} className='w-52 bg-zinc-10 rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-zinc-300'>
          <img className='w-full h-full object-cover' src={elem.image}></img>
        </div>
        <div className='w-full px-3 py-4 '></div>
          <h2 className='font-semibold m-2 '>{elem.name} </h2>
          <p className='text-xs mt-1 m-2 '>{elem.description} </p>
      </div>
    ))}
    </div>
  );
}

export default Card;

















