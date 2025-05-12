
import './App.css'
import Card from './components/Card'
import Following from './components/Following'


function App() {

const cardData =[
  {name: 'Diana',profile : "Frontend",image: "https://media.istockphoto.com/id/1171173195/photo/portrait-of-cheerful-female-programmer-enjoying-time-with-laptop-computer-and-distance-job.webp?a=1&b=1&s=612x612&w=0&k=20&c=gR70Hn06UZ3KnDVqsL5E-V_LVIpBIr-TyJBfzEdCU_I=" },
  {name: 'Bella',profile : "Backend",image: "https://media.istockphoto.com/id/941440572/photo/brunette-girl-working-in-large-office.jpg?s=612x612&w=0&k=20&c=LumCc7wcE25fuUniOD3p3qeVMhP94COIEqOAAOrc0RA=" },
  {name: 'Jelina',profile : "Fullstack",image: "https://media.istockphoto.com/id/598152918/photo/smiling-businesswoman-working-on-her-laptop-in-cafe.jpg?s=612x612&w=0&k=20&c=nD41Yih7tbtTIRF6vwpxFOdw4k2HQnpQpxRK9YAyld4=" },
  {name: 'Christina',profile : "Tester",image: "https://media.istockphoto.com/id/1153405164/photo/businesswomn-using-laptop-in-cafeteria.jpg?s=612x612&w=0&k=20&c=6MLpwn6P7p3Z8bexIvDRKWk2mcr7q01tzX7FK3u5ZPw=" },
  {name: 'Riya',profile : "Web Designer",image: "https://media.gettyimages.com/id/1475088195/photo/mature-woman-looking-at-the-camera-while-working-on-a-laptop-standing-near-her-cubicle-in-an.jpg?s=612x612&w=0&k=20&c=4F3xKNo-Wfc1fV3A4ktF8REYFIip-0BlWvuPsToXPHU=" },
  {name: 'Jessica',profile : "Tester",image: "https://media.istockphoto.com/id/2196963466/photo/portrait-of-serious-confident-woman-at-work-with-laptop-businesswoman-looking-at-camera-with.jpg?s=612x612&w=0&k=20&c=hO-9pAUSZZZMBRo1rW1KoZ2Omprrjdqc_AmGxWSMum8=" },
  {name: 'Julie',profile : "Tester",image: "https://img.freepik.com/premium-photo/peoples-with-laptop_1197721-33010.jpg?semt=ais_hybrid&w=740" },
  {name: 'Simran',profile : "Recruiter",image:"https://img.freepik.com/free-photo/successful-casual-copywriter-typing-her-laptop-front-camera_482257-122451.jpg?semt=ais_hybrid&w=740"}
]

const FollowingData =[
  {name: 'Sweety',profile : "Recruiter",image:"https://img.freepik.com/premium-photo/woman-colorful-dress-is-sitting-chair-with-laptop-her-lap_1276840-19188.jpg?semt=ais_hybrid&w=740"},
  {name: 'Sweta Singh',profile : "Bikini Models",image:"https://images.unsplash.com/photo-1640939998641-a7857a045e53?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGluZGlhbiUyMGJpa2luaSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
  {name: 'Preeti Sahu',profile : "Bikini Models",image:"https://images.unsplash.com/photo-1710969494750-7faaae201a6b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGluZGlhbiUyMGJpa2luaSUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},
  {name: 'Lovely Ghosh',profile : "Actress",image:"https://images.unsplash.com/photo-1710972197951-3aade7376076?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGluZGlhbiUyMG51ZGUlMjBmZW1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D"}
]
  return (
    <> 
  
    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-green-400 md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Suggestions to</span> Follow</h1>
    <div className='w-full h-screen bg-zinc-500 flex gap-4 items-center justify-center'>
      <div className='flex flex-wrap gap-4 justify-center'>
          {cardData.map((item,index) => (
        <Card props={item}/>
      ))}
      </div>
    </div>


      <div className="py-12 px-4 bg-zinc-500 min-h-screen">
      <h1 className="mb-8 text-3xl font-extrabold text-gray-900 dark:text-green-400 md:text-5xl lg:text-6xl text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">People I </span> Follow
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
      {FollowingData.map((item, index) => (
      <Following key={index} name={item.name} image={item.image} prof={item.profile} />
       ))}
      </div>
      </div>


    </>
  )
}

export default App
