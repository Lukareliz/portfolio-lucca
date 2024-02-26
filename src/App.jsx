import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import NavIcon from './components/NavIcon/NavIcon.jsx'
import Inicio from './pages/Inicio'
import Projetos from './pages/Projetos'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'
import Footer from './components/Footer/Footer.jsx'

import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <NavIcon />
    <Routes>
      <Route path='/' element={<Inicio />}/>
      <Route path='/projetos' element={<Projetos />}/>
      <Route path='/sobre' element={<Sobre />}/>
      <Route path='/contatos' element={<Contato />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
