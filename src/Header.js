import React from 'react'
import classes from './all.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={classes.header}>
      <span><Link to='/home'>Home</Link></span>
      <span><Link to='/cart'>Cart</Link></span>
    </div>
  )
}

export default Header ;