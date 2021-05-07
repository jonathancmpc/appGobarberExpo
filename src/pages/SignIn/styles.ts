import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'ios' ? '40' : '0'}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.white};
  font-family: 'FontBold';
  margin: 64px 0 24px 0;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-family: 'FontRegular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
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

export const CreateAccountButtonText = styled.Text`
  color: ${colors.orange};
  font-size: 16px;
  font-family: 'FontRegular';
  margin-left: 16px;
`;
