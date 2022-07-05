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
          StaticActivityContainer
        } from './gameplay.Styles';
import Box from '../../components/Box/box';
import Activity from '../../components/Activity/activity';
import Decision from '../../components/Decision/decision';
import Bar from '../../components/Bar/bar';
import Bind from '../../components/Bind/bind';
import Ball from '../../components/Ball/ball';
import { useNotifys } from '../../contexts/notifyContext';
import { useUserCredential } from '../../contexts/userContext';
import { useStage } from '../../contexts/stageContext';
import mute from '../../images/icons/mute.png';
import sound from '../../images/icons/sound.png';
import refresh from '../../images/icons/refresh.png';
import {colors, border} from '../../global.Styles';
import { useState } from 'react/cjs/react.development';
import soundtrack from '../../audio/music/soundtrack.mp3';
import arrow from '../../images/icons/arrow.png';
import {Tiles, Binds, Decisions, Activitys, Response, ElementsInventory, Bars, Balls, StaticActivity} from '../../models/models';
import { updateScoreInStage } from '../../services/firebaseUse';

function Gameplay() {
  const [inventory, setInventory] = useState([]);
  const [construct, setConstruct] = useState([]);
  const [template, setTemplate] = useState([]);
  const [audio, setAudio] = useState(false);
  const { notifys, setNotifys } = useNotifys();
  const {userCredential, setUserCretendial} = useUserCredential();
  const { stageContext, setStageContext } = useStage();
  const [auxTimer, setAuxTimer] = useState();
  const [time, setTime] = useState(0)
  var auxTime = 0
  useEffect(() => {
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    setInterval(()=>{startTimer()}, 1000)

    function startTimer(){
      auxTime++
    
      setTime(auxTime)
      seconds++;
      
      if(seconds == 60){
        seconds = 0;
        minutes++;
      }
  
      if(minutes == 60){
        minutes = 0;
        hours++;
      }
  
      var stopwatch = document.getElementById('stopwatch');
  
      if(stopwatch!=null || stopwatch!=undefined){
        var format = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
        stopwatch.innerText = format;
      }
    }
  }, [auxTimer])

  const dragActivityContainer = {
    onDragOver :(e)=>{e.preventDefault();},
    onDrop :(e)=>{ moveToContainer(e)},
  }

  function moveToContainer(e){
    e.preventDefault();
    var act = document.getElementById(localStorage.getItem("id"));
    act.style.height = "100%";
    act.style.margin = "0rem";
    e.target.appendChild(act);
    containerStyler();
    localStorage.removeItem("id");
  }

  const dragInventory = {
    onDragOver :(e)=>{e.preventDefault();},
    onDrop :(e)=>{ moveToInventory(e)},
  }

  function moveToInventory(e){
    e.preventDefault();
    var act = document.getElementById(localStorage.getItem("id"));
   
    if(e.target.id=="inventoryBox"){
      act.style.height = "4rem";
      act.style.marginBottom = "0.5rem";
      e.target.appendChild(act);
      containerStyler();
    }
  }

  function verifyDiagram(node){
    var activityContainers = document.getElementsByClassName("actContainers");
    
    var error = "";
    for(let i=0; i<activityContainers.length;i++){
     // console.log(activityContainers[i].children)
      if(activityContainers[i].children.length == 0){
        error = "Preencha todos os espaços com atividade!";
      }
    }

    if(error!=""){
      setNotifys({
        type: "error",
        log: error,
        time: Date.now(),
      })
    }else{

      var resposta = Response(stageContext)
      var percent = 0
      for(let i=0; i<activityContainers.length;i++){
        var elements = document.getElementsByClassName(resposta[i])

        if(elements[0] == activityContainers[i].children[0]){

          percent++;


        }else{
          setNotifys({
            type: "error",
            log: "Você errou",
            time: Date.now(),
          })
        }
        
        // if(resposta[i] == activityContainers[i].children.className){
        //   console.log(resposta[i])
        // }
      }

      
      const percentComplete = parseInt(percent)/parseInt(activityContainers.length)
      console.log(percentComplete*100)
      console.log(time)
     
      updateScoreInStage(userCredential, "stage 1", time, (percentComplete*100), false)
      setNotifys({
        type: "error",
        log: "AAAAAAAA",
        time: Date.now(),
      })

      
    }
    
  }

  function containerStyler(){
    var activityContainers = document.getElementsByClassName("actContainers");

    for(let i = 0; i<activityContainers.length;i++){
      if(activityContainers[i].firstChild!=null && activityContainers[i].firstChild.className!="act"){
        activityContainers[i].style.border = "0rem dashed "+colors.purple+"50";
 
      }else{
        activityContainers[i].style.border = "0.2rem dashed "+colors.purple+"50";
   
      }
    
    }

  }

  const dragEvents = {
    onDragEnter :(e)=>{ e.preventDefault(e)},
    onDragStart:(e)=>{dragStart(e)},
    onDragLeave : (e)=>{e.preventDefault(e)},
    onDragOver :(e)=>{e.preventDefault(e)},
    onDrop :(e)=>{e.preventDefault(e)},
  }

  function dragStart(e){
    localStorage.removeItem("id");
    localStorage.setItem("id", e.target.getAttribute('id'));
  }
  
  useEffect(() => {
    var auxState = []
    var activityARRAY = Activitys(stageContext)

    var graphARRAY = ElementsInventory(stageContext)


    


    activityARRAY.map((act) => {
        auxState.push(<Activity name={act} drag={true}/>)
      })

    graphARRAY.map((grap, index)=>{

      switch(grap.id){
        case 'bar':
          auxState.push(<BarContainer 
            className={grap.isVertical == true ? "verticalBar" : "horizontalBar"}
            id={grap.id+index}
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
    
            isVertical={grap.isVertical}>
          <div id="firstBindContainer">
            <div id='firstBarBind'><div id="arrowContainer"><img src={arrow} draggable={false}/></div></div>
          </div>
          <Bar isVertical={grap.isVertical}/>
          <div id="lastBindContainer">
            <div id='lastBarBind'><div id="arrowContainer"><img src={arrow} draggable={false}/></div></div>
          </div>
          </BarContainer>)
        break;
        
        case 'bind':
          auxState.push(
            <BindContainer 
            className={grap.bindDirection + grap.description}
            area={null} 
            {...dragEvents} 
            draggable={grap.drag} 
            id={grap.bindDirection+grap.description}  
            h={'4rem'}
            marginB={'1rem'}>
                <Bind 
                  
                  bindType={grap.bindDirection} 
                  description={grap.description} 
                  descPosition={grap.descPosition} 
                  isArrow={grap.isArrow}/>
            </BindContainer>)
          break;
        
        case 'decision':
          // const aux = grap.firstBind+grap.secondBind+grap.thirdBind+grap.lastBind+grap.firstArrow+grap.secondArrow+grap.thirdArrow+grap.lastArrow
          auxState.push(
            <DecisionContainer 
                className={'decision'}
                id={grap.id+index}
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
                isLeftLast={grap.isLeftLast}>

              <div id="firstBindContainer">
                <div id="firstBind"><div id="arrowContainer"><img src={arrow} draggable={false}/></div></div>
              </div>
              <div id="auxSecondThird">
                <div id="secondBindContainer">
                  <div id="secondBind"><div id="arrowContainer"><img src={arrow} draggable={false}/></div></div>
                </div>
                <div id="decision">
                  <Decision/>
                </div>
                <div id="thirdBindContainer">
                  <div id="thirdBind"><div id="arrowContainer"><img src={arrow} draggable={false}/></div></div>
                </div>
              </div>

              <div id="lastBindContainer">
                <div id="lastBind"><div id="arrowContainer"><img src={arrow} draggable={false}/></div></div>
              </div>
            </DecisionContainer>)
          break;

        case 'ball':
          auxState.push(
            <BallContainer 
              id={grap.id+index}
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
                    <div id="firstBind"><div id="arrowContainer"><img src={arrow} draggable={false}/></div></div>
                  </div>
                  <div id="auxSecondThird">
                    <div id="secondBindContainer">
                      <div id="secondBind"><div id="arrowContainer"><img src={arrow} draggable={false}/></div></div>
                    </div>
                    <div id="ball">
                      <Ball isInitial={grap.isInitial}/>
                    </div>
                    <div id="thirdBindContainer">
                      <div id="thirdBind"><div id="arrowContainer"><img src={arrow} draggable={false}/></div></div>
                    </div>
                  </div>
                  <div id="lastBindContainer">
                    <div id="lastBind"><div id="arrowContainer"><img src={arrow} draggable={false}/></div></div>
                  </div>
                </BallContainer>
          )
          break;
      }
      
    })
      setInventory(<div {...dragInventory} id="inventoryBox">{auxState}</div>);

      const tiles = Tiles(stageContext)

      var staticActivityARRAY = StaticActivity(stageContext)
      var countStaticActivity = 0

      var auxTiles = []
      var auxTemplate = []

      var countBind = 0;
      var bindARRAY = Binds(stageContext)

      var countDecision = 0
      var decisionARRAY = Decisions(stageContext)


      var countBar = 0
      var barARRAY = Bars(stageContext)

      var countBall = 0
      var ballARRAY = Balls(stageContext)

      tiles.forEach((tile, index) =>{
        if(tile == "void"){
          auxTiles.push(<VoidContainer area={tile+index}></VoidContainer>);
          auxTemplate.push(tile+index)
        }else if(tile == "activity"){
          auxTiles.push(
            <ActivityContainer {...dragActivityContainer} area={tile+index} className="actContainers"  title="Posicione uma atividade aqui"
           ></ActivityContainer>);
          auxTemplate.push(tile+index)
        }else if(tile == "staticActivity"){
          auxTiles.push(
            <StaticActivityContainer area={tile+index}>
              <Activity name={staticActivityARRAY[countStaticActivity].name} drag={false} heightMaximus={true}/>
            </StaticActivityContainer>
            
          )
          auxTemplate.push(tile+index)
          countStaticActivity++
        } else if(tile == "decision"){
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
                isLeftLast={decisionARRAY[countDecision].isLeftLast}>

              <div id="firstBindContainer">
                <div id="firstBind"><div id="arrowContainer"><img src={arrow}/></div></div>
              </div>
              <div id="auxSecondThird">
                <div id="secondBindContainer">
                  <div id="secondBind"><div id="arrowContainer"><img src={arrow}/></div></div>
                </div>
                <div id="decision">
                  <Decision/>
                </div>
                <div id="thirdBindContainer">
                  <div id="thirdBind"><div id="arrowContainer"><img src={arrow}/></div></div>
                </div>
              </div>

              <div id="lastBindContainer">
                <div id="lastBind"><div id="arrowContainer"><img src={arrow}/></div></div>
              </div>
            </DecisionContainer>)
          auxTemplate.push(tile+index)
          countDecision++;

        }else if(tile == "bar"){
          auxTiles.push(
            <BarContainer 
                id={tile+index}
                firstBind={barARRAY[countBar].firstBind} 
                lastBind={barARRAY[countBar].lastBind} 
                
                firstArrow={barARRAY[countBar].firstArrow} 
                lastArrow={barARRAY[countBar].lastArrow} 

                isLeftFirst={barARRAY[countBar].isLeftFirst} 
                isLeftLast={barARRAY[countBar].isLeftLast} 

                isInitialFirst={barARRAY[countBar].isInitialFirst}
                isInitialLast={barARRAY[countBar].isInitialLast}

                isVertical={true}>
              <div id="firstBindContainer">
                <div id='firstBarBind'><div id="arrowContainer"><img src={arrow} draggable={false}/></div></div>
              </div>
              <Bar isVertical={true}/>
              <div id="lastBindContainer">
                <div id='lastBarBind'><div id="arrowContainer"><img src={arrow} draggable={false}/></div></div>
              </div>
            </BarContainer>)
          auxTemplate.push(tile+index)
          countBar++;
        }else if(tile == "ball"){
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
                    <div id="firstBind"><div id="arrowContainer"><img src={arrow}/></div></div>
                  </div>
                  <div id="auxSecondThird">
                    <div id="secondBindContainer">
                      <div id="secondBind"><div id="arrowContainer"><img src={arrow}/></div></div>
                    </div>
                    <div id="ball">
                      <Ball isInitial={ballARRAY[countBall].isInitial}/>
                    </div>
                    <div id="thirdBindContainer">
                      <div id="thirdBind"><div id="arrowContainer"><img src={arrow}/></div></div>
                    </div>
                  </div>
                  <div id="lastBindContainer">
                    <div id="lastBind"><div id="arrowContainer"><img src={arrow}/></div></div>
                  </div>
                </BallContainer>)
            auxTemplate.push(tile+index)
            countBall++;
        }else{
          auxTiles.push(<BindContainer className={bindARRAY[countBind].bindDirection + " " + bindARRAY[countBind].description} area={tile+index}>
                          <Bind 
                          
                            bindType={bindARRAY[countBind].bindDirection} 
                            description={bindARRAY[countBind].description} 
                            descPosition={bindARRAY[countBind].descPosition} 
                            isArrow={bindARRAY[countBind].isArrow}/>
                        </BindContainer>);
          auxTemplate.push(tile+index);
          countBind++;
          
        }

        
      })
      setTemplate(auxTemplate);
      setConstruct(auxTiles);


  },[]);

  useEffect(()=>{
    const music = document.getElementById("soundTrack");

      if(audio){ 
          music.play()
      }else{
    
          music.pause()
      }
  },[audio])

  return( 
    <Container>
      <audio id="soundTrack" src={soundtrack} loop/>
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
          <div id='buttonsContainer'>
            <div className='imgButtons'  
              onClick={(e)=>{
                setAudio(!audio);
               }}>
              <img src={audio? sound : mute} alt=''/>
            </div>
            <div className='imgButtons'  onClick={(e)=>{window.location.href = '/gameplay'}}>
              <img src={refresh} alt=''/>
            </div>
          </div>
          <p id="stopwatch">00:00:00</p>
          <button onClick={verifyDiagram.bind(this)}><p>Finalizar</p></button>
        </Interface>
        <Construct template={template} id="construct">
          {construct}
        </Construct>
    </Container>
  )}

export default Gameplay;