import React, { useState } from 'react';
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AntDesign } from '@expo/vector-icons';

import { Button } from '../../components/Button';

import colors from '../../styles/colors';

import {
  Container,
  KeyboardView,
  Content,
  Form,
  Header,
  Title,
  Emoji,
  Input,
  Uploaded,
  OpenImage,
  Avatar,
  NotAvatar,
  Footer,
} from './styles';

export function UserIdentification() {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const [photo, setPhoto] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleUserImage() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      return Alert.alert('Aviso', 'Você não pode adicionar uma imagem 😢');
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaType: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;
    await AsyncStorage.setItem('@plantmanager:image', image);
    setPhoto(image);
  }

  async function handleSubmit() {
    if (!name)
      return Alert.alert('Me diz como chamar você 😢', 'Por favorzinho.');

    try {
      await AsyncStorage.setItem('@plantmanager:user', name);

      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle:
          'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    } catch {
      Alert.alert('Não foi possível salvar o seu nome. 😢');
    }
  }

  return (
    <Container>
      <KeyboardView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled ? '😄' : '😀'}</Emoji>
                <Title>
                  Como podemos {'\n'}
                  chamar você?
                </Title>
              </Header>
              <Input
                style={[
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <Title>Adicione sua {'\n'}foto de perfil</Title>
              <Uploaded>
                <OpenImage onPress={handleUserImage}>
                  {photo ? (
                    <Avatar source={{ uri: photo }} />
                  ) : (
                    <NotAvatar>
                      <AntDesign name="plus" size={24} color={colors.heading} />
                    </NotAvatar>
                  )}
                </OpenImage>
              </Uploaded>
              <Footer>
                <Button title="Confirmar" onPress={handleSubmit} />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardView>
    </Container>
  );
}
