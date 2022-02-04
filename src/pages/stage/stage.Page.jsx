import React from 'react';

import { Container } from './stage.Styles';

import Box from '../../components/Box/box.Component';
import {border, colors} from '../../global.Styles';

function level() {
  return(
    <Container>
        <h1 id='title'>Fases</h1>
        <p id='text'>Selecione uma fase para jogar o Dungeongrama. As fases são diferentes entre si, cada uma possui um problema a ser resolvido através do diagrama de atividade que você irá montar. Para concluir a fase, basta posicionar cada atividade com coesão. Tenha em mente que a cada partida, seu ranque na classificação dos jogadores pode ser alterado. 
        </p>
        <div id="boxes">
          <Box 
            title={'teste'} 
            width={'17.5rem'} 
            height={'22.5rem'} 
            widthHeader={'19rem'} 
            border={border.color.lilac} 
            bgColor={colors.purple} 
            color={'white'}
          >
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
          <Box title={'teste'} width={'17.5rem'} height={'22.5rem'} widthHeader={'19rem'} border={border.color.lilac} bgColor={colors.purple} color={'black'}/>
        </div>
    </Container>
  )}

export default level;