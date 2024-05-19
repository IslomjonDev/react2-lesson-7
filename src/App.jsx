import { useState } from 'react'

import './App.css'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import SingleRout from './pages/singleRout/SingleRout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/singleRout/:id' element={<SingleRout/>}/>
    </Routes>
    </>
  )
}

export default App
