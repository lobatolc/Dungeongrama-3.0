import React, { useEffect, useState } from 'react';

import { Container } from './stage.Styles';
import Popup from '../../components/Popup/popup';
import Box from '../../components/Box/box';
import { border, colors } from '../../global.Styles';
import { useValidateUser } from '../../contexts/userContext';

import { Link } from 'react-router-dom';

function Stage() {
  const [popupState, setPopupState] = useState(false);
  const validateUser = useValidateUser();

  useEffect(() => {
    validateUser();
  }, []);

  function startGame() {
    setPopupState(!popupState);
  }

  return (
    <>
      {popupState ? (
        <Popup
          title={'testes'}
          className={'popupHelper'}
          width={'30rem'}
          widthHeader={'32rem'}
          widthContainer={'30rem'}
          heightContainer={'30rem'}
          height={'30rem'}
          popupState={popupState}
          setPopupState={setPopupState}
        >
          <p id="stageDescription">
            Ser feliz é uma responsabilidade muito grande. Pouca gente tem
            coragem. Tenho coragem mas com um pouco de medo. Pessoa feliz é quem
            aceitou a morte. Quando estou feliz demais, sinto uma angústia
            amordaçante: assusto-me. Sou tão medrosa. Tenho medo de estar viva
            porque quem tem vida um dia morre. E o mundo me violenta.
          </p>
          <button>
            <Link to="/gameplay">Iniciar</Link>
          </button>
        </Popup>
      ) : null}
      <Container>
        <h1 id="title">Fases</h1>
        <p id="text">
          Você é Adelina Shatterstaff, exímia lutadora e ex comandante militar. 
          Ainda lhe falta ar para pensar em tudo que aconteceu nos últimos dias, 
          mas sua legião de homens fracassou na principal missão de expansão do seu reino contra Alphenia, 
          o império adversário. Exilada do seu antigo posto, 
          vagando pela circunvizinhança você se depara com uma cidade devastada, mas sem vestígios de ataque inimigo. 
          Contudo, haviam runas mal escritas entre as ruas e os pilares das casas que ainda resistiam. 
          Você as reconhece do campo de batalha em que foi derrotada e sua cabeça começa a doer novamente ao pensar no que aconteceu. 
          Guerreiros leais matando seus companheiros, homens habilidosos incapazes de levantar a espada contra o inimigo 
          e...meio exército sumindo? Ainda confusa, você se retira dali em busca de respostas ou, talvez, em busca de alguém.
        </p>
        <div id="boxes">
          <Box
            title={'teste'}
            width={'17.5rem'}
            height={'22.5rem'}
            widthHeader={'19rem'}
            border={border.color.lilac}
            bgColor={colors.purple}
            color={'white'}
          >
            <div>
              <p>Seus status</p>
              <p>Min. Tempo: 00:02:31</p>
              <p>Qtd. Partidas: 3</p>
              <p>Máx. Acerto: 100%</p>
              <p>Pontuação: 1000</p>
            </div>
            <div id="button">
              <button onClick={startGame.bind(this)}>Jogar</button>
            </div>
          </Box>
          <Box
            title={'teste'}
            width={'17.5rem'}
            height={'22.5rem'}
            widthHeader={'19rem'}
            border={border.color.lilac}
            bgColor={colors.purple}
            color={'black'}
          />
        </div>
      </Container>
    </>
  );
}

export default Stage;
