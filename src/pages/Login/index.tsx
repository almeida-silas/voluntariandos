import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ContainerLink from '../../components/ContainerLink';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();
  const navigate = useNavigation();

  const handdleLogin = async () => {
    const response = await signIn({ email, password });

    if (!response) {
      return;
    }

    return navigate.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Logo />

      <Input
        label="E-mail"
        value={email}
        onChange={setEmail}
        placeholder="email@example.com"
      />

      <Input
        label="Senha"
        value={password}
        secureText={true}
        onChange={setPassword}
        placeholder="*********"
      />
      <Button submit={handdleLogin}>Entrar</Button>

      <View style={styles.containerRegister}>
        <Text style={styles.textRegister}>Não Tem uma conta? </Text>

        <TouchableOpacity>
          <Text style={styles.textButton}>Registrar-se</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerBottom}>
        <ContainerLink onPress={() => {}} link="AJUDA">
          PROBLEMAS NO LOGIN?
        </ContainerLink>
      </View>
    </View>
  );
};

export default Login;
