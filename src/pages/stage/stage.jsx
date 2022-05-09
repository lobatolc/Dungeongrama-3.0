import React, { useEffect, useState } from 'react';

import { Container } from './stage.Styles';
import Popup from '../../components/Popup/popup';
import Box from '../../components/Box/box';
import { border, colors } from '../../global.Styles';
import { useValidateUser } from '../../contexts/userContext';
import { useStage } from '../../contexts/stageContext';

import { Link } from 'react-router-dom';

function Stage() {
  const [popupState, setPopupState] = useState(false);
  const { stageContext, setStageContext } = useStage();
  const [popup, setPopup] = useState();
  const [stageSelected, setStageSelected] = useState(9999);
  const [stage, setStage] = useState([
    {
      id : "0",
      title: "title 0",
      description: "Descricao 0"
    },
    {
      id : "1",
      title: "title 1",
      description: "Descricao 1"
    },
    {
      id : "2",
      title: "title 2",
      description: "Descricao 2"
    },
    {
      id : "3",
      title: "title 3",
      description: "Descricao 3"
    },
    {
      id : "4",
      title: "title 4",
      description: "Descricao 4"
    }
  ])
  const validateUser = useValidateUser();

  useEffect(() => {
    validateUser();
  }, []);

  useEffect(()=>{
    if(stageSelected!=9999){
      var auxPopup = []
      auxPopup = 
      <Popup
            title={stage[stageSelected].title}
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
              {stage[stageSelected].description}
            </p>
            <div id="buttonContainer">
            
            <button onClick={e=>{setStageContext(0)}}>
              <Link to="/gameplay">Iniciar</Link>
            </button>
            <button id="cancelButton" onClick={e=>{setPopupState(false)}}>
              Cancelar
            </button>
            </div>
            
          </Popup>
  
        setPopup(auxPopup)
        setPopupState(true)
        setStageSelected(9999)
    }
    
  }, [stageSelected])

  function openPopup(id){
    setStageSelected(id)
  }

 /* function startGame() {
    setPopupState(!popupState);
    setStageSelected
  } */

  return (
    <>
      {popupState ? (
        popup
      ) : null}
      <Container>
        <h1 id="title">Fases</h1>
        <p id="text">
        Boas vindas ao Dungeongrama! Este site foi desenvolvido com o auxílio do professor e mestre Anderson Costa, 
        juntamente de Ajax Lima, Larissa Nascimento e Lucas Lobato. O intuito do Dungeongrama é ajudar no ensino de 
        diagramas de atividade e, para isso, você será convidado a desafiar-se numa série de exercícios que 
        ensinar-lhe-ão o passo-a-passo no desenvolvimento desse diagrama da UML. Cada fase possui um problema para ser resolvido, 
        então leia com muita atenção antes de iniciá-la. Porém, não se preocupe, você pode ler o problema novamente no botão "?" 
        presente no canto superior da tela durante as partidas. Para pontuar, é necessário montar o diagrama na ordem correta. 
        O temporizador influencia sua pontuação final, diminuindo os seus pontos conforme o tempo passa. 
        Caso pontue bastante, poderá entrar no nosso ranque de jogadores e orgulhar-se para seus colegas de classe. 
        Sem mais enrolação, boa jogatina!
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
              <button onClick={e=>{setStageSelected(0)}}>Jogar</button>
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
