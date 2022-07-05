import styled, { css } from 'styled-components';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';

export const Container = styled.div`
  grid-area: activity;
  width: 100%;
  height: 4rem;
 
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: 500;
  border-radius: 0.5rem;
  border: 0.20rem solid black;
  margin-bottom: 0.5rem;
  cursor: grab;
  background-color: ${colors.yellow};

  ${({ isDragging, isInventory }) => {
 
    if(isDragging){
        return css`
        border: 0.20rem dashed ${isInventory == null? colors.white : colors.purple};
        background: transparent;
        opacity: 0.5;
        cursor: grabbing;
        p{
          opacity: 0;
        }
      `;
    }
  }};

${({ heightMaximus }) => {
 
 if(heightMaximus){
     return css`
     height: 100%;
     cursor: default;
   `;
 }
}};

  ${({ isInventory }) => {
        if(isInventory){
            return css`
            height: 100%;
          
        `;
        }

    }};

    
`;


