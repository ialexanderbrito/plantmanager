import styled from 'styled-components/native';
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
  margin-right: 5px;
`;

export const ButtonActive = styled(Button)`
  background-color: ${colors.green_light};
`;

export const Title = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const TitleActive = styled(Title)`
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
`;
