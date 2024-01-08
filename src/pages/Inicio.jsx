import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import VanillaTilt from 'vanilla-tilt';


const Inicio = () => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
		max: 25,
		speed: 400,
        glare: true,
        'max-glare': 0.5,
	});
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
                    <div className='card'>
                        <h4>viveRA</h4>
                        <p>Projeto de realidade aumentada na web.</p>
                        <div className='flags-container'>
                            <span className='flags'>HTML</span>
                            <span className='flags'>Javascript</span>
                        </div>
                        <Link>Saber mais</Link>
                    </div>
                    <div className='card'>
                        <h4>WiseCare</h4>
                    </div>
                    <div className='card'>
                        <h4>MoonMeta</h4>
                    </div>
                    <div className='card'>
                        <h4>TaskYes</h4>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Inicio