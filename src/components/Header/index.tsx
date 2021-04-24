import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Content, Greeting, Username, Avatar } from './styles';

import userImg from '../../assets/alexander.png';

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');

      setUserName(user || '');
    }
    loadStorageUserName();
  }, [userName]);

  return (
    <Container>
      <Content>
        <Greeting>Olá,</Greeting>
        <Username>{userName}</Username>
      </Content>
      <Avatar source={userImg} />
    </Container>
  );
}
