import React, { useEffect } from 'react';
import { Container, Inventory, Interface, Construct } from './gameplay.Styles';
import Box from '../../components/Box/box';
import Activity from '../../components/Activity/activity';
import mute from '../../images/icons/mute.png';
import sound from '../../images/icons/sound.png';
import refresh from '../../images/icons/refresh.png';
import {colors, border} from '../../global.Styles';
import { useState } from 'react/cjs/react.development';
import soundtrack from '../../audio/music/soundtrack.mp3';
function Gameplay() {
  const [inventory, setInventory] = useState([]);
  const [audio, setAudio] = useState(false);

  useEffect(() => {
    var auxState = []
    var activity = ['Correr',
        'Pular',
        'Saltar',
        'Andar'
    ]
    activity.map((act) => {
        auxState.push(<Activity name={act}/>)
      })
      setInventory(<div>{auxState}</div>);
  },[]);

useEffect(()=>{
  const music = document.querySelector('audio');

    if(audio){
        music.play()
    }else{
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
        <Construct/>
    </Container>
  )}

export default Gameplay;