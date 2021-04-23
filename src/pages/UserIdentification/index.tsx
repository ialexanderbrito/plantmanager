import React, { useState } from 'react';
import { Platform } from 'react-native';

import { Button } from '../../components/Button';

import colors from '../../styles/colors';

import {
  Container,
  Keyboard,
  Content,
  Form,
  Header,
  Title,
  Emoji,
  Input,
  Footer,
} from './styles';

export function UserIdentification() {
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

  return (
    <Container>
      <Keyboard behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
              style={[(isFocused || isFilled) && { borderColor: colors.green }]}
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />
            <Footer>
              <Button />
            </Footer>
          </Form>
        </Content>
      </Keyboard>
    </Container>
  );
}
