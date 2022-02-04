import React from 'react';
import { Container } from './activity.Styles';

function Activity({name}, ...props) {
  return( 
    <Container>
        {name}
    </Container>
  )}

export default Activity;