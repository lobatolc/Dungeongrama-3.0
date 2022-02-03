import React from 'react';

import { Container } from './level.Styles';
import Header from '../../components/Header/header.Component';
import Box from '../../components/Box/box.Component';
import {border, colors} from '../../global.Styles';

function level() {
  return(
    <Container>
   
        <Box title={'teste'} width={17.5} height={17.5} border={border.color.lilac} bgColor={colors.purple} color={'white'}>
          <div>
            <p>Seus status</p>
            <p>Min. Tempo: 00:02:31</p>
            <p>Qtd. Partidas: 3</p>
            <p>Máx. Acerto: 100%</p>
            <p>Pontuação: 1000</p>
          </div>
          <div id="button">
            <button>
              Jogar
            </button>
          </div>
        </Box>
        <Box title={'teste'}  width={17.5} height={17.5} border={border.color.lilac} bgColor={colors.purple} color={'black'}/>
        <Box title={'teste'}  width={17.5} height={17.5} border={border.color.lilac} bgColor={colors.purple} color={'black'}/>
    </Container>
  )}

export default level;