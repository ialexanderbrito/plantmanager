import React from 'react';
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/core';

import { Button } from '../../components/Button';

import {
  Container,
  PlantInfo,
  ImagePlant,
  PlantName,
  PlantAbout,
  Controller,
  TipContainer,
  TipImage,
  TipText,
  AlertLabel,
} from './styles';

import waterdropImg from '../../assets/waterdrop.png';

interface Params {
  plant: {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
      times: number;
      repeat_every: string;
    };
  };
}

export function PlantSave() {
  const route = useRoute();
  const { plant } = route.params as Params;
  return (
    <>
      <Container>
        <PlantInfo>
          <ImagePlant uri={plant.photo} />
          <PlantName>{plant.name}</PlantName>
          <PlantAbout>{plant.about}</PlantAbout>
        </PlantInfo>
        <Controller>
          <TipContainer>
            <TipImage source={waterdropImg} />
            <TipText>{plant.water_tips}</TipText>
          </TipContainer>
          <AlertLabel>Escolha o melhor horário para ser lembrado</AlertLabel>

          <Button title="Cadastrar planta" onPress={() => { }} />
        </Controller>
      </Container>
    </>
  );
}
