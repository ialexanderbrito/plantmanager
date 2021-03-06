import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled(RectButton)`
  width: 100%;
  padding-horizontal: 10px;
  padding-vertical: 25px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.shape};
  margin-vertical: 5px;
`;

export const ContainerRemove = styled.View``;

export const ButtonRemove = styled(RectButton)`
  width: 130px;
  height: 100px;
  background-color: ${colors.red};
  margin-top: 8px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 25px;
  padding-left: 15px;
  margin-right: -25px;
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: 10;
  font-family: ${fonts.heading};
  font-size: 17px;
  color: ${colors.heading};
`;

export const PlantImg = styled(SvgFromUri)``;

export const Detail = styled.View`
  align-items: flex-end;
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`;

export const TimeLabel = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};
`;
