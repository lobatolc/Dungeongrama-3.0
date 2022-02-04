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
            <a href="/stage">Jogar</a>
            <a href="/ranking">Classificação</a>
            <a href="/">Sair</a>
        </div>
    </Container>
  )}

export default Header;