import React from 'react';

import { Container } from './rank.Styles';

function Rank({ crown, user, rank }) {
  return (
    <Container rank={rank % 2 == 0 ? true : false}>
      <p>{rank + 1}</p>
      <p>{user.username}</p>
      <p>{user.avgTime}</p>
      <p>{user.matches}</p>
      <p>{user.score}</p>
    </Container>
  );
}

export default Rank;
