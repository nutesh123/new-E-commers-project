import React from 'react'
import { useContext , useEffect } from 'react'
import { MyContext } from './context'

function Cart() {

useEffect(()=>{
  console.log('useeffect')
})
  const {cartitem}= useContext(MyContext)

  console.log(cartitem)
  console.log('function')
  return (
    
    <div>{ console.log('return')}Cart {cartitem.title}
    </div>
  )
}

export default Cart