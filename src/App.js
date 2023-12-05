import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './Components/Home'
import CategoryNews from './Components/CategoryNews/CategoryNews'

export default function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home  />} />
      <Route path='/Sports'  element={<CategoryNews categ={"sports"} />} />
      <Route path='/Entertainment'  element={<CategoryNews categ={"entertainment"}/>} />
      <Route path='/Technology'  element={<CategoryNews categ={"technology"}/>} />
      <Route path='/Health'  element={<CategoryNews categ={"health"}/>} />
      <Route path='/Science'  element={<CategoryNews categ={"science"}/>} />


    </Routes>


    </BrowserRouter>
      
    </>
  )
}
