import React, { useState } from 'react';
import {
  Container,
  InfoContainer,
  LoginContainer,
  DevContainer,
  LoginInput,
  TopContainer,
  BottomContainer,
} from './login.Styles';
import CardDeveloper from '../../components/CardDeveloper/cardDeveloper';

import logo from '../../images/icons/logo.png';
import wizard from '../../images/developers/wizard.png';
import thief from '../../images/developers/thief.png';
import knight from '../../images/developers/knight.png';
import { loginDungeongrama } from '../../services/firebaseUse';

function Login() {
  const [user, setUser] = useState({ username: '', password: '' });

  function handleUserChange(event) {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  }

  function validateUser() {
    const len = user.password.length;

    if (len >= 6) {
      if(loginDungeongrama(user)){
        window.location.href = '/stage';
      }else{
        window.location.href = '/stage';
      }
    } else {
      alert('A senha precisa de pelo menos 6 caracteres');
    }
  }

  return (
    <Container>
      <InfoContainer>
        <h2>
          Um jeito criativo de jogar RPG e construir diagramas de atividade ao
          mesmo tempo.
        </h2>
      </InfoContainer>
      <LoginContainer>
        <TopContainer>
          <img src={logo} alt="" />
          <h1>Dungeongrama</h1>
        </TopContainer>
        <BottomContainer>
          <p>Usuário</p>
          <LoginInput name="username" onChange={handleUserChange}></LoginInput>
          <p>Senha</p>
          <LoginInput name="password" onChange={handleUserChange}></LoginInput>
          <p id="register">Não possui uma conta? Cadastre-se!</p>
          <button onClick={validateUser.bind(this)}>Entrar</button>
        </BottomContainer>
      </LoginContainer>
      <DevContainer>
        <img src={wizard} id="wizard" />
        <img src={knight} />
        <img src={thief} />
      </DevContainer>
    </Container>
  );
}

export default Login;
