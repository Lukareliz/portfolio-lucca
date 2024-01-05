import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import Inicio from './pages/Inicio'

import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Inicio />}/>
      {/* <Route path='/projetos' element={<Projetos />}/>
      <Route path='/sobre' element={<Sobre />}/>
      <Route path='/contato' element={<Contato />}/> */}
    </Routes>
    </>
  )
}

export default App
