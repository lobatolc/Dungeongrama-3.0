import React from 'react';

import { Container, Header, Body } from './box.Styles';



function Box({
  title, 
  width, 
  height, 
  widthHeader, 
  widthContainer, 
  heightContainer, 
  border, 
  bgColor, 
  color, 
  children, 
  state, 
  setState}, ...props) {



  return(
    <Container width={widthContainer} height={heightContainer}>
        <Header width={widthHeader} titleType={Array.isArray(title)}>
            {
              Array.isArray(title) ? 
              title.map((t, index) => {
                return <p>{title[index]}</p>
              }) : <p>{title}</p>
            }
        </Header>
        <Body width={width} height={height} border={border} bgColor={bgColor} color={color} border={border}>
          {children}
            
        </Body>
    </Container>
  )}

export default Box;