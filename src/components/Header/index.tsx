import React from 'react';

import { Container, Content, Greeting, Username, Avatar } from './styles';

import userImg from '../../assets/alexander.png';

export function Header() {
  return (
    <Container>
      <Content>
        <Greeting>Olá,</Greeting>
        <Username>Alexander</Username>
      </Content>
      <Avatar source={userImg} />
    </Container>
  );
}
