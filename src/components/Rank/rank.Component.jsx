import React from 'react';

import { Container } from './rank.Styles';

function Rank({crown, user, rank}) {
  return( 
    <Container>
        {crown!="" ? <img src={crown} alt=""/> : ''}
        <p>01</p>
        <p>lobato</p>
        <p>00:23:21</p>
        <p>30</p>
        <p>3030303</p>
    </Container>
)}

export default Rank;