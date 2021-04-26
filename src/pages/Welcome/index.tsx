import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const [userName, setUserName] = useState<string>();
  const [userPhoto, setUserPhoto] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      const image = await AsyncStorage.getItem('@plantmanager:image');

      setUserName(user || '');
      setUserPhoto(image || '');
    }
    loadStorageUserName();
  }, [userName]);

  function handleStart() {
    if (userName && userPhoto) {
      navigation.navigate('MyPlants');
    } else {
      navigation.navigate('UserIdentification');
    }
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
