import React, { useEffect, useState } from 'react';

import { Container } from './ranking.Styles';
import Box from '../../components/Box/box.Component';
import Rank from '../../components/Rank/rank.Component';
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
        rank.map((user) => {
            auxState.push(<Rank/>)
          })
          setRankingState(<div>{auxState}</div>)
      },[]);

    return( 
    <Container>
        <Box 
            title={'Classificação'} 
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