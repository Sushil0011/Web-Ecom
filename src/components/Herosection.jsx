import React from 'react'
import { NavLink } from 'react-router-dom'
import hero from '../assets/hero.jpg'

const Herosection = ({title}) => {
  return (
    <>
    <div className='heroWrapper'>
<div className='info'>
<span className='welcome'>Welcome to </span>
<h1>{title}</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti et aliquid unde maiores libero saepe, non id! Quisquam facere qui maxime, doloremque et, quaerat expedita, blanditiis tempore repudiandae nesciunt suscipit!</p>

<span>  <NavLink><button>Shop Now</button></NavLink></span>
</div>
<div className='homeimage'>
  <img src={hero} alt='this is a image'/>
  <div className='inner'></div>

</div>


</div>
      
    </>
  )
}

export default Herosection;