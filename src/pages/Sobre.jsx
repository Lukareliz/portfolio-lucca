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
          <img src="/pictureme.png" alt="Foto do Lucca, rapaz pardo, cabelo cacheado, usando óculos redondo." />
        </div>
        <div className='text_about'>
          <p>Olá, sou Lucca Nunes, um entusiasta de tecnologia focado no desenvolvimento Front-end. Minha jornada profissional é marcada pela expertise em React.JS, Node.JS, JavaScript e TypeScript. Tenho um compromisso sólido com a qualidade, evidenciado pelo meu conhecimento em testes, metodologias ágeis, e implementação eficiente de CI/CD.</p>
          <p>Atualmente, estou trilhando meu caminho acadêmico como graduando em Análise e Desenvolvimento de Sistemas, onde alio teoria e prática para aprimorar minhas habilidades. Minha abordagem vai além de simples códigos; meu objetivo é criar soluções interativas e eficazes que impulsionem experiências digitais excepcionais.</p>
          <p>Estou sempre aberto a oportunidades de aprendizado e colaboração. Se você busca um profissional que alia paixão, inovação e habilidades técnicas, ficarei feliz em conectar e explorar possíveis sinergias!</p>
          <p>Vamos construir algo incrível juntos!</p>
        </div>
        <div className="tech_container">
          <img src="/react.png" alt="" />
          <img src="/node-js.png" alt="" />
          <img src="/js.png" alt="" />
          <img src="/typescript.png" alt="" />
          <img src="/html-5.png" alt="" />
          <img src="/css-3.png" alt="" />
          <img src="/sql.png" alt="" />
        </div>
      </section>
    </main>
  )
}

export default Sobre