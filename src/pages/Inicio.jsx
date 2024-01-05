import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <main>
        <section className='title-container'>
            <h1>Desenvolvedor <br />Front-end.</h1>
            <img src="src/assets/me.png" alt="" />
        </section>
        <div className='work-together'>
            <h3>Vamos trabalhar <Link>juntos</Link></h3>
        </div>
    </main>
  )
}

export default Inicio