import React, { useEffect, useState } from 'react';

import { Container } from './ranking.Styles';
import Box from '../../components/Box/box';
import Rank from '../../components/Rank/rank';
import {
  colors,
  shadow,
  margin,
  padding,
  button,
  border,
  font,
  gradient,
} from '../../global.Styles';
import { getUserInRealtimeDatabase } from '../../services/firebaseUse';

function Ranking() {
  const [rankingState, setRankingState] = useState();
  useEffect(() => {
    async function getRanking() {
      const users = await getUserInRealtimeDatabase();

      const arrayComponentUser = [];
      users.map((user, index) => {
        arrayComponentUser.push(<Rank rank={index} user={user} />);
      });

      setRankingState(<div>{arrayComponentUser}</div>);
    }
    getRanking();
  }, []);

  return (
    <Container>
      <h1>Classificação dos Jogadores</h1>
      <Box
        title={['Nº', 'Nome', 'Tempo Médio', 'Partidas', 'Pontuação']}
        width={'98%'}
        height={'100%'}
        widthHeader={'100%'}
        widthContainer={'100%'}
        heightContainer={'50rem'}
        border={border.color.lilac}
        bgColor={colors.purple}
        color={'white'}
        children={rankingState}
      />
    </Container>
  );
}

export default Ranking;
