import React from 'react';

import { Container } from './rank.Styles';

function Rank({ crown, user, rank }) {
  return (
    <Container rank={rank % 2 == 0 ? true : false}>
      <p>{rank + 1}</p>
      <p>{user.username}</p>
      <p>0</p>
      <p>{user.maxScore}</p>
    </Container>
  );
}

export default Rank;
