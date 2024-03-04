import React from 'react'
import { Link } from 'react-router-dom'

import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projetos = () => {
  return (
    <main>
      <section className='title-page-container'>
        <h2 className='title_pages'>Projetos</h2>
      </section>
      <div className='work-together'>
        <h3>Vamos trabalhar <Link to='/contato'>juntos</Link></h3>
      </div>
      <section className='project-page-section'>

        <div className='project-panel project1'>
          <img src="/p1.png" alt="" />
          <div className='project-panel-content'>
            <h3>ViveRA</h3>
            <p>Este projeto foi concebido em prol da campanha Setembro Amarelo de 2023. Nele, os usuários tiveram a oportunidade de visualizar mensagens em Realidade Aumentada (RA) ao direcionar a câmera de seus dispositivos móveis para os tokens específicos.</p>
            <p>Contamos com a colaboração de estudantes de psicologia, os quais desempenharam um papel fundamental na criação do conteúdo a ser apresentado nas mensagens.</p>
            <p>O projeto foi sediado tanto na Universidade São Judas quanto em uma empresa de logística portuária de Santos, ambas engajadas em participar ativamente da campanha.</p>
            <div className="project-panel-tech">
              <IoLogoHtml5 className='tech_icon' />
              <IoLogoCss3 className='tech_icon' />
              <IoLogoJavascript className='tech_icon' />
            </div>
            <a href="https://github.com/Lukareliz/viveRA" target='_blank'>Ir para o repositório <FaExternalLinkAlt /></a>
          </div>
        </div>

        <div className='project-panel project2'>
          <div className='project-panel-content'>
            <h3>WiseCare</h3>
            <p>Este projeto foi desenvolvido para um simpósio da Universidade São Judas, no qual realizamos a modelagem de um software voltado para assistência domiciliar (homecare). Na plataforma, os responsáveis pelos pacientes têm a facilidade de encontrar e contratar cuidadores de maneira eficiente.</p>
            <p>Além de conceber a modelagem do software, nossa equipe elaborou o sistema de login da plataforma. Durante o processo de cadastro, o usuário escolhia o tipo de conta desejado (cuidador ou responsável) e recebia, por e-mail, suas credenciais iniciais para acessar a plataforma.</p>
            <div className="project-panel-tech">
              <IoLogoHtml5 className='tech_icon' />
              <IoLogoCss3 className='tech_icon' />
              <IoLogoJavascript className='tech_icon' />
              <IoLogoReact className='tech_icon' />
              <FaJava className='tech_icon' />
            </div>
            <a href="https://github.com/Lukareliz/wise-care" target='_blank'>Ir para o repositório <FaExternalLinkAlt /></a>
          </div>
          <img src="/p2.png" alt="" />
        </div>

        <div className='project-panel project3'>
          <img src="/p3.png" alt="" />
          <div className='project-panel-content'>
            <h3>MoonMeta</h3>
            <p>Neste projeto, o usuário tem a capacidade de enviar mensagens automáticas de SMS para números registrados no banco de dados. Em particular, o SMS consiste em um comunicado informando que o vendedor atingiu sua meta.</p>
            <p>Utilizamos a API da Twilio, que viabilizou a criação de um número telefônico funcional, permitindo o envio das mensagens de acordo com os algoritmos implementados na aplicação web.</p>
            <p>Após concluirmos o processo de deploy, hospedamos a aplicação no Netlify.</p>
            <div className="project-panel-tech">
              <IoLogoHtml5 className='tech_icon' />
              <IoLogoCss3 className='tech_icon' />
              <IoLogoJavascript className='tech_icon' />
              <IoLogoReact className='tech_icon' />
              <FaJava className='tech_icon' />
            </div>
            <a href="https://github.com/Lukareliz/MoonMeta" target='_blank'>Ir para o repositório <FaExternalLinkAlt /></a>
          </div>
        </div>

        <div className='project-panel project4'>
          <div className='project-panel-content'>
            <h3>Weather App</h3>
            <p>Este projeto apresenta as condições climáticas da localização inserida pelo usuário, utilizando uma API. A aplicação realiza uma requisição correspondente à pesquisa efetuada para obter as informações climáticas desejadas.</p>
            <p>O projeto foi concebido com o propósito de aprofundar os estudos sobre a utilização de APIs relevantes para o desenvolvimento web, proporcionando, ao mesmo tempo, uma prática significativa nas linguagens HTML, CSS e Javascript.</p>
            <div className="project-panel-tech">
              <IoLogoHtml5 className='tech_icon' />
              <IoLogoCss3 className='tech_icon' />
              <IoLogoJavascript className='tech_icon' />
            </div>
            <a href="https://github.com/Lukareliz/how-is-the-weather" target='_blank'>Ir para o repositório <FaExternalLinkAlt /></a>
          </div>
          <img src="/p4.png" alt="" />
        </div>
      </section>
    </main>
  )
}

export default Projetos