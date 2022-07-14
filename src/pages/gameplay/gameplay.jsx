import React, { useEffect } from 'react';
import {
  Container,
  Inventory,
  Interface,
  Construct,
  BindContainer,
  VoidContainer,
  ActivityContainer,
  DecisionContainer,
  BarContainer,
  BallContainer,
  StaticActivityContainer,
} from './gameplay.Styles';
import Box from '../../components/Box/box';
import Activity from '../../components/Activity/activity';
import Decision from '../../components/Decision/decision';
import Bar from '../../components/Bar/bar';
import Bind from '../../components/Bind/bind';
import Ball from '../../components/Ball/ball';
import { useNotifys } from '../../contexts/notifyContext';
import { useUserCredential, useValidateUser } from '../../contexts/userContext';
import { useStage } from '../../contexts/stageContext';
import mute from '../../images/icons/mute.png';
import sound from '../../images/icons/sound.png';
import help from '../../images/icons/help.png';
import { colors, border } from '../../global.Styles';
import { useState } from 'react/cjs/react.development';
import soundtrack from '../../audio/music/soundtrack.mp3';
import arrow from '../../images/icons/arrow.png';
import {
  Tiles,
  Binds,
  Decisions,
  Activitys,
  Response,
  ElementsInventory,
  Bars,
  Balls,
  StaticActivity,
} from '../../models/models';
import { updateScoreInStage } from '../../services/firebaseUse';
import Popup from '../../components/Popup/popup';
import initial from '../../images/diagrams/initialActivity.png';
import final from '../../images/diagrams/finalActivity.png';
import act from '../../images/diagrams/activitys.png';
import { Link } from 'react-router-dom';
import dec from '../../images/diagrams/decision.png';
import horizontalDivider from '../../images/diagrams/horizontalBarDivider.png';
import horizontalUnite from '../../images/diagrams/horizontalBarUnite.png';
import verticalDivider from '../../images/diagrams/verticalBarDivider.png';
import verticalUnite from '../../images/diagrams/verticalBarUnite.png';

