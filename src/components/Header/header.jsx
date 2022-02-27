import React from 'react';
import { Container } from './header.Styles';
import logo from '../../images/icons/logo.png';
import { logOutDungeongrama } from '../../services/firebaseUse';
import { Link } from 'react-router-dom';

function Header() {
  function logOut() {
    logOutDungeongrama();
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="" />
        <h1>Dungeongrama</h1>
      </div>
      <div>
        <Link to="/stage">Jogar</Link>
        <Link to="/ranking">Classificação</Link>
        <Link onClick={logOut} to="/">
          Sair
        </Link>
      </div>
    </Container>
  );
}

export default Header;
