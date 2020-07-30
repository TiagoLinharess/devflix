import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/dev.png';
import './menu.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'

function Menu (){
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt='DevFlix Logo'></img>
            </Link>

            <Button as={Link} className='ButtonLink' to='/cadastro/video'>
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;