import React from 'react';
import Logo from '../../assets/Logo.png';
import ButtonLink from '../ButtonLink';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
    return(
        <nav className="Menu">
        <Link to="/">
         <img className="Logo"  src={Logo} alr="HavenFlix logo"/>
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo vídeo
        </Button>
        </nav>
    );
}

export default Menu;