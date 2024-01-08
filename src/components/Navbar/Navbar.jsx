import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/navbar.css'

const Navbar = () => {
  return (
    <nav id="nav-container">
        <Link to="/"><h1>Lucca Nunes</h1></Link>
        <ul>
            <li><Link to="/projetos" className='marked-link'>Projetos</Link></li>
            <li><Link to="/sobre" className='marked-link'>Sobre</Link></li>
            <li><Link to="/contatos" className='marked-link'>Contato</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar