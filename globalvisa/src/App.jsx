import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'



import Nav from './Header/Nav'
import Home from './Header/Home'
import About from './Header/About'
import Visa from './Header/Visa'
import Pages from './Header/Pages'
import Blog from './Header/Blog'
import Contact from './Header/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Nav/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/visa' element={<Visa/>}></Route>
        <Route path='/pages' element={<Pages/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App
