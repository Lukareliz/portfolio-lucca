import React from 'react'
import { Link } from 'react-router-dom'

import '../pages/pages_styles.css'

const Sobre = () => {
  return (
    <main>
      <section className='title-page-container'>
        <h2 className='title_pages'>Sobre</h2>
      </section>
      <div className='work-together'>
        <h3>Vamos trabalhar <Link to='/contato'>juntos</Link></h3>
      </div>
      <section className='about-page-section'>
        <div className="picture_me">
          <img src="/src/assets/pictureme.png" alt="Foto do Lucca, rapaz pardo, cabelo cacheado, usando óculos redondo." />
        </div>
        <div className='text_about'>
          <p>Me chamo Lucca Nunes Ramos Almeida, tenho 23 anos e sou desenvolvedor front-end.</p>
          <p>Atualmente estudo Análise e Desenvolvimento de Sistemas, e também faço cursos online para me especializar em desenvolvimento web.
            Possuo conhecimento em HTML, CSS, Javascript, React.JS, Node.JS, SQL e MySQL</p>
          <p>Meu maior objetivo é afetar positivamente o mundo e as pessoas através da tecnologia.</p>
          <p>Sou um profissional dedicado, gosto muito de descobrir formas mais inteligentes de fazer as coisas.</p>
        </div>
        <div className="tech_container">
          <img src="/src/assets/techs/html-5.png" alt="" />
          <img src="/src/assets/techs/css-3.png" alt="" />
          <img src="/src/assets/techs/js.png" alt="" />
          <img src="/src/assets/techs/react.png" alt="" />
          <img src="/src/assets/techs/node-js.png" alt="" />
          <img src="/src/assets/techs/sql.png" alt="" />
        </div>
      </section>
    </main>
  )
}

export default Sobre