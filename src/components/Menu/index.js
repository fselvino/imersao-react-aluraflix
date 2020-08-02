import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Logo from '../../assets/LogoMain.png';
import Button from './components/ButtonLink';

const Menu = () => (
  <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={Logo} alt="AluraFlix" />
    </Link>
    <Button className="ButtonLink" href="/cadastro/video">
      Novo video
    </Button>
  </nav>
);
export default Menu;
