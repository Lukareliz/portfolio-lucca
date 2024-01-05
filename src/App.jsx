import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route href='/' element={<Inicio />}/>
      <Route href='/projetos' element={<Projetos />}/>
      <Route href='/sobre' element={<Sobre />}/>
      <Route href='/contato' element={<Contato />}/>
    </Routes>
    </>
  )
}

export default App
