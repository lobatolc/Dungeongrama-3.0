import React, { useEffect } from 'react';
import { 
          Container, 
          Inventory, 
          Interface, 
          Construct, 
          BindContainer, 
          VoidContainer, 
          ActivityContainer 
        } from './gameplay.Styles';
import Box from '../../components/Box/box';
import Activity from '../../components/Activity/activity';
import Bind from '../../components/Bind/bind';
import { useActivity } from '../../contexts/activitContext';
import mute from '../../images/icons/mute.png';
import sound from '../../images/icons/sound.png';
import refresh from '../../images/icons/refresh.png';
import {colors, border} from '../../global.Styles';
import { useState } from 'react/cjs/react.development';
import soundtrack from '../../audio/music/soundtrack.mp3';
function Gameplay() {
  const [inventory, setInventory] = useState([]);
  const [construct, setConstruct] = useState([]);
  const [template, setTemplate] = useState([]);
  const [audio, setAudio] = useState(false);

  const { activity, setActivity} = useActivity()
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
  
  useEffect(() => {
    var auxState = []
    var activityARRAY = ['Correr',
        'Pular',
        'Saltar',
        'Andar'
    ]

    


    activityARRAY.map((act) => {
        auxState.push(<Activity name={act}/>)
      })
      setInventory(<div {...dragInventory} id="inventoryBox">{auxState}</div>);
      
      const tiles = [
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "activity", "bind", "activity","void","void",
        "void", "void", "void", "activity", "bind","void","void",
        "void", "void", "void", "void", "activity","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
      ]
      var auxTiles = []
      var auxTemplate = []

      var countBind = 0;
      var bindARRAY = [
        { 
          bindDirection: "bottomLeft",
          description: "Quan daaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          descPosition:"last",
          isArrow: true,
        },
        { 
          bindDirection: "topBottom",
          description: "Quando blablabla2",
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
  const music = document.querySelector('audio');

    if(audio){
      
        music.play()
    }else{
      console.log(localStorage.getItem("id"));
        music.pause()
    }
},[audio])




  return( 
    <Container>
      <audio src={soundtrack} loop/>
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
            <div className='imgButtons'  onClick={(e)=>{setAudio(!audio)}}>
              <img src={audio? sound : mute} alt=''/>
            </div>
            <div className='imgButtons'  onClick={(e)=>{window.location.href = '/gameplay'}}>
              <img src={refresh} alt=''/>
            </div>
          </div>
          <p>00:00:00</p>
          <button><p>Finalizar</p></button>
        </Interface>
        <Construct template={template} id="construct">
          {construct}
        </Construct>
    </Container>
  )}

export default Gameplay;