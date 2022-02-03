import React from 'react';

import { Container, Header, Body } from './box.Styles';

function Box({title, width, height, border, bgColor, color, children, state, setState}, ...props) {
  return(
    <Container >
        <Header width={width}>
            <p>{title}</p>
        </Header>
        <Body width={width} height={height} border={border} bgColor={bgColor} color={color} border={border}>
            {children}
        </Body>
    </Container>
  )}

export default Box;