import React, { useEffect, useState } from 'react';

import { Container } from './ranking.Styles';
import Box from '../../components/Box/box';
import Rank from '../../components/Rank/rank';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';

function Ranking() {
    const [rankingState, setRankingState] = useState();
    useEffect(() => {
        var auxState = []
        var rank = [
            {name: 'joao', score: '234', gamesPlayed: '32', },
            {name: 'joao', score: '234', gamesPlayed: '32', },
            {name: 'joao', score: '234', gamesPlayed: '32', },
            {name: 'joao', score: '234', gamesPlayed: '32', }
        ]
        rank.map((user, index) => {
            auxState.push(<Rank rank={index}/>)
          })
          setRankingState(<div>{auxState}</div>)
      },[]);

    return( 
    <Container>
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
)}

export default Ranking;