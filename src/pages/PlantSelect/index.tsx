import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Header } from '../../components/Header';
import { EnviromentButton } from '../../components/EnviromentButton';

import styles, { Container, Content, Title, SubTitle, List } from './styles';

import api from '../../services/api';

interface EnviromentProps {
  key: string;
  title: string;
}

export function PlantSelect() {
  const [environment, setEnvironment] = useState<EnviromentProps[]>();

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('plants_environments');
      setEnvironment([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    }

    fetchEnviroment();
  }, []);

  return (
    <Container>
      <Content>
        <Header />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </Content>

      <List>
        <FlatList
          data={environment}
          renderItem={({ item }) => <EnviromentButton title={item.title} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </List>
    </Container>
  );
}
