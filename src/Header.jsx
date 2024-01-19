import React, { useState } from 'react'
import "./Header.css"

function Header() {

  let [login,setLogin]=useState(false)
  return (
    <div className='header-parent'>

        <div className="logo">
            <h2>logo</h2>
        </div>
        <div className="nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>

                <button onClick={()=>setLogin(!login)}>{login?"loged out": "login"}</button>
            </ul>
        </div>
      
    </div>
  )
}

export default Header
