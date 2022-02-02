import React from 'react';
import { 
  Container, 
  InfoContainer, 
  LoginContainer,
  DevContainer,
  LoginInput,
  TopContainer,
  BottomContainer
} from './login.Styles';
import logo from '../../images/icons/logo.png';
import ajax from '../../images/developers/wizard.png';
import lobato from '../../images/developers/thief.png';
import larissa from '../../images/developers/knight.png';
function login() {
  return( 
    <Container>
      <InfoContainer>
      <h2>Um jeito criativo de jogar RPG e construir diagramas de atividade ao mesmo tempo.</h2>
      </InfoContainer>
      <LoginContainer>
        <TopContainer>
          <img src={logo} alt=""/>
          <h1>Dungeongrama</h1>
        </TopContainer>
        <BottomContainer>
          <p>Usuário</p>
          <LoginInput></LoginInput>
          <p>Senha</p>
          <LoginInput type="password"></LoginInput>
          <p id='register'>Não possui uma conta? Cadastre-se!</p>
          <button>Entrar</button>
        </BottomContainer>
      </LoginContainer>
      <DevContainer>
        <img src={ajax} id="wizard"/>
        <img src={larissa}/>
        <img src={lobato}/>
      </DevContainer>
    </Container>
  )}

export default login;