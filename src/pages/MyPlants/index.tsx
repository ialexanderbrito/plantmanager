/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import { PlantProps, loadPlant } from '../../libs/storage';

import { Header } from '../../components/Header';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';

import {
  Container,
  Spotlight,
  SpotlightImg,
  SpotlightText,
  Plants,
  PlantsTitle,
} from './styles';

import waterdropImg from '../../assets/waterdrop.png';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWaterd(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime}.`
      );

      setMyPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageData();
  }, []);

  return (
    <Container>
      <Header />
      <Spotlight>
        <SpotlightImg source={waterdropImg} />
        <SpotlightText>{nextWaterd}</SpotlightText>
      </Spotlight>
      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>

        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={myPlants}
          renderItem={({ item }) => <PlantCardSecondary data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Plants>
    </Container>
  );
}
