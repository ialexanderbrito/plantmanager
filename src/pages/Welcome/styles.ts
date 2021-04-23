import styled from 'styled-components/native';
import { Dimensions } from 'react-native'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-horizontal: 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  font-family: ${fonts.heading};
  line-height: 34px;
`;

export const Background = styled.Image`
  height: ${Dimensions.get('window').width * 0.7};
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 18px;
  padding-horizontal: 20px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;

export const ButtonIcon = styled.Text`
  color: ${colors.white};
`;
