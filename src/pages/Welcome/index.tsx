import React from 'react';

import wateringImg from '../../assets/watering.png';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Title,
  Background,
  Description,
  Button,
  ButtonIcon,
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

        <Background source={wateringImg} resizeMode="contain" />

        <Description>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Description>

        <Button activeOpacity={0.7}>
          <ButtonIcon>
            <Feather name="chevron-right" size={32} />
          </ButtonIcon>
        </Button>
      </Container>
    </>
  );
}
