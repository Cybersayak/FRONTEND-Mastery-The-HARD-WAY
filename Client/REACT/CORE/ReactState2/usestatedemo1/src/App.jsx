import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [val, setVal] = useState({ example: "Example2", understooduseState: false })

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Understanding React State</h1>
      <p>State, in the context of React, is a JavaScript object that holds data specific to a component. Unlike props, which are passed down from parent components and are read-only, state is managed internally by the component itself and can be modified. When a component's state changes, React re-renders the component to reflect the updated data in the user interface.</p>
      <div className="card">
      <h2>Trying useState</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Total Coin 💰 {count}
        </button>
      </div>
      

      
      <div className="card mt-2">
        <h2> {val.example}</h2>
        <h2>UnderStood the useState Concept {val.understooduseState}</h2>
        <button onClick={() => setVal({...val , understooduseState :!val.understooduseState})} className={`px-4 py-2 ${val.understooduseState ? "bg-blue-500": "bg-red-500" } text-white rounded-md `}>
          UnderStood
        </button>
      </div>
     
    </>
  )
}

export default App
