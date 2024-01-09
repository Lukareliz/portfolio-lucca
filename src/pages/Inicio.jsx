import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { Tilt } from 'react-tilt';

const Inicio = () => {
    const defaultOptions = {
        reverse: false,
        max: 35,
        perspective: 1000,
        scale: 1.1,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    }
    return (
        <main>
            <section className='title-container'>
                <h1>Desenvolvedor <br />Front-end.</h1>
                <IoIosArrowDown className='arrowDown-icon shake-vertical' />
                <img src="src/assets/me.png" alt="" />
            </section>
            <div className='work-together'>
                <h3>Vamos trabalhar <Link>juntos</Link></h3>
            </div>
            <section className='project-section'>
                <div className='section-title'>
                    <h3>Projetos</h3>
                    <p>Aqui estão meus projetos de open source, eles podem ser encontrados também em meu <a href="https://github.com/Lukareliz" target='_blank'>GitHub</a></p>
                </div>
                <div className='project-cards'>
                    <Tilt options={defaultOptions} className='card'>
                        <h4>viveRA</h4>
                        <p>Projeto desenvolvido para o Setembro Amarelo de 2023, o qual exibia mensagens em realidade aumentada através da câmera do celular.</p>
                        <div className='flags-container'>
                            <span className='flags'>HTML</span>
                            <span className='flags'>CSS</span>
                            <span className='flags'>Javascript</span>
                        </div>
                        <Link to="/projetos">Saber mais</Link>
                    </Tilt>
                    <Tilt options={defaultOptions} className='card'>
                        <h4>WiseCare</h4>
                        <p>Projeto desenvolvido para simpósio da USJT. É uma plataforma de cuidadores de idosos que faz conexões entre cuidadores e responsáveis.</p>
                        <div className='flags-container'>
                            <span className='flags'>HTML</span>
                            <span className='flags'>CSS</span>
                            <span className='flags'>Javascript</span>
                            <span className='flags'>React.js</span>
                            <span className='flags'>Springboot</span>
                            <span className='flags'>MySQL</span>
                        </div>
                        <Link to="/projetos">Saber mais</Link>
                    </Tilt>
                    <Tilt options={defaultOptions} className='card'>
                        <h4>MoonMeta</h4>
                        <p>Um sistema de envio de SMS através de uma API, afim de notificar os vendedores que bateram suas metas números cadastrados.</p>
                        <div className='flags-container'>
                            <span className='flags'>HTML</span>
                            <span className='flags'>CSS</span>
                            <span className='flags'>React.js</span>
                            <span className='flags'>Springboot</span>
                        </div>
                        <Link to="/projetos">Saber mais</Link>
                    </Tilt>
                    <Tilt options={defaultOptions} className='card'>
                        <h4>How is the weather?</h4>
                        <p>Consumo da API Open Weather para exibir as informações climáticas do local buscado pelo usuário através de uma requisição.</p>
                        <div className='flags-container'>
                            <span className='flags'>HTML</span>
                            <span className='flags'>CSS</span>
                            <span className='flags'>Javascript</span>
                        </div>
                        <Link to="/projetos">Saber mais</Link>
                    </Tilt>
                </div>
            </section>
            <section className="about-section">
                <div className='section-title'>
                    <h3>Sobre</h3>
                    <p>Sou um desenvolvedor front-end com mais de dois anos de experiência em desenvolvimento web através de estágio e projetos. Amo tecnologia e adoro aprender sobre novas ferramentas e linguagens.<br /><br />
                    Estou graduando em Análise e Desenvolvimento de Sistemas, e estou me especializando em desenvolvimento web.<br /><br />
                    Acredito que a inovação é a chave principal para cada solução de cada problema, por isso sempre me mantenho atualizado e busco desenvolver a melhor solução possível.</p>
                </div>
            </section>
        </main>
    )
}

export default Inicio