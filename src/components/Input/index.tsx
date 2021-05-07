import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { colors } from '../../styles/colors';
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  placeholder: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, placeholder }) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} size={20} color={colors.silver_100} />

      <TextInput
        ref={inputElementRef}
        placeholder={placeholder}
        placeholderTextColor={colors.silver_100}
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
      />
    </Container>
  );
};

export default Input;
