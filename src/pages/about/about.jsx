import React, { useEffect, useState } from 'react';

import { Container } from './about.Styles';
import Popup from '../../components/Popup/popup';
import Box from '../../components/Box/box';
import { border, colors } from '../../global.Styles';
import { useValidateUser } from '../../contexts/userContext';
import { useStage } from '../../contexts/stageContext';
import initial from '../../images/diagrams/initialActivity.png';
import final from '../../images/diagrams/finalActivity.png';
import act from '../../images/diagrams/activitys.png';
import dec from '../../images/diagrams/decision.png';
import horizontalDivider from '../../images/diagrams/horizontalBarDivider.png'
import horizontalUnite from '../../images/diagrams/horizontalBarUnite.png'
import verticalDivider from '../../images/diagrams/verticalBarDivider.png'
import verticalUnite from '../../images/diagrams/verticalBarUnite.png'
import { Link } from 'react-router-dom';
import { useUserCredential } from '../../contexts/userContext';
import { getUserInRealtimeDatabase } from '../../services/firebaseUse';
import { useNotifys } from '../../contexts/notifyContext';

function About() {
  return (
      <Container>
        <h1 id="title">Sobre</h1>
        <p id="text">
        Boas vindas ao Dungeongrama! Este site foi desenvolvido com o auxílio do professor e mestre <strong>Anderson Costa</strong>, 
        juntamente de <strong>Ajax Lima</strong>, <strong>Larissa Nascimento</strong> e <strong>Lucas Lobato</strong>. 
        </p>
        <p id="text">
        O intuito do Dungeongrama é ajudar no ensino de diagramas de atividade e, para isso, você será convidado a desafiar-se numa série de exercícios que 
        ensinar-lhe-ão o passo-a-passo no desenvolvimento desse diagrama da UML. Cada fase possui um problema para ser resolvido, 
        então leia com muita atenção antes de iniciá-la. Porém, não se preocupe, você pode ler o problema novamente no botão "?" 
        presente no canto superior da tela durante as partidas. 
        </p>
        <p id="text">
        Para pontuar, é necessário montar o diagrama na ordem correta. O tempo, o nível de completude da fase e a quantidade de vezes jogada influenciam na sua pontuação.
        Caso pontue bastante, poderá entrar no nosso ranque de jogadores e orgulhar-se para seus colegas de classe. 
        Sem mais enrolação, clique no botão "jogar" que está presente no cabeçalho da página e boa jogatina!
        </p>
        
      </Container>
  );
}

export default About;
