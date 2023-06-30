import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='images\OmeloraLogo.png'>
            TRVL <i className='public\images\OmeloraLogo.png'/>
          </Link>
          <div className="menu-icon">
            <i className={"icon"}/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar