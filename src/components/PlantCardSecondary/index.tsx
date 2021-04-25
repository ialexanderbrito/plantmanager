import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, PlantImg, Title, Detail, Time, TimeLabel } from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
}

export const PlantCardSecondary = ({ data, ...rest }: PlantProps) => {
  return (
    <Container {...rest}>
      <PlantImg uri={data.photo} width={50} height={50} />
      <Title>{data.name}</Title>
      <Detail>
        <TimeLabel>Regar às</TimeLabel>
        <Time>{data.hour}</Time>
      </Detail>
    </Container>
  );
};
