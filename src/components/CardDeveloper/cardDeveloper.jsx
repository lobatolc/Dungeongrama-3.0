import React from 'react';

import { Container, Dev } from './cardDeveloper.Styles';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';
import ajax from '../../images/developers/ajax.jpg';
import Box from '../Box/box';
function CardDeveloper() {
  return( 
    <Container>
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
            <img src={ajax} alt=''/>
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
            <div id="info">
                <p>Nome: Ajax Lima</p>
                <p>Função: Desenvolvedor Back-End</p>
                <div>
                    <img src='' alt=''/>
                    <img src='' alt=''/>
                    <img src='' alt=''/>
                </div>
                <p id="phrase">"Com grandes linhas de código vêm grandes bugs."</p>
                
            </div>
        </Dev>
        </Box>
    </Container>
  )}

export default CardDeveloper;