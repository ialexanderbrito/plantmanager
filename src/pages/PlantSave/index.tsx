import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore, format } from 'date-fns';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';

import { PlantProps, savePlant } from '../../libs/storage';

import { Button } from '../../components/Button';

import styles, {
  Wrapper,
  Container,
  PlantInfo,
  PlantInfoBack,
  Back,
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

import colors from '../../styles/colors';

import waterdropImg from '../../assets/waterdrop.png';

interface Params {
  plant: PlantProps;
}

export function PlantSave() {
  const navigation = useNavigation();
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

    if (dateTime) setSelectedDateTime(dateTime);
  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker((oldState) => !oldState);
  }

  async function handleSavePlant() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle:
          'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
        buttonTitle: 'Muito Obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      });
    } catch {
      Alert.alert('Não foi possível salvar. 😢');
    }
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <>
      <Wrapper
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <Container>
          <PlantInfo>
            <PlantInfoBack>
              <Back onPress={handleBack}>
                <Ionicons
                  name="chevron-back-outline"
                  size={24}
                  color={colors.heading}
                />
              </Back>
            </PlantInfoBack>
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
                display="default"
                onChange={handleChangeTime}
              />
            )}

            {Platform.OS === 'android' && (
              <DateTimePickerButton
                onPress={handleOpenDateTimePickerForAndroid}
              >
                <DateTimePickerText>{`Mudar ${format(
                  selectedDateTime,
                  'HH:mm'
                )}`}</DateTimePickerText>
              </DateTimePickerButton>
            )}

            <Button title="Cadastrar planta" onPress={handleSavePlant} />
          </Controller>
        </Container>
      </Wrapper>
    </>
  );
}
