import React, { useEffect } from 'react' 
import { useState , useContext } from 'react'
import classes from './all.module.css'
import { MyContext } from './context'

function Home() {

  const {setcartitem} = useContext(MyContext)

  const [data , setdata]= useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setdata(json))
  },[])
 

 const addtocart= (data)=>{
  setcartitem(data)
 }

  return (
    <div >
        
     { data.map((pro)=>(
        <div  key={pro.id}  className={classes.items} >
          <div >
          <img src = {pro.image}  width="250" height="300" />
        <h3>{pro.title}</h3>
         <h3>Price : {pro.price}$</h3>
         <button onClick={()=>addtocart(pro)}>Add To Cart</button>
          </div>
        </div>

      ))
     }

    </div>
  )
}

export default Home