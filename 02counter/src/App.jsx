import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [counter, setCounter] = useState(5) // bihind the scene it works as let counter

  // let counter = 5
  const addvalue = () => {
    console.log("clicked", counter)
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>counter value: {counter} </h2>
     <button onClick={addvalue}>Add Value</button>
     <br />
     <button 
    onClick={removeValue}
     >remove value</button>
    </>
  )
}

export default App
