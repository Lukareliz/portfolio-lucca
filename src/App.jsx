import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Inicio from './pages/Inicio'
import Projetos from './pages/Projetos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Footer from './components/Footer/Footer.jsx'

import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Inicio />}/>
      <Route path='/projetos' element={<Projetos />}/>
      <Route path='/sobre' element={<Sobre />}/>
      <Route path='/contato' element={<Contato />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
