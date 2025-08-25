import React from 'react'
import {BrowserRouter, Link } from 'react-router-dom';

function Header() {
  return (

    <BrowserRouter>
    <div>

       <Link to='/'> <button>Home</button></Link>
        <Link to='/'sobre><button>Sobre</button></Link>
        <button>Destaque</button>
        <button>Contato</button>
    </div>
    </BrowserRouter>
  )

}

export default Header