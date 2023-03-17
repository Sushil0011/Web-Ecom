import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {



  const [menuicon, setMenuicon] = useState(true)
  const [close, setClose] = useState(false)



  const menuhandler = () => {
    setMenuicon(false)
    setClose(true)
  }

 const closemenuhandler=()=>{
  setMenuicon(true)
  setClose(false)
 }
 
 




  return (
    <nav className={menuicon ? "navbar " : " mobilenav"}>
      <div className='logo'>
        <h2><span>Web</span> <span>Shop</span></h2>
      </div>

      {
        close ?
          <div className='menuIcon'  onClick={closemenuhandler}>
            <CloseIcon />
          </div> : <div className='menuIcon'  onClick={menuhandler}>
            <MenuIcon  />
            </div>
      }








      <div className='menu'>
        <NavLink to="/" onClick={closemenuhandler}>Home</NavLink>
        <NavLink to="/about" onClick={closemenuhandler}>About</NavLink>
        <NavLink to="/product" onClick={closemenuhandler}>Products</NavLink>
        <NavLink to="/contact" onClick={closemenuhandler}>Contact</NavLink>
        <NavLink to="/login" onClick={closemenuhandler} className="login">Login</NavLink>

        <NavLink to="/cart" onClick={closemenuhandler} className="cart"><ShoppingCartIcon />
          <div className='cartvalue'>1</div>
        </NavLink>

      </div>





    </nav>
  )
}

export default Navbar;