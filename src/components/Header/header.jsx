import React from 'react';
import { Container } from './header.Styles';
import logo from '../../images/icons/logo.png';
import { logOutDungeongrama } from '../../services/firebaseUse';
import { Link } from 'react-router-dom';
import { useNotifys } from '../../contexts/notifyContext';
import { useCookies } from 'react-cookie';

function Header() {
  const { notifys, setNotifys } = useNotifys();
  const [, , remove] = useCookies(['user', 'logged']);
  
  function logOut() {
    const error = logOutDungeongrama();
    if(error == null){
      setNotifys({
        type: "info",
        log: "Obrigado pelo tempo dedicado. Até a próxima!",
        time: Date.now(),
      })
      remove('user');
      remove('logged');
    }else{
      setNotifys({
        type: "error",
        log: error,
        time: Date.now(),
      })
    }
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
