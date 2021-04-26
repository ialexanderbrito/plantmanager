import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Content, Greeting, Username, Avatar } from './styles';

export function Header() {
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

  return (
    <Container>
      <Content>
        <Greeting>Olá,</Greeting>
        <Username>{userName}</Username>
      </Content>
      <Avatar source={{ uri: userPhoto }} />
    </Container>
  );
}
