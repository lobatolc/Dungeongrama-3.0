import styled, { css } from 'styled-components';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;

  
 text-align: center;
  width: 100%;
  height: 3rem;
  margin-top: 0.5rem;
  box-sizing: border-box;
  border-radius: 0.25rem;
  ${({ rank }) => {
    if(rank){
      return css`
          
        background-image: ${gradient.purpleDark}; 
      `;    
    }else{
      return css`
        background-image: ${gradient.purpleLight}; 
      `;    
    }
        
    }};
`;
