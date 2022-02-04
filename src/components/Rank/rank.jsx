import React from 'react';

import { Container } from './rank.Styles';

function Rank({crown, user, rank}) {
  return( 
    <Container rank={rank%2==0? true : false}>
        <p>{rank+1}</p>
        <p>lobato</p>
        <p>00:23:21</p>
        <p>30</p>
        <p>3030303</p>
    </Container>
)}

export default Rank;