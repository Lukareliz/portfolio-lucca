import emailjs from '@emailjs/browser';
import { useState } from 'react';
import '../Form/contactSection.css'

import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactSection = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assuntos, setAssuntos] = useState('');
    const [mensagem, setMensagem] = useState('');
    const notify = () => toast.success("Enviado com sucesso.")

    function sendEmail(e) {
        const templateParams = {
            from_name: nome,
            email: email,
            subject: assuntos,
            message: mensagem
        }


        e.preventDefault()
        emailjs.send("service_zb63pz9", "template_sj3ldgd", templateParams, "g7c9-dw8Z78bT-pCZ")
            .then((response) => {
                console.log("Email enviado", response.status);
                notify();
                setNome('');
                setEmail('');
                setAssuntos('');
                setMensagem('');
                
            }, (err) => {
                console.log("Erro: ", err);
                alert("Erro ao enviar mensagem.")
            })
    }

    return (
        <>
            <section className="contact-section">
                <div className='contact-section-title'>
                    <h3>Contato</h3>
                </div>
                <div className='contact-elements'>
                    <div className='contact-form'>
                        <h4>Envie um e-mail:</h4>
                        <form onSubmit={sendEmail}>
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" id='nome' name='nome' value={nome} placeholder='Digite seu nome' required onChange={(e) => setNome(e.target.value)} />

                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" id='email' value={email} placeholder='Digite seu email' required onChange={(e) => setEmail(e.target.value)} />

                            <label htmlFor="assunto">Assunto:</label>
                            <select name="assuntos" id="assuntos" value={assuntos} required onChange={(e) => setAssuntos(e.target.value)}>
                                <option value="-"></option>
                                <option value="Freelance">Freelance</option>
                                <option value="Network">Network</option>
                                <option value="Emprego">Proposta de emprego</option>
                                <option value="Outro">Outro</option>
                            </select>

                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea name="mensagem" id="mensagem" rows="5" value={mensagem} placeholder='Digite sua mensagem aqui.' required onChange={(e) => setMensagem(e.target.value)}></textarea>

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
                        <h4>Idiomas</h4>
                        <p>Português</p>
                        <p>Inglês</p>
                        <h4>Redes Sociais</h4>
                        <div>
                            <div><a href="https://www.linkedin.com/in/luccanunes/" target='_blank'><IoLogoLinkedin className='contact-section-icon' /></a></div>
                            <div><a href="https://github.com/Lukareliz" target='_blank'><IoLogoGithub className='contact-section-icon' /></a></div>
                            <div><a href="https://www.instagram.com/lukareliz_/" target='_blank'><IoLogoInstagram className='contact-section-icon' /></a></div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer position="top-left"/>
        </>


    )
}

export default ContactSection