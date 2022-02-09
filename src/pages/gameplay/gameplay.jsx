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
  const dragEvents = {
    onDragOver :(e)=>{e.preventDefault();},
    onDrop :(e)=>{ moveAcvitity(e)},
  }

  function moveAcvitity(e){
    e.preventDefault();
    var act = document.getElementById(localStorage.getItem("id"));
    act.style.height = "100%";
    e.target.appendChild(act);
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
      setInventory(<div>{auxState}</div>);
      
      const tiles = [
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "activity", "bind", "activity","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
        "void", "void", "void", "void", "void","void","void",
      ]
      var auxTiles = []
      var auxTemplate = []

      function teste(e){
        var aux = e.target.firstChild
        if(aux==null){
          return true
        }else{
          return false
        }
      }
      

      tiles.forEach((tile, index) =>{
        if(tile == "void"){
          auxTiles.push(<VoidContainer area={tile+index}>void</VoidContainer>);
          auxTemplate.push(tile+index)
        }else if(tile == "activity"){
          auxTiles.push(
            <ActivityContainer {...dragEvents} area={tile+index} 
           ></ActivityContainer>);
          auxTemplate.push(tile+index)
        }else{
          auxTiles.push(<BindContainer area={tile+index}>bind</BindContainer>);
          auxTemplate.push(tile+index)
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
          <button>Finalizar</button>
        </Interface>
        <Construct template={template} id="construct">
          {construct}
        </Construct>
    </Container>
  )}

export default Gameplay;