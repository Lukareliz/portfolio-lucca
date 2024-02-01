import React, { useState, useEffect } from 'react';
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";

import '../NavIcon/navicon.css'

const NavIcon = () => {
    const [scrolling, setScrolling] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showContent = () => setClicked(!clicked);

    return (
        <>
            <IoReorderThree className={`icon_nav ${scrolling ? 'scrolling' : ''}`} onClick={showContent} />
            <div className={`icon_content ${clicked && (window.scrollY > 50) ? 'clicked' : ''}`}>
                <ul>
                    <li><Link to="/projetos" onClick={showContent}>Projetos</Link></li>
                    <li><Link to="/Sobre" onClick={showContent}>Sobre</Link></li>
                    <li><Link to="/Contato" onClick={showContent}>Contato</Link></li>
                </ul>
            </div>
        </>
    )
}

export default NavIcon