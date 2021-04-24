import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore, format } from 'date-fns';
import { useRoute } from '@react-navigation/core';

import { PlantProps } from '../../libs/storage';

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
  DateTimePickerButton,
  DateTimePickerText,
} from './styles';

import waterdropImg from '../../assets/waterdrop.png';

interface Params {
  plant: PlantProps;
}

export function PlantSave() {
  const route = useRoute();
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const { plant } = route.params as Params;

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker((oldState) => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro! ⏰');
    }

    if (dateTime) selectedDateTime(dateTime);
  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker((oldState) => !oldState);
  }

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

          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === 'android' && (
            <DateTimePickerButton onPress={handleOpenDateTimePickerForAndroid}>
              <DateTimePickerText>{`Mudar ${format(
                selectedDateTime,
                'HH:mm'
              )}`}</DateTimePickerText>
            </DateTimePickerButton>
          )}

          <Button title="Cadastrar planta" onPress={() => { }} />
        </Controller>
      </Container>
    </>
  );
}
