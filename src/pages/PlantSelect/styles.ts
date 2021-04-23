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

export const List = styled.View``;

export default StyleSheet.create({
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
