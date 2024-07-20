import { useState } from 'react'
import './App.css'
import TODO from './Components/TODO/TODO'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TODO/>
    </>
  )
}

export default App