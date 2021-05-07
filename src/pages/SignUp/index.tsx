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
import { Container, Title, BackToSignIn, BackToSignInText } from './styles';
import { colors } from '../../styles/colors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const inputEmailRef = useRef<TextInput>(null);
  const inputPasswordRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSignUp = useCallback((data: object) => {
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
              <Title>Crie sua conta</Title>
            </View>

            <Form
              ref={formRef}
              onSubmit={handleSignUp}
              style={{
                width: '100%',
              }}
            >
              <Input
                name="name"
                icon="user"
                placeholder="Nome"
                autoCapitalize="words" // Habilita caixa alta a primeira letra
                returnKeyType="next" // Muda o botão enter do teclado para "Próximo"
                onSubmitEditing={() => {
                  inputEmailRef.current?.focus();
                }}
              />
              <Input
                ref={inputEmailRef}
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false} // Desabilita a função do teclado que fica tentando corrigir(Corretor)
                autoCapitalize="none" // Desabilitamos a caixa alta automática
                keyboardType="email-address"
                returnKeyType="next" // Muda o botão enter do teclado para "Próximo"
                onSubmitEditing={() => {
                  inputPasswordRef.current?.focus();
                }}
              />
              <Input
                ref={inputPasswordRef}
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
                Cadastrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrow-left" size={20} color={colors.white_absolute} />
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
