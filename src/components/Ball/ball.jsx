import React from 'react';

import { Container } from './ball.Styles';

function Ball({isInitial}, ...props) {
    return(
        <Container isInitial={isInitial}>
            <div id="auxBall"/>
        </Container>
    )}

export default Ball;