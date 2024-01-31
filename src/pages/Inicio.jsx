import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoIosArrowDown } from "react-icons/io";
import { IoColorPaletteSharp } from "react-icons/io5";
import { IoCodeSlashSharp } from "react-icons/io5";
import { IoBulb } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

import { Tilt } from 'react-tilt';
import emailjs from '@emailjs/browser';

const Inicio = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assuntos, setAssuntos] = useState('');
    const [menssagem, setMenssagem] = useState('');

    function sendEmail(e){
        const templateParams = {
            from_name: nome,
            email: email,
            subject: assuntos,
            message: menssagem
        }

        e.preventDefault()
        emailjs.send("service_zb63pz9", "template_sj3ldgd", templateParams,"g7c9-dw8Z78bT-pCZ")
        .then((response) => {
            console.log("Email enviado", response.status);
            alert("Menssagem enviada com sucesso.")
            setNome('');
            setEmail('');
            setAssuntos('');
            setMenssagem('');
        }, (err) => {
            console.log("Erro: ", err);
            alert("Erro ao enviar menssagem.")
        })
    }

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
                            <img src="../src/assets/projects/p1.png" alt="" />
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
                            <img src="../src/assets/projects/p2.png" alt="" />
                            <div className='flags-container'>
                                <span className='flags'>HTML</span>
                                <span className='flags'>CSS</span>
                                <span className='flags'>Javascript</span>
                                <span className='flags'>React.js</span>
                                <span className='flags'>Springboot</span>
                                <span className='flags'>MySQL</span>
                                <span className='flags'>API</span>
                            </div>
                        </Tilt>
                    </Link>
                    <Link to='/projetos'>
                        <Tilt options={defaultOptions} className='card'>
                            <h4>MoonMeta</h4>
                            <img src="../src/assets/projects/p3.png" alt="" />
                            <div className='flags-container'>
                                <span className='flags'>HTML</span>
                                <span className='flags'>CSS</span>
                                <span className='flags'>React.js</span>
                                <span className='flags'>Springboot</span>
                                <span className='flags'>API</span>
                            </div>
                        </Tilt>
                    </Link>
                    <Link to='/projetos'>
                        <Tilt options={defaultOptions} className='card'>
                            <h4>Weather</h4>
                            <img src="../src/assets/projects/p4.png" alt="" />
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
                    <p>Sou um desenvolvedor front-end com mais de dois anos de experiência em desenvolvimento web através de estágio e projetos. Amo tecnologia e adoro aprender sobre novas ferramentas e linguagens.<br /><br />
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
            <section className="contact-section">
                <div className='contact-section-title'>
                    <h3>Contato</h3>
                </div>
                <div className='contact-elements'>
                    <div className='contact-form'>
                        <h4>Envie um e-mail:</h4>
                        <form onSubmit={sendEmail}>
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" id='nome' name='nome' placeholder='Digite seu nome' required onChange={(e) => setNome(e.target.value)}/>

                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" id='email' placeholder='Digite seu email' required onChange={(e) => setEmail(e.target.value)}/>

                            <label htmlFor="assunto">Assunto:</label>
                            <select name="assuntos" id="assuntos" required onChange={(e) => setAssuntos(e.target.value)}>
                                <option value="-"></option>
                                <option value="freelance">Freelance</option>
                                <option value="emprego">Proposta de emprego</option>
                                <option value="outro">Outro</option>
                            </select>

                            <label htmlFor="menssagem">Menssagem:</label>
                            <textarea name="menssagem" id="menssagem" rows="5" placeholder='Digite sua menssagem aqui.' required onChange={(e) => setMenssagem(e.target.value)}></textarea>

                            <input type="submit" value="Enviar" id='submit'/>
                        </form>
                    </div>
                    <div className='line'></div>
                    <div className='contact-info'>
                        <h4>Mais informações</h4>
                        <div>
                            <h5>E-mail:</h5>
                            <a href="mailto:lyulucca@gmail.com?subject=Contato%20do%20portfolio">lyulucca@gmail.com</a>
                        </div>
                        <div>
                            <h5>Celular:</h5>
                            <a href="https://wa.me/5513997178614?text=Olá%20Lucca%2c%20eu%20vim%20do%20seu%20portfolio%2e" target='_blank'>+55 (13)99717-8614</a>
                        </div>
                        <h4>Redes Sociais</h4>
                        <div>
                            <div><a href="https://www.linkedin.com/in/luccanunes/" target='_blank'><IoLogoLinkedin className='contact-section-icon'/></a></div>
                            <div><a href="https://github.com/Lukareliz" target='_blank'><IoLogoGithub className='contact-section-icon'/></a></div>
                            <div><a href="https://www.instagram.com/lukareliz_/" target='_blank'><IoLogoInstagram className='contact-section-icon'/></a></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Inicio