import React, { useEffect, useState } from 'react';

import { Container } from './stage.Styles';
import Popup from '../../components/Popup/popup';
import Box from '../../components/Box/box';
import { border, colors } from '../../global.Styles';
import { useValidateUser } from '../../contexts/userContext';
import { useStage } from '../../contexts/stageContext';
import initial from '../../images/diagrams/initialActivity.png';
import final from '../../images/diagrams/finalActivity.png';
import { Link } from 'react-router-dom';
import { useUserCredential } from '../../contexts/userContext';
import { getUserInRealtimeDatabase } from '../../services/firebaseUse';
import { useNotifys } from '../../contexts/notifyContext';

function Stage() {
  const [popupState, setPopupState] = useState(false);
  const { stageContext, setStageContext } = useStage();
  const [popup, setPopup] = useState();
  const [stageSelected, setStageSelected] = useState(9999);
  const {userCredential, setUserCretendial} = useUserCredential();
  const [stageBox, setStageBox] = useState()
  const { notifys, setNotifys } = useNotifys();
  const stageDescription = [
    [<div className='zeroContainer'>
      <p>Ao começar a construção de um diagrama de atividades, a primeira atividade a ser posicionada deve ser sempre a <strong>atividade inicial</strong>, que é simbolizada desta forma:</p>
      <img src={initial}/>
      <p>Da mesma forma, encerramos o diagrama com a <strong>atividade final</strong>, que é representada assim:</p>
      <img src={final}/>
      <p>É preciso se atentar para a diferença entre as duas atividades. O símbolo de início é um círculo totalmente preenchido, enquanto que o símbolo de fim não é. Com isso em mente, complete o diagrama desta fase.</p>
    </div>]
  ]

  const [stage, setStage] = useState([
    {
      id : "0",
      title: "Atividades de Início e Fim",
      description: stageDescription[0]
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


  function showNotify(type, log){
    setNotifys({
      type: type,
      log: log,
      time: Date.now(),
    })
  }

  function reciveStages(){
  
    Promise.resolve(getUserInRealtimeDatabase(userCredential)).then(function(value) {
    
 
      const stages = Object.values(value[5])
      var auxStages = []
      stages.forEach((st, index) =>{
        console.log(st)
        console.log(index)
  
        auxStages.push(
          <Box
            title={index > 9 ? "Fase "+index : "Fase 0"+index}
            width={'15rem'}
            height={'15rem'}
            widthHeader={'16rem'}
            border={border.color.lilac}
            bgColor={colors.purple}
            color={'white'}
          >
            <div>
              <p>Min. Tempo: {st.timeClear}</p>
              <p>Qtd. Partidas: 3</p>
              <p>Máx. Acerto: {st.percentComplete}%</p>
              <p>Pontuação: {st.score}</p>
            </div>
            <div id="button">
              <button className={'btnStartStage'+st.unlock} onClick={e=>{st.unlock? setStageSelected(index) : alert('aa')}}>Jogar</button>
            </div>
          </Box>
        )
        
      })
      setStageBox(auxStages)
    }, function(value) {
      // not called
      showNotify("error", "Houve um erro ao receber os dados de cada fase")
    });
  }

  useEffect(()=>{
    reciveStages()
  }, [])

  useEffect(()=>{
    if(stageSelected!=9999){
      
      var auxPopup = []
      auxPopup = 
      <Popup
            title={stage[stageSelected].title}
            className={'popupHelper'}
            width={'33rem'}
            widthHeader={'35rem'}
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
          {stageBox}
        </div>
      </Container>
    </>
  );
}

export default Stage;
