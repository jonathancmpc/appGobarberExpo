import React, { useCallback, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import { colors } from '../../styles/colors';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <>
      {/* A keyboardAvoindigView é a área que deve aparecer ou diminuir, quando o teclado do celular é acionado, utilizamos no ios */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          /* A keyboardShouldPersistTaps informa se quando o usuário clicar na área da scrollview o teclado deve fechar ou não. Handle é a opção que faŕa o procedimento padrão em cada sistema operacional */
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            {/* Esta View foi acrescentada pq os textos não pegam a animação quando o teclado do celular é acionado */}
            <View>
              <Title>Faça seu logon</Title>
            </View>

            <Form
              ref={formRef}
              onSubmit={handleSignIn}
              style={{ width: '100%' }}
            >
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false} // Desabilita a função do teclado que fica tentando corrigir(Corretor)
                autoCapitalize="none" // Desabilitamos a caixa alta automática
                keyboardType="email-address"
                returnKeyType="next" // Muda o botão enter do teclado para "Próximo"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry // Campo senha, vira bolinhas
                returnKeyType="send" // Muda o botão enter do teclado para "Enviar"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }} // Quando o usuário clica no enter/enviar no teclado ele já submete
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>

            <ForgotPassword
              onPress={() => {
                console.log('Esqueci minha senha');
              }}
            >
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        <Icon name="log-in" size={20} color={colors.orange} />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
