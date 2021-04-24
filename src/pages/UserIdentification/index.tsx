import React, { useState } from 'react';
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  Footer,
} from './styles';

export function UserIdentification() {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

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

  async function handleSubmit() {
    if (!name)
      return Alert.alert('Me diz como chamar você 😢', 'Por favorzinho.');

    await AsyncStorage.setItem('@plantmanager:user', name);

    navigation.navigate('Confirmation');
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