let firstClickButtonFinish = 0;
function Gameplay() {
  const [popup, setPopup] = useState();
  const [popupState, setPopupState] = useState(false);

  const [statusPopup, setStatusPopup] = useState();
  const [statusPopupState, setStatusPopupState] = useState(false);

  const stageDescription = [
    [
      <div className="zeroContainer">
        <p>
          Ao começar a construção de um diagrama de atividades, a primeira
          atividade a ser posicionada deve ser sempre a{' '}
          <strong>atividade inicial</strong>, que é simbolizada desta forma:
        </p>
        <img src={initial} />
        <p>
          Da mesma forma, encerramos o diagrama com a{' '}
          <strong>atividade final</strong>, que é representada assim:
        </p>
        <img src={final} />
        <p>
          É preciso se atentar para a diferença entre as duas atividades. O
          símbolo de início é um círculo totalmente preenchido, enquanto que o
          símbolo de fim não é. Com isso em mente, complete o diagrama desta
          fase.
        </p>
      </div>,
    ],
    [
      <div className="oneContainer">
        <p>
          As demais atividades são posicionadas{' '}
          <strong>
            depois da atividade inicial e antes da atividade final
          </strong>
          , logicamente. Cada atividade representa uma ação dentro do seu
          sistema e essas ações são sempre verbos no infinitivo. Ex: Correr,
          Andar e Pular. As atividades são simbolizadas assim:
        </p>
        <img src={act} />
        <p>
          Existe uma ligação que relaciona as atividades e descreve quando o
          fluxo segue de uma atividade para a outra. Essas ligações costumam ter
          uma seta indicando a direção. Escolha a atividade que melhor se
          encaixa no diagrama a seguir.
        </p>
      </div>,
    ],
    [
      <div className="twoContainer">
        <p>
          As estruturas de decisões são utilizadas quando o usuário pode tomar
          uma atitude no sistema que mudará o fluxo a ser seguido. Um exemplo
          disso é em caixas de diálogo, que o usuário pode escolher entre
          fechá-las ou continuar o diálogo. Elas são simbolizadas da seguinte
          forma:
        </p>
        <img src={dec} />
        <p>
          Utilize as estruturas a seguir, incluindo a estrutura de decisão, para
          concluir esta fase.
        </p>
      </div>,
    ],
    [
      <div className="threeContainer">
        <p>
          Existem dois tipos de barramentos, o primeiro deles serve para agrupar
          o fluxo de diferentes atividades que terminarão em outra atividade em
          comum, como no exemplo abaixo:
        </p>
        <div className="imgContainer">
          <img className="imgHorizontal" src={horizontalUnite} />
          <img className="imgVertical" src={verticalUnite} />
        </div>
        <p>
          O segundo tipo funciona de forma contrária ao primeiro. Ao invés de
          agrupar, ele separa o fluxo de uma atividade em vários fluxos para
          várias atividades. Com isso em mente, complete o diagrama a seguir.
        </p>
        <div className="imgContainer">
          <img className="imgHorizontal" src={horizontalDivider} />
          <img className="imgVertical" src={verticalDivider} />
        </div>
      </div>,
    ],
  ];

  const [stage, setStage] = useState([
    {
      id: '0',
      title: 'Atividades de Início e Fim',
      description: stageDescription[0],
    },
    {
      id: '1',
      title: 'Atividades',
      description: stageDescription[1],
    },
    {
      id: '2',
      title: 'Estrutura de Decisão',
      description: stageDescription[2],
    },
    {
      id: '3',
      title: 'Estrutura de Barra',
      description: stageDescription[3],
    },
    {
      id: '4',
      title: 'title 4',
      description: 'Descricao 4',
    },
  ]);

  const [inventory, setInventory] = useState([]);
  const [construct, setConstruct] = useState([]);
  const [template, setTemplate] = useState([]);
  const [audio, setAudio] = useState(false);
  const { notifys, setNotifys } = useNotifys();
  const { userCredential, setUserCretendial } = useUserCredential();
  const { stageContext, setStageContext } = useStage();

  useEffect(() => {
    firstClickButtonFinish = 0;
    updateScoreInStage(userCredential, 'stage ' + (stageContext + 1));
  }, []);

  const [status, setStatus] = useState({ score: '', countAttempts: '', percent: '', time: '' });
  const [auxTimer, setAuxTimer] = useState();

  const [sei, setSei] = useState();
  const [time, setTime] = useState(0);
  const [counter, setCounter] = useState(0);
  const [stopwatch, setStopwatch] = useState('');
  var auxTime = 0;
  useEffect(() => {
    setInterval(() => {
      startTimer();
    }, 1000);

    function startTimer() {
      auxTime++;

      setTime(auxTime);
      if (auxTime > counter) {
        setCounter(auxTime);
      }
    }
  }, [auxTimer]);

  useEffect(() => {
    var auxStopwatch = [];
    auxStopwatch.push(<p id="stopwatch">{counter}</p>);
    setStopwatch(auxStopwatch);
  }, [counter]);

  const dragActivityContainer = {
    onDragOver: (e) => {
      e.preventDefault();
    },
    onDrop: (e) => {
      moveToContainer(e);
    },
  };

  function moveToContainer(e) {
    e.preventDefault();
    var act = document.getElementById(localStorage.getItem('id'));
    act.style.height = '100%';
    act.style.margin = '0rem';
    e.target.appendChild(act);
    containerStyler();
    localStorage.removeItem('id');
  }

  const dragInventory = {
    onDragOver: (e) => {
      e.preventDefault();
    },
    onDrop: (e) => {
      moveToInventory(e);
    },
  };

  function moveToInventory(e) {
    e.preventDefault();
    var act = document.getElementById(localStorage.getItem('id'));

    if (e.target.id == 'inventoryBox') {
      act.style.height = '4rem';
      act.style.marginBottom = '0.5rem';
      e.target.appendChild(act);
      containerStyler();
    }
  }

  async function verifyDiagram(node) {
    var activityContainers = document.getElementsByClassName('actContainers');

    var error = '';
    for (let i = 0; i < activityContainers.length; i++) {
      // console.log(activityContainers[i].children)
      if (activityContainers[i].children.length == 0) {
        error = 'Preencha todos os espaços com atividade!';
        updateScoreInStage(
          userCredential,
          'stage ' + (stageContext + 1),
          undefined,
          undefined,
          undefined,
          firstClickButtonFinish
        );
      }
    }

    if (error != '') {
      setNotifys({
        type: 'error',
        log: error,
        time: Date.now(),
      });
    } else {
      var resposta = Response(stageContext);
      var percent = 0;

      for (let i = 0; i < activityContainers.length; i++) {
        var elements = document.getElementsByClassName(resposta[i]);

        if (
          elements[0].className == activityContainers[i].children[0].className
        ) {
          percent++;
        } 
      }

      const percentComplete =
        parseInt(percent) / parseInt(activityContainers.length);
        var auxStage = stageContext + 1;

            var auxStopwatch = formatStopWatch(time)
              

           
        Promise.resolve(updateScoreInStage(
          userCredential,
          'stage ' + auxStage,
          time,
          percentComplete.toFixed(2),
          false,
          firstClickButtonFinish
        )).then(function(value) {
          if (percentComplete > 0) {
            var auxScore = value[0] ;
            var countAttempts = value[1]
    
            
           
    
    
           // console.log(percentComplete);
           // console.log(auxScore);
            auxScore = Math.round(auxScore);
            auxScore = auxScore < 0 ? 0 : auxScore;
            setStatus({
              score: auxScore,
              countAttempts: countAttempts,
              percent: percentComplete.toFixed(2) * 100 + '%',
              time: auxStopwatch,
            });
    
            setStatusPopupState(true);
          } else {
            updateScoreInStage(
              userCredential,
              'stage ' + auxStage,
              undefined,
              undefined,
              undefined,
              firstClickButtonFinish
            );
            setNotifys({
              type: 'error',
              log: 'Você não acertou a porcentagem mínima para finalizar, continue tentando!',
              time: Date.now(),
            });
          }
        }, function(value) {
          // not called
         
        });

      
    }
    firstClickButtonFinish = undefined;
  }

  function formatStopWatch(time){
    var auxHour =(time / 3600).toFixed(0);
    var auxMinute = parseInt((time % 3600) / 60);
    var auxSecond = parseInt((time % 3600) % 60);
    var auxStopwatch =
        (auxHour > 9 ? auxHour : '0' + auxHour) +
            ' : ' +
        (auxMinute > 9 ? auxMinute : '0' + auxMinute) +
            ' : ' +
        (auxSecond > 9 ? auxSecond : '0' + auxSecond);
    return auxStopwatch
}

  function containerStyler() {
    var activityContainers = document.getElementsByClassName('actContainers');

    for (let i = 0; i < activityContainers.length; i++) {
      if (
        activityContainers[i].firstChild != null &&
        activityContainers[i].firstChild.className != 'act'
      ) {
        activityContainers[i].style.border =
          '0rem dashed ' + colors.purple + '50';
      } else {
        activityContainers[i].style.border =
          '0.2rem dashed ' + colors.purple + '50';
      }
    }
  }

  const dragEvents = {
    onDragEnter: (e) => {
      e.preventDefault(e);
    },
    onDragStart: (e) => {
      dragStart(e);
    },
    onDragLeave: (e) => {
      e.preventDefault(e);
    },
    onDragOver: (e) => {
      e.preventDefault(e);
    },
    onDrop: (e) => {
      e.preventDefault(e);
    },
  };

  function dragStart(e) {
    localStorage.removeItem('id');
    localStorage.setItem('id', e.target.getAttribute('id'));
  }

  useEffect(() => {
    var auxState = [];
    var activityARRAY = Activitys(stageContext);

    var graphARRAY = ElementsInventory(stageContext);

    activityARRAY.map((act) => {
      auxState.push(<Activity name={act} drag={true} />);
    });

    graphARRAY.map((grap, index) => {
      switch (grap.id) {
        case 'bar':
          auxState.push(
            <BarContainer
              className={
                grap.isVertical == true ? 'verticalBar' : 'horizontalBar'
              }
              id={grap.id + index}
              {...dragEvents}
              draggable={grap.drag}
              h={'4rem'}
              marginB={'1rem'}
              firstBind={grap.firstBind}
              lastBind={grap.lastBind}
              firstArrow={grap.firstArrow}
              lastArrow={grap.lastArrow}
              isLeftFirst={grap.isLeftFirst}
              isLeftLast={grap.isLeftLast}
              isInitialFirst={grap.isInitialFirst}
              isInitialLast={grap.isInitialLast}
              isVertical={grap.isVertical}
            >
              <div id="firstBindContainer">
                <div id="firstBarBind">
                  <div id="arrowContainer">
                    <img src={arrow} draggable={false} />
                  </div>
                </div>
              </div>
              <Bar isVertical={grap.isVertical} />
              <div id="lastBindContainer">
                <div id="lastBarBind">
                  <div id="arrowContainer">
                    <img src={arrow} draggable={false} />
                  </div>
                </div>
              </div>
            </BarContainer>
          );
          break;

        case 'bind':
          auxState.push(
            <BindContainer
              className={grap.bindDirection + grap.description}
              area={null}
              {...dragEvents}
              draggable={grap.drag}
              id={grap.bindDirection + grap.description}
              h={'4rem'}
              marginB={'1rem'}
            >
              <Bind
                bindType={grap.bindDirection}
                description={grap.description}
                descPosition={grap.descPosition}
                isArrow={grap.isArrow}
              />
            </BindContainer>
          );
          break;

        case 'decision':
          // const aux = grap.firstBind+grap.secondBind+grap.thirdBind+grap.lastBind+grap.firstArrow+grap.secondArrow+grap.thirdArrow+grap.lastArrow
          auxState.push(
            <DecisionContainer
              className={'decision'}
              id={grap.id + index}
              {...dragEvents}
              draggable={grap.drag}
              h={'4rem'}
              marginB={'1rem'}
              firstBind={grap.firstBind}
              secondBind={grap.secondBind}
              thirdBind={grap.thirdBind}
              lastBind={grap.lastBind}
              firstArrow={grap.firstArrow}
              secondArrow={grap.secondArrow}
              thirdArrow={grap.thirdArrow}
              lastArrow={grap.lastArrow}
              isLeftFirst={grap.isLeftFirst}
              isLeftSecond={grap.isLeftSecond}
              isLeftThird={grap.isLeftThird}
              isLeftLast={grap.isLeftLast}
            >
              <div id="firstBindContainer">
                <div id="firstBind">
                  <div id="arrowContainer">
                    <img src={arrow} draggable={false} />
                  </div>
                </div>
              </div>
              <div id="auxSecondThird">
                <div id="secondBindContainer">
                  <div id="secondBind">
                    <div id="arrowContainer">
                      <img src={arrow} draggable={false} />
                    </div>
                  </div>
                </div>
                <div id="decision">
                  <Decision />
                </div>
                <div id="thirdBindContainer">
                  <div id="thirdBind">
                    <div id="arrowContainer">
                      <img src={arrow} draggable={false} />
                    </div>
                  </div>
                </div>
              </div>

              <div id="lastBindContainer">
                <div id="lastBind">
                  <div id="arrowContainer">
                    <img src={arrow} draggable={false} />
                  </div>
                </div>
              </div>
            </DecisionContainer>
          );
          break;

        case 'ball':
          auxState.push(
            <BallContainer
              id={grap.id + index}
              {...dragEvents}
              draggable={grap.drag}
              h={'4rem'}
              marginB={'1rem'}
              className={grap.isInitial == true ? 'initialBall' : 'finalBall'}
              firstBind={grap.firstBind}
              secondBind={grap.secondBind}
              thirdBind={grap.thirdBind}
              lastBind={grap.lastBind}
              firstArrow={grap.firstArrow}
              secondArrow={grap.secondArrow}
              thirdArrow={grap.thirdArrow}
              lastArrow={grap.lastArrow}
              isLeftFirst={grap.isLeftFirst}
              isLeftSecond={grap.isLeftSecond}
              isLeftThird={grap.isLeftThird}
              isLeftLast={grap.isLeftLast}
            >
              <div id="firstBindContainer">
                <div id="firstBind">
                  <div id="arrowContainer">
                    <img src={arrow} draggable={false} />
                  </div>
                </div>
              </div>
              <div id="auxSecondThird">
                <div id="secondBindContainer">
                  <div id="secondBind">
                    <div id="arrowContainer">
                      <img src={arrow} draggable={false} />
                    </div>
                  </div>
                </div>
                <div id="ball">
                  <Ball isInitial={grap.isInitial} />
                </div>
                <div id="thirdBindContainer">
                  <div id="thirdBind">
                    <div id="arrowContainer">
                      <img src={arrow} draggable={false} />
                    </div>
                  </div>
                </div>
              </div>
              <div id="lastBindContainer">
                <div id="lastBind">
                  <div id="arrowContainer">
                    <img src={arrow} draggable={false} />
                  </div>
                </div>
              </div>
            </BallContainer>
          );
          break;
      }
    });
    setInventory(
      <div {...dragInventory} id="inventoryBox">
        {auxState}
      </div>
    );

    const tiles = Tiles(stageContext);

    var staticActivityARRAY = StaticActivity(stageContext);
    var countStaticActivity = 0;

    var auxTiles = [];
    var auxTemplate = [];

    var countBind = 0;
    var bindARRAY = Binds(stageContext);

    var countDecision = 0;
    var decisionARRAY = Decisions(stageContext);

    var countBar = 0;
    var barARRAY = Bars(stageContext);

    var countBall = 0;
    var ballARRAY = Balls(stageContext);

    tiles.forEach((tile, index) => {
      if (tile == 'void') {
        auxTiles.push(<VoidContainer area={tile + index}></VoidContainer>);
        auxTemplate.push(tile + index);
      } else if (tile == 'activity') {
        auxTiles.push(
          <ActivityContainer
            {...dragActivityContainer}
            area={tile + index}
            className="actContainers"
            title="Posicione um elemento aqui"
          ></ActivityContainer>
        );
        auxTemplate.push(tile + index);
      } else if (tile == 'staticActivity') {
        auxTiles.push(
          <StaticActivityContainer area={tile + index}>
            <Activity
              name={staticActivityARRAY[countStaticActivity].name}
              drag={false}
              heightMaximus={true}
            />
          </StaticActivityContainer>
        );
        auxTemplate.push(tile + index);
        countStaticActivity++;
      } else if (tile == 'decision') {
        auxTiles.push(
          <DecisionContainer
            firstBind={decisionARRAY[countDecision].firstBind}
            secondBind={decisionARRAY[countDecision].secondBind}
            thirdBind={decisionARRAY[countDecision].thirdBind}
            lastBind={decisionARRAY[countDecision].lastBind}
            firstArrow={decisionARRAY[countDecision].firstArrow}
            secondArrow={decisionARRAY[countDecision].secondArrow}
            thirdArrow={decisionARRAY[countDecision].thirdArrow}
            lastArrow={decisionARRAY[countDecision].lastArrow}
            isLeftFirst={decisionARRAY[countDecision].isLeftFirst}
            isLeftSecond={decisionARRAY[countDecision].isLeftSecond}
            isLeftThird={decisionARRAY[countDecision].isLeftThird}
            isLeftLast={decisionARRAY[countDecision].isLeftLast}
          >
            <div id="firstBindContainer">
              <div id="firstBind">
                <div id="arrowContainer">
                  <img src={arrow} />
                </div>
              </div>
            </div>
            <div id="auxSecondThird">
              <div id="secondBindContainer">
                <div id="secondBind">
                  <div id="arrowContainer">
                    <img src={arrow} />
                  </div>
                </div>
              </div>
              <div id="decision">
                <Decision />
              </div>
              <div id="thirdBindContainer">
                <div id="thirdBind">
                  <div id="arrowContainer">
                    <img src={arrow} />
                  </div>
                </div>
              </div>
            </div>

            <div id="lastBindContainer">
              <div id="lastBind">
                <div id="arrowContainer">
                  <img src={arrow} />
                </div>
              </div>
            </div>
          </DecisionContainer>
        );
        auxTemplate.push(tile + index);
        countDecision++;
      } else if (tile == 'bar') {
        auxTiles.push(
          <BarContainer
            id={tile + index}
            firstBind={barARRAY[countBar].firstBind}
            lastBind={barARRAY[countBar].lastBind}
            firstArrow={barARRAY[countBar].firstArrow}
            lastArrow={barARRAY[countBar].lastArrow}
            isLeftFirst={barARRAY[countBar].isLeftFirst}
            isLeftLast={barARRAY[countBar].isLeftLast}
            isInitialFirst={barARRAY[countBar].isInitialFirst}
            isInitialLast={barARRAY[countBar].isInitialLast}
            isVertical={true}
          >
            <div id="firstBindContainer">
              <div id="firstBarBind">
                <div id="arrowContainer">
                  <img src={arrow} draggable={false} />
                </div>
              </div>
            </div>
            <Bar isVertical={barARRAY[countBar].isVertical} />
            <div id="lastBindContainer">
              <div id="lastBarBind">
                <div id="arrowContainer">
                  <img src={arrow} draggable={false} />
                </div>
              </div>
            </div>
          </BarContainer>
        );
        auxTemplate.push(tile + index);
        countBar++;
      } else if (tile == 'ball') {
        auxTiles.push(
          <BallContainer
            firstBind={ballARRAY[countBall].firstBind}
            secondBind={ballARRAY[countBall].secondBind}
            thirdBind={ballARRAY[countBall].thirdBind}
            lastBind={ballARRAY[countBall].lastBind}
            firstArrow={ballARRAY[countBall].firstArrow}
            secondArrow={ballARRAY[countBall].secondArrow}
            thirdArrow={ballARRAY[countBall].thirdArrow}
            lastArrow={ballARRAY[countBall].lastArrow}
            isLeftFirst={ballARRAY[countBall].isLeftFirst}
            isLeftSecond={ballARRAY[countBall].isLeftSecond}
            isLeftThird={ballARRAY[countBall].isLeftThird}
            isLeftLast={ballARRAY[countBall].isLeftLast}
          >
            <div id="firstBindContainer">
              <div id="firstBind">
                <div id="arrowContainer">
                  <img src={arrow} />
                </div>
              </div>
            </div>
            <div id="auxSecondThird">
              <div id="secondBindContainer">
                <div id="secondBind">
                  <div id="arrowContainer">
                    <img src={arrow} />
                  </div>
                </div>
              </div>
              <div id="ball">
                <Ball isInitial={ballARRAY[countBall].isInitial} />
              </div>
              <div id="thirdBindContainer">
                <div id="thirdBind">
                  <div id="arrowContainer">
                    <img src={arrow} />
                  </div>
                </div>
              </div>
            </div>
            <div id="lastBindContainer">
              <div id="lastBind">
                <div id="arrowContainer">
                  <img src={arrow} />
                </div>
              </div>
            </div>
          </BallContainer>
        );
        auxTemplate.push(tile + index);
        countBall++;
      } else {
        auxTiles.push(
          <BindContainer
            className={
              bindARRAY[countBind].bindDirection +
              ' ' +
              bindARRAY[countBind].description
            }
            area={tile + index}
          >
            <Bind
              bindType={bindARRAY[countBind].bindDirection}
              description={bindARRAY[countBind].description}
              descPosition={bindARRAY[countBind].descPosition}
              isArrow={bindARRAY[countBind].isArrow}
            />
          </BindContainer>
        );
        auxTemplate.push(tile + index);
        countBind++;
      }
    });
    setTemplate(auxTemplate);
    setConstruct(auxTiles);
  }, []);

  useEffect(() => {
    const music = document.getElementById('soundTrack');

    if (audio) {
      music.play();
    } else {
      music.pause();
    }
  }, [audio]);

  useEffect(() => {
    var auxPopup = [];
    auxPopup = (
      <Popup
        title={'Resultado'}
        className={'popupHelper'}
        width={'30rem'}
        widthHeader={'32rem'}
        widthContainer={'30rem'}
        heightContainer={'30rem'}
        height={'fit-content'}
        popupState={statusPopupState}
        setPopupState={setStatusPopupState}
      >
        <p id="stageDescription">
          <div>
            <p>Tempo: {status.time}</p>
            <p>Nível de Completude: {status.percent}</p>
            <p>Tentativas:</p>
            <p>Pontuação: {status.score}</p>
          </div>
          <div id="button">
            <button
              onClick={(e) => {
                status.percent == '100%'
                  ? setStageContext(stageContext + 1)
                  : setStageContext(stageContext);
              }}
            >
              <Link to="/stage">
                {status.percent == '100%' ? 'Próxima fase' : 'Tentar Novamente'}
              </Link>
            </button>
          </div>
        </p>
      </Popup>
    );
    setStatusPopup(auxPopup);
  }, [statusPopupState]);

  useEffect(() => {
    var auxPopup = [];
    auxPopup = (
      <Popup
        title={'Ajuda'}
        className={'popupHelper'}
        width={'43rem'}
        widthHeader={'44rem'}
        widthContainer={'30rem'}
        heightContainer={'30rem'}
        height={'30rem'}
        popupState={popupState}
        setPopupState={setPopupState}
      >
        <p id="stageDescription">{stage[stageContext].description}</p>
      </Popup>
    );
    setPopup(auxPopup);
  }, [popupState]);

  return (
    <>
      {popupState ? popup : null}
      {statusPopupState ? statusPopup : null}
      <Container>
        <audio id="soundTrack" src={soundtrack} loop />
        <Inventory>
          <Box
            title={'Inventário'}
            width={'18.5rem'}
            height={'100%'}
            widthHeader={'20rem'}
            widthContainer={'100%'}
            heightContainer={'100%'}
            border={border.color.lilac}
            bgColor={colors.purple}
            color={'white'}
            children={inventory}
          />
        </Inventory>
        <Interface>
          <div id="buttonsContainer">
            <div
              className="imgButtons"
              onClick={(e) => {
                setAudio(!audio);
              }}
            >
              <img src={audio ? sound : mute} alt="" />
            </div>
            <div
              className="imgButtons"
              onClick={(e) => {
                setPopupState(!popupState);
              }}
            >
              <img src={help} alt="" />
            </div>
          </div>
          {stopwatch}
          <button onClick={verifyDiagram.bind(this)}>
            <p>Finalizar</p>
          </button>
        </Interface>
        <Construct template={template} id="construct">
          {construct}
        </Construct>
      </Container>
    </>
  );
}

export default Gameplay;
