import React from 'react';
import { TextInputProps } from 'react-native';

import { colors } from '../../styles/colors';
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, icon, placeholder }) => (
  <Container>
    <Icon name={icon} size={20} color={colors.silver_100} />

    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.silver_100}
    />
  </Container>
);

export default Input;
