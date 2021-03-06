import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: 54px;
  align-items: center;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  margin-top: 20px;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${colors.gray};
  color: ${colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;

export const Uploaded = styled.View`
  align-self: center;
  padding-top: 10px;
`;

export const OpenImage = styled.TouchableOpacity``;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;

export const NotAvatar = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 40px;
  background-color: ${colors.gray};
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding-horizontal: 20px;
`;
