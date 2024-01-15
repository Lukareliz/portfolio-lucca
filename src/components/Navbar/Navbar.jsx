import React from 'react'
import { Link } from 'react-router-dom'
import { Tilt } from 'react-tilt'
import '../Navbar/navbar.css'

const Navbar = () => {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  }
  return (
    <nav id="nav-container">
      <Link to="/"><h1>Lucca Nunes</h1></Link>
      <ul>
        <li><Tilt options={defaultOptions}><Link to="/projetos" className='marked-link'>Projetos</Link></Tilt></li>
        <li><Tilt options={defaultOptions}><Link to="/sobre" className='marked-link'>Sobre</Link></Tilt></li>
        <li><Tilt options={defaultOptions}><Link to="/contatos" className='marked-link'>Contato</Link></Tilt></li>
      </ul>
    </nav>
  )
}

export default Navbar