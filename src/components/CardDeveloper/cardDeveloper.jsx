import React from 'react';

import { Container, Dev } from './cardDeveloper.Styles';
import {colors, border } from '../../global.Styles';
import Box from '../Box/box';
import linkedin from '../../images/icons/linkedin.png'
import github from '../../images/icons/github.png'
function CardDeveloper({dev, setDev}, ...props) {

    function closeDevInfo(node){
        if(node.target.className.includes("devContainer") || node.target.className.includes("boxContainer")){
            setDev(!dev) 
        }
    }

  return( 
    <Container id="devContainer"  onClick={closeDevInfo.bind(this)}>
        <Box 
            title={'Ficha do Desenvolvedor'}
            width={'22.5rem'} 
            height={'fit-content'} 
            widthHeader={'24rem'} 
            widthContainer={'100%'}
            heightContainer={'100%'}
            border={border.color.darkBlur} 
            bgColor={colors.blackBlur} 
            color={'white'}
        >
        
        <Dev>
            <img src={dev.image} alt=''/>
            <div id="status">
                <div id="energyContainer">
                    Energia
                    <div id="energy"/>
                </div>
                <div id="experienceContainer">
                    Experiência
                    <div id="experience"/>
                </div>
            </div>
            <div id="infoContainer">
                
                <div id="info">
                    <p>Nome: {dev.name}</p>
                    <p>Função: {dev.func}</p>
                    <div id="social">
                        <p>Social:{" "}</p>
                        <img src={linkedin} alt='' onClick={(e)=>{window.open(dev.links[0], '_blank');}}/>
                        <img src={github} alt='' onClick={(e)=>{window.open(dev.links[1], '_blank');}}/>
                    </div>
                </div>
                <p id="phrase">{dev.phrase}</p>
            </div>
        </Dev>
        </Box>
    </Container>
  )}

export default CardDeveloper;