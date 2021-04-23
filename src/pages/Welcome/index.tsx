import React from 'react';

import wateringImg from '../../assets/watering.png';

import {
  Container,
  Title,
  Background,
  Description,
  Button,
  ButtonText,
} from './styles';

export function Welcome() {
  return (
    <>
      <Container>
        <Title>
          Gerencie {'\n'}
          suas plantas {'\n'}
          de forma fácil.
        </Title>

        <Background source={wateringImg} />

        <Description>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Description>

        <Button activeOpacity={0.7}>
          <ButtonText>{'>'}</ButtonText>
        </Button>
      </Container>
    </>
  );
}
