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
          Selecione uma fase para jogar o Dungeongrama. As fases são diferentes
          entre si, cada uma possui um problema a ser resolvido através do
          diagrama de atividade que você irá montar. Para concluir a fase, basta
          posicionar cada atividade com coesão. Tenha em mente que a cada
          partida, seu ranque na classificação dos jogadores pode ser alterado.
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
