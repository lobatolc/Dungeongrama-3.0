import React, { useEffect, useState } from 'react';

import { Container } from './stage.Styles';
import Popup from '../../components/Popup/popup';
import Box from '../../components/Box/box';
import { border, colors } from '../../global.Styles';
import { useValidateUser } from '../../contexts/userContext';
import { useStage } from '../../contexts/stageContext';
import initial from '../../images/diagrams/initialActivity.png';
import final from '../../images/diagrams/finalActivity.png';
import act from '../../images/diagrams/activitys.png';
import dec from '../../images/diagrams/decision.png';
import horizontalDivider from '../../images/diagrams/horizontalBarDivider.png'
import horizontalUnite from '../../images/diagrams/horizontalBarUnite.png'
import verticalDivider from '../../images/diagrams/verticalBarDivider.png'
import verticalUnite from '../../images/diagrams/verticalBarUnite.png'
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
    </div>],
     [<div className='oneContainer'>
     <p>As demais atividades são posicionadas <strong>depois da atividade inicial e antes da atividade final</strong>, logicamente. Cada atividade representa uma ação dentro do seu sistema
e essas ações são sempre verbos no infinitivo. Ex: Correr, Andar e Pular. As atividades são simbolizadas assim:
</p>
     <img src={act} />
     <p>Existe uma ligação que relaciona as atividades e descreve quando o fluxo segue de uma atividade para a outra. Essas ligações costumam ter uma seta indicando a direção. Escolha a atividade que melhor se encaixa no diagrama a seguir.</p>

   </div>],
   [<div className='twoContainer'>
   <p>As estruturas de decisões são utilizadas quando o usuário pode tomar uma atitude no sistema que mudará o fluxo a ser seguido. Um exemplo disso é em caixas de diálogo, que o usuário pode escolher entre fechá-las ou continuar o diálogo.
Elas são simbolizadas da seguinte forma: 
</p>
   <img src={dec} />
   <p>Utilize as estruturas a seguir, incluindo a estrutura de decisão, para concluir esta fase.
</p>
 </div>],
 [<div className='threeContainer'>
 <p>Existem dois tipos de barramentos, o primeiro deles serve para agrupar o fluxo de diferentes atividades que terminarão em outra atividade em comum, como no exemplo abaixo:
</p>
  <div className='imgContainer'>
    <img className='imgHorizontal' src={horizontalUnite} />
    <img  className='imgVertical' src={verticalUnite} />

  </div>
 <p>O segundo tipo funciona de forma contrária ao primeiro. Ao invés de agrupar, ele separa o fluxo de uma atividade em vários fluxos para várias atividades. Com isso em mente, complete o diagrama a seguir.
</p>
  <div className='imgContainer'>
    <img  className='imgHorizontal' src={horizontalDivider} />
    <img   className='imgVertical' src={verticalDivider}/>
  </div>

</div>],
  ]

  const [stage, setStage] = useState([
    {
      id : "0",
      title: "Atividades de Início e Fim",
      description: stageDescription[0]
     },
    {
      id : "1",
      title: "Atividades",
      description: stageDescription[1]
    },
    {
      id : "2",
      title: "Estrutura de Decisão",
      description: stageDescription[2]
    },
    {
      id : "3",
      title: "Estrutura de Barra",
      description: stageDescription[3]
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
      

      stages.forEach((st) =>{
        const [, stageNumber] = st.stage.split(' ')
   
        st.stage = stageNumber
     
      })

      const aux = sortStages(stages)

      var auxStages = []
      stages.forEach((st, index) =>{
        
  
        auxStages.push(
          <Box
            title={'Fase '+st.stage}
            width={'15rem'}
            height={'15rem'}
            widthHeader={'16rem'}
            border={border.color.lilac}
            bgColor={colors.purple}
            color={'white'}
          >
            <div>
              <p>Tempo: {st.timeClear}</p>
              <p>Completude: {st.percentComplete}%</p>
              <p>Tentativas:</p>
              <p>Pontuação: {st.score}</p>
            </div>
            <div id="button">
              <button className={'btnStartStage'+st.unlock} onClick={e=>{st.unlock? setStageSelected(index) : showNotify("info", "Para jogar essa fase, é necessário passar todas as fases anteriores")}}>Jogar</button>
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

function sortStages(data) {
  return data.sort((a, b) => a.stage - b.stage);
}

  useEffect(()=>{
    if(stageSelected!=9999){
      
   
      var auxPopup = []
      auxPopup = 
      <Popup
            title={stage[stageSelected].title}
            className={'popupHelper'}
            width={'43rem'}
            widthHeader={'44rem'}
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
            
            <button onClick={e=>{setStageContext(stageSelected)}}>
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
        <div id="boxes">
          {stageBox}
        </div>
      </Container>
    </>
  );
}

export default Stage;
