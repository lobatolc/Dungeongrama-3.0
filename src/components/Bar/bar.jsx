import React from 'react';

import { Container } from './bar.Styles';

function Bar({isVertical}, ...props) {
  return <Container isVertical={isVertical}/>;
}

export default Bar;