import { Link } from 'react-router-dom';
import ContactSection from '../components/Form/ContactSection'

import { IoIosArrowDown } from "react-icons/io";
import { IoColorPaletteSharp } from "react-icons/io5";
import { IoCodeSlashSharp } from "react-icons/io5";
import { IoBulb } from "react-icons/io5";

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
        <>
        <main>
            <section className='title-container'>
                <h1>Desenvolvedor <br />Front-end.</h1>
                <IoIosArrowDown className='arrowDown-icon shake-vertical' />
                <img src="/me.png" alt="" />
            </section>
            <div className='work-together'>
                <h3>Vamos trabalhar <Link to='/contato'>juntos</Link></h3>
            </div>
            <section className='project-section'>
                <div className='section-title'>
                    <h3>Projetos</h3>
                    <p>Aqui estão meus projetos de open source, eles podem ser encontrados também em meu <a href="https://github.com/Lukareliz" target='_blank'>GitHub</a></p>
                </div>
                <div className='project-cards'>
                    <Link to='/projetos'>
                        <Tilt options={defaultOptions} className='card'>
                            <h4>viveRA</h4>
                            <img src="/p1.png" alt="" />
                            <div className='flags-container'>
                                <span className='flags'>HTML</span>
                                <span className='flags'>CSS</span>
                                <span className='flags'>Javascript</span>
                            </div>
                        </Tilt>
                    </Link>
                    <Link to='/projetos'>
                        <Tilt options={defaultOptions} className='card'>
                            <h4>WiseCare</h4>
                            <img src="/p2.png" alt="" />
                            <div className='flags-container'>
                                <span className='flags'>HTML</span>
                                <span className='flags'>CSS</span>
                                <span className='flags'>Javascript</span>
                                <span className='flags'>React.js</span>
                                <span className='flags'>Java</span>
                                <span className='flags'>MySQL</span>
                                <span className='flags'>API</span>
                            </div>
                        </Tilt>
                    </Link>
                    <Link to='/projetos'>
                        <Tilt options={defaultOptions} className='card'>
                            <h4>MoonMeta</h4>
                            <img src="/p3.png" alt="" />
                            <div className='flags-container'>
                                <span className='flags'>HTML</span>
                                <span className='flags'>CSS</span>
                                <span className='flags'>Javascript</span>
                                <span className='flags'>React.js</span>
                                <span className='flags'>Java</span>
                                <span className='flags'>API</span>
                            </div>
                        </Tilt>
                    </Link>
                    <Link to='/projetos'>
                        <Tilt options={defaultOptions} className='card'>
                            <h4>Weather</h4>
                            <img src="/p4.png" alt="" />
                            <div className='flags-container'>
                                <span className='flags'>HTML</span>
                                <span className='flags'>CSS</span>
                                <span className='flags'>Javascript</span>
                                <span className='flags'>API</span>
                            </div>
                        </Tilt>
                    </Link>
                </div>
            </section>
            <section className="about-section">
                <div className='section-title'>
                    <h3>Sobre</h3>
                    <p>Sou um desenvolvedor front-end com três anos de experiência em desenvolvimento web através de estágio e projetos. Amo tecnologia e adoro aprender sobre novas ferramentas e linguagens.<br /><br />
                        Estou graduando em Análise e Desenvolvimento de Sistemas, e estou me especializando em desenvolvimento web.<br /><br />
                        Acredito que a inovação é a chave principal para cada solução de cada problema, por isso sempre me mantenho atualizado e busco desenvolver a melhor solução possível.</p>
                </div>
                <div className='about-icons'>
                    <div>
                        <div className='icon-container'>
                            <IoColorPaletteSharp className='about-section-icon' />
                        </div>
                        <h4>Criar</h4>
                    </div>
                    <div>
                        <div className='icon-container'>
                            <IoCodeSlashSharp className='about-section-icon' />
                        </div>
                        <h4>Codificar</h4>
                    </div>
                    <div>
                        <div className='icon-container'>
                            <IoBulb className='about-section-icon' />
                        </div>
                        <h4>Inovar</h4>
                    </div>
                </div>
                <Link to='/sobre'>Saber mais</Link>
            </section>
            <ContactSection />
        </main>
        </>
    )
}

export default Inicio