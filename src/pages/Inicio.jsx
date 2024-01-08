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
                        <p>Projeto de realidade aumentada na web.</p>
                        <div className='flags-container'>
                            <span className='flags'>HTML</span>
                            <span className='flags'>Javascript</span>
                        </div>
                        <Link to="/projetos">Saber mais</Link>
                    </Tilt>
                    <Tilt options={defaultOptions} className='card'>
                        <h4>viveRA</h4>
                        <p>Projeto de realidade aumentada na web.</p>
                        <div className='flags-container'>
                            <span className='flags'>HTML</span>
                            <span className='flags'>Javascript</span>
                        </div>
                        <Link to="/projetos">Saber mais</Link>
                    </Tilt>
                    <Tilt options={defaultOptions} className='card'>
                        <h4>viveRA</h4>
                        <p>Projeto de realidade aumentada na web.</p>
                        <div className='flags-container'>
                            <span className='flags'>HTML</span>
                            <span className='flags'>Javascript</span>
                        </div>
                        <Link to="/projetos">Saber mais</Link>
                    </Tilt>
                    <Tilt options={defaultOptions} className='card'>
                        <h4>viveRA</h4>
                        <p>Projeto de realidade aumentada na web.</p>
                        <div className='flags-container'>
                            <span className='flags'>HTML</span>
                            <span className='flags'>Javascript</span>
                        </div>
                        <Link to="/projetos">Saber mais</Link>
                    </Tilt>
                </div>
            </section>
        </main>
    )
}

export default Inicio