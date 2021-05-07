import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'ios' ? '40' : '155'}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.white};
  font-family: 'FontBold';
  margin: 64px 0 24px 0;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  background: ${colors.background};
  border-top-width: 1px;
  border-color: ${colors.silver_700};
  padding: 16px 0 ${16 + getBottomSpace()}px;
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackToSignInText = styled.Text`
  color: ${colors.white_absolute};
  font-size: 16px;
  font-family: 'FontRegular';
  margin-left: 16px;
`;
