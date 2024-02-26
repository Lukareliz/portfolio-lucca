import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/pages_styles.css'
import ContactSection from '../components/Form/ContactSection'

const Contato = () => {
  return (
    <main>
      <section className='title-page-container'>
        <h2 className='title_pages'>Contato</h2>
      </section>
      <div className='work-together'>
        <h3>Vamos trabalhar <Link to='/contato'>juntos</Link></h3>
      </div>
      <ContactSection />
    </main>
  )
}

export default Contato