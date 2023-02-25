import React from 'react'
import Header from './Header'
import { Routes , Route } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'


function App() {
  return (
    <div style={{backgroundColor: "lightblue"}}>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  )
}

export default App