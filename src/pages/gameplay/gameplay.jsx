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
          BallContainer
        } from './gameplay.Styles';
import Box from '../../components/Box/box';
import Activity from '../../components/Activity/activity';
import Decision from '../../components/Decision/decision';
import Bar from '../../components/Bar/bar';
import Bind from '../../components/Bind/bind';
import Ball from '../../components/Ball/ball';
import { useNotifys } from '../../contexts/notifyContext';
import mute from '../../images/icons/mute.png';
import sound from '../../images/icons/sound.png';
import refresh from '../../images/icons/refresh.png';
import {colors, border} from '../../global.Styles';
import { useState } from 'react/cjs/react.development';
import soundtrack from '../../audio/music/soundtrack.mp3';
import arrow from '../../images/icons/arrow.png';


function Gameplay() {
  const [inventory, setInventory] = useState([]);
  const [construct, setConstruct] = useState([]);
  const [template, setTemplate] = useState([]);
  const [audio, setAudio] = useState(false);
  const { notifys, setNotifys } = useNotifys();
  const [auxTimer, setAuxTimer] = useState();



  useEffect(() => {
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    setInterval(()=>{startTimer()}, 1000)

    function startTimer(){

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
      console.log(activityContainers[i].children)
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
      setNotifys({
        type: "success",
        log: "Tudo certo, parabéns!",
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
    var activityARRAY = ['Correr',
        'Pular',
        'Saltar',
        'Andar'
    ]

    var graphARRAY = [{
      id:'bar',
	    drag: true,
	    firstBind: true,
	    lastBind: true,
	    firstArrow: true,
	    lastArrow: true,
	    isLeftFirst: true,
	    isLeftLast: true,
	    isInitialFirst: true,
	    isInitialLast: true,
	    isVertical: true
    },
    {
      id:'bar',
	    drag: true,
	    firstBind: true,
	    lastBind: true,
	    firstArrow: true,
	    lastArrow: true,
	    isLeftFirst: true,
	    isLeftLast: true,
	    isInitialFirst: true,
	    isInitialLast: true,
	    isVertical: true
    },
    {
      id:'bar',
	    drag: true,
	    firstBind: true,
	    lastBind: true,
	    firstArrow: true,
	    lastArrow: true,
	    isLeftFirst: true,
	    isLeftLast: true,
	    isInitialFirst: true,
	    isInitialLast: true,
	    isVertical: true
    },
    {
      id:'decision',
	    drag: true,
	    firstBind: true,
      secondBind: true,
      thirdBind: true,
	    lastBind: true,
	    firstArrow: true,
      secondArrow: true,
      thirdArrow: true,
	    lastArrow: true,
	    isLeftFirst: true,
      isLeftSecond: true,
      isLeftThird: true,
	    isLeftLast: true,
	    isInitialFirst: true,
	    isInitialLast: true,
	    isVertical: true
    },
    {
      id:'ball',
	    drag: true,
	    firstBind: true,
      secondBind: true,
      thirdBind: true,
	    lastBind: true,
	    firstArrow: true,
      secondArrow: true,
      thirdArrow: true,
	    lastArrow: true,
	    isLeftFirst: true,
      isLeftSecond: true,
      isLeftThird: true,
	    isLeftLast: true,
	    isInitialFirst: true,
	    isInitialLast: true,
	
    },
    {
      id:'bind',
	    drag: true,
      bindDirection: "leftTop",
      description: "aaa",         
      descPosition:"last",
      isArrow: true,
    }]


    


    activityARRAY.map((act) => {
        auxState.push(<Activity name={act} drag={true}/>)
      })

    graphARRAY.map((grap, index)=>{

      switch(grap.id){
        case 'bar':
          auxState.push(<BarContainer 

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
            area={null} 
            {...dragEvents} 
            draggable={grap.drag} 
            id={grap.id+index}  
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
          auxState.push(
            <DecisionContainer 

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
                      <Ball isInitial={false}/>
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
      /*
      const tiles = [
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "activity", "bind", "activity","void","void",
        "void", "void", "void", "decision", "bind","void","void",
        "void", "void", "bar", "ball", "activity","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
      ] */

      const tiles = [
        "void","void","void","void","void","void","void",
        "void","void","void","void","void","void","void",
        "void","void","void","void","void","void","void",
        "void","void","activity","bind","activity","void","void",
        "void","void","void","void","void","void","void",
        "void","void","void","void","void","void","void",
        "void","void","void","void","void","void","void",
        "void","void","void","void","void","void","void",
        "void","void","void","void","void","void","void",
        
      ]

      var auxTiles = []
      var auxTemplate = []

      var countBind = 0;
      var bindARRAY = [
        { 
          bindDirection: "leftRight",
          description: "encontrar obstáculo",         
          descPosition:"first",
          isArrow: true,
        },
        { 
          bindDirection: "leftRight",
          description: "Quando blablablaaaaaaaaaaaaaa2",
          descPosition:"first",
          isArrow: true,
        },
        { 
          bindDirection: "leftBottom",
          description: "Quando blablabla3",
          descPosition:"last",
          isArrow: true,
        },
        { 
          bindDirection: "leftRight",
          description: "Quando blablabla4",
          descPosition:"first",
          isArrow: false,
        },
      ]

      tiles.forEach((tile, index) =>{
        if(tile == "void"){
          auxTiles.push(<VoidContainer area={tile+index}></VoidContainer>);
          auxTemplate.push(tile+index)
        }else if(tile == "activity"){
          auxTiles.push(
            <ActivityContainer {...dragActivityContainer} area={tile+index} className="actContainers"  title="Posicione uma atividade aqui"
           ></ActivityContainer>);
          auxTemplate.push(tile+index)
        }else if(tile == "decision"){
          auxTiles.push(
            <DecisionContainer 
                firstBind={true} 
                secondBind={true} 
                thirdBind={true} 
                lastBind={true} 

                firstArrow={true}
                secondArrow={true}
                thirdArrow={true}
                lastArrow={true}

                isLeftFirst={false}
                isLeftSecond={true}
                isLeftThird={false}
                isLeftLast={false}>

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

        }else if(tile == "bar"){
          auxTiles.push(
            <BarContainer 

                id={tile+index}
                firstBind={true} 
                lastBind={true} 
                
                firstArrow={true} 
                lastArrow={true} 

                isLeftFirst={false} 
                isLeftLast={false} 

                isInitialFirst={false}
                isInitialLast={false}

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

        }else if(tile == "ball"){
            auxTiles.push(
                <BallContainer 
                  firstBind={true} 
                  secondBind={true} 
                  thirdBind={true} 
                  lastBind={true}
                  
                  firstArrow={true}
                  secondArrow={true}
                  thirdArrow={true}
                  lastArrow={true}
                  
                  
                  isLeftFirst={false}
                  isLeftSecond={true}
                  isLeftThird={false}
                  isLeftLast={false}
                 
                  
                  >
                
                  <div id="firstBindContainer">
                    <div id="firstBind"><div id="arrowContainer"><img src={arrow}/></div></div>
                  </div>
                  <div id="auxSecondThird">
                    <div id="secondBindContainer">
                      <div id="secondBind"><div id="arrowContainer"><img src={arrow}/></div></div>
                    </div>
                    <div id="ball">
                      <Ball isInitial={false}/>
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
        }else{
          auxTiles.push(<BindContainer area={tile+index}>
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