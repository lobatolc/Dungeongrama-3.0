import React from 'react';
import { Container } from './header.Styles';
import logo from '../../images/icons/logo.png';

function Header() {
  return(
    <Container>
        <div>
            <img src={logo} alt=""/>
            <h1>Dungeongrama</h1>
        </div>
        <div>
            <a>Jogar</a>
            <a>Classificação</a>
            <a>Sair</a>
        </div>
    </Container>
  )}

export default Header;