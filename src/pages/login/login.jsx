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
import ajax from '../../images/developers/ajax.jpg';
import lobato from '../../images/developers/lucas.jpg';
import larissa from '../../images/developers/larissa.jpg';
import { useNotifys } from '../../contexts/notifyContext';

import { loginDungeongrama, createUserFB, readUser } from '../../services/firebaseUse';
import { useUserCredential } from '../../contexts/userContext';
import { Redirect } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: '',
    logged: false,
  });
  const [developerState, setDeveloperState] = useState('');
  const { userCredential, setUserCredential } = useUserCredential();
  const { notifys, setNotifys } = useNotifys();

  const [developerInfo, setDeveloperInfo] = useState({
    informations: {
      dev: '',
      nameDev: '',
      func: '',
      links: [],
      phrase: '',
    },
    position: {
      top: 0,
      bottom: 0,
    },
  });

  function handleUserChange(event) {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  }

  async function createUser(event) {
    const len = user.password.length;

    if (len >= 6) {
      const [created, , error] = await createUserFB(user);
      if (created) {
        setNotifys({
          type: 'success',
          log: 'Usuário criado com sucesso!',
          time: Date.now(),
        });
      } else {
        setNotifys({
          type: 'error',
          log: error,
          time: Date.now(),
        });
      }
    } else {
      setNotifys({
        type: 'error',
        log: 'A senha precisa de pelo menos 6 caracteres',
        time: Date.now(),
      });
    }
  }

  async function validateUser(event) {
    const len = user.password.length;

    if (len >= 6) {
      await loginDungeongrama(user).then((loginReturns) => {
        const [logged, credential, error] = loginReturns;
        if (logged) {
          setUserCredential(credential);
          
          setNotifys({
            type: 'success',
            log: 'Login efetuado com sucesso!',
            time: Date.now(),
          });
          setUser({ ...user, logged });
        } else {
          setNotifys({
            type: 'error',
            log: error,
            time: Date.now(),
          });
        }
      });
    } else {
      setNotifys({
        type: 'error',
        log: 'A senha precisa de pelo menos 6 caracteres',
        time: Date.now(),
      });
    }
  }

  return (
    <>
      {user.logged ? <Redirect to="/stage" /> : null}
      {developerState != '' ? (
        <CardDeveloper
          dev={developerState}
          setDev={setDeveloperState}
        ></CardDeveloper>
      ) : null}
      <Container>
        <InfoContainer>
          <h2>
            Um jeito criativo de construir diagramas de atividade e jogar RPG ao
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
            <LoginInput
              name="username"
              onChange={handleUserChange}
            ></LoginInput>
            <p>Senha</p>
            <LoginInput
              name="password"
              type="password"
              onChange={handleUserChange}
            ></LoginInput>
            <p id="register" onClick={createUser}>
              Não possui uma conta? Cadastre-se!
            </p>
            <button onClick={validateUser}>Entrar!</button>
          </BottomContainer>
        </LoginContainer>
        <DevContainer>
          <img
            src={wizard}
            id="wizard"
            onClick={(e) => {
              setDeveloperState({
                name: 'Ajax Lima',
                image: ajax,
                func: 'Back-End',
                links: [
                  'https://www.linkedin.com/in/ajaxlima/',
                  'https://github.com/Chamoouske',
                ],
                phrase: 'Com grandes linhas de código vêm grandes bugs.',
              });
            }}
          />

          <img
            src={knight}
            id="knight"
            onClick={(e) => {
              setDeveloperState({
                name: 'Larissa Nascimento',
                image: larissa,
                func: 'Analista',
                links: [
                  'https://www.linkedin.com/in/larissa-nascimento-380a53226/',
                  '#',
                ],
                phrase: 'Professor, esse site merece uma nota 10.',
              });
            }}
          />

          <img
            src={thief}
            id="thief"
            onClick={(e) => {
              setDeveloperState({
                name: 'Lucas Cordeiro',
                image: lobato,
                func: 'Front-End',
                links: [
                  'https://www.linkedin.com/in/lucas-lobato/',
                  'https://github.com/lobatolc',
                ],
                phrase: 'Comecei este site com 15 anos. Amanhã faço 23.',
              });
            }}
          />
        </DevContainer>
      </Container>
    </>
  );
}

export default Login;
