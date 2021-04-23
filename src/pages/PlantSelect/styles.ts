import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Content = styled.View`
  padding-horizontal: 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.text};
  line-height: 20px;
`;

export const List = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  margin-left: 32px;
  margin-vertical: 32px;
`;

export const ListPlant = styled.View`
  flex: 1;
  padding-horizontal: 32px;
  justify-content: center;
`;
