

import React from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  return (
    <>
      <Card buttonName="Like" />
      <Card buttonName="Comment" color="bg-purple-600"/>
      <Card buttonName="Share" color="bg-red-400"/>
    </>
  )
}

export default App