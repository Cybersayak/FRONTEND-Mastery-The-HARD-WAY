import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [val, setVal] = useState({id:"student" , understooduseState: false});
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>UseState in REACT</h1>
      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          Redeem Token ${count}
        </button>
      </div>

      <div className="p-4">
        <h2>id: {val.id}</h2>
        <h2>I have understand the concept : {val.understooduseState.toString()}</h2>
        <button onClick={() => setVal({...val, understooduseState: !val.understooduseState})} className='px-3 py-1 bg-blue-500 text-white rounded-md'>
          UnderStood
        </button>
      </div>
    </>
  )
}

export default App
