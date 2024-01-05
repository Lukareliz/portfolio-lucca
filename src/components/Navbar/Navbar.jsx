import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/navbar.css'

const Navbar = () => {
  return (
    <nav id="nav-container">
        <h1>Lucca Nunes</h1>
        <ul>
            <li><Link>Projetos</Link></li>
            <li><Link>Sobre</Link></li>
            <li><Link>Contato</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar