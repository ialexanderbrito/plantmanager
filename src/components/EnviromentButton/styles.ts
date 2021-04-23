import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Button = styled(RectButton)`
  background-color: ${colors.shape};
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-horizontal: 5px;
`;

export const Title = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export default StyleSheet.create({
  containerActive: {
    backgroundColor: colors.green_light,
  },
  titleActive: {
    color: colors.heading,
    fontFamily: fonts.heading,
  },
});
