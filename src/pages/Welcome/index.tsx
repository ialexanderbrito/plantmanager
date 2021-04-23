import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { Feather } from '@expo/vector-icons';
import wateringImg from '../../assets/watering.png';

import {
  Container,
  Wrapper,
  Title,
  Background,
  Description,
  Button,
  ButtonIcon,
} from './styles';

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Title>
            Gerencie {'\n'}
            suas plantas de {'\n'}
            forma fácil
          </Title>

          <Background source={wateringImg} resizeMode="contain" />

          <Description>
            Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
            sempre que precisar.
          </Description>

          <Button activeOpacity={0.7}>
            <ButtonIcon onPress={handleStart}>
              <Feather name="chevron-right" size={32} />
            </ButtonIcon>
          </Button>
        </Wrapper>
      </Container>
    </>
  );
}
