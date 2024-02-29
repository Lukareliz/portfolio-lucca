import React from 'react'
import { Link } from 'react-router-dom'

const Projetos = () => {
  return (
    <main>
      <section className='title-page-container'>
        <h2 className='title_pages'>Projetos</h2>
      </section>
      <div className='work-together'>
        <h3>Vamos trabalhar <Link to='/contato'>juntos</Link></h3>
      </div>
    </main>
  )
}

export default Projetos