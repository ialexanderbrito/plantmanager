import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title, PlantImg } from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
  return (
    <Container>
      <PlantImg uri={data.photo} width={70} height={70} />
      <Title>{data.name}</Title>
    </Container>
  );
};
