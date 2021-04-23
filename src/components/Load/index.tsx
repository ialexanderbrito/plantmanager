import React from 'react';

import { Container, Animation } from './styles';

import loadAnimation from '../../assets/load.json';

export function Load() {
  return (
    <Container>
      <Animation source={loadAnimation} autoPlay loop />
    </Container>
  );
}
