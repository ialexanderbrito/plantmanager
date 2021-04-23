import React from 'react';

import { Button } from '../../components/Button';

import { Container, Content, Emoji, Title, SubTitle, Footer } from './styles';

export function Confirmation() {
  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>
        <Title>Prontinho</Title>
        <SubTitle>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </SubTitle>
        <Footer>
          <Button />
        </Footer>
      </Content>
    </Container>
  );
}
