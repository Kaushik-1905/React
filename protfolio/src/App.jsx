import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Protfolio from '../src/Protfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Protfolio/>
    </>
  )
}

export default App
