import React from 'react';
import { Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
  Container,
  ContainerRemove,
  ButtonRemove,
  PlantImg,
  Title,
  Detail,
  Time,
  TimeLabel,
} from './styles';

import colors from '../../styles/colors';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

export const PlantCardSecondary = ({
  data,
  handleRemove,
  ...rest
}: PlantProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <ContainerRemove>
            <ButtonRemove onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </ButtonRemove>
          </ContainerRemove>
        </Animated.View>
      )}
    >
      <Container {...rest}>
        <PlantImg uri={data.photo} width={50} height={50} />
        <Title>{data.name}</Title>
        <Detail>
          <TimeLabel>Regar às</TimeLabel>
          <Time>{data.hour}</Time>
        </Detail>
      </Container>
    </Swipeable>
  );
};
