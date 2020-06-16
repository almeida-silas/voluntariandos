import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();
  const navigate = useNavigation();

  const handdleLogin = async () => {
    await signIn({ email, password });
  };

  const navigateToRegister = () => {
    navigate.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.div} />

      <Input
        label="E-mail"
        value={email}
        maxLength={250}
        onChangeText={setEmail}
        autoCorrect={false}
        keyboardType="email-address"
      />

      <Input
        label="Senha"
        value={password}
        maxLength={80}
        secureText={true}
        onChangeText={setPassword}
      />

      <Button onPress={handdleLogin}>Entrar</Button>

      <View style={styles.containerRegister}>
        <Text style={styles.textRegister}>Não Tem uma conta? </Text>

        <TouchableOpacity onPress={navigateToRegister}>
          <Text style={styles.textButton}>Registrar-se</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerBottom}>
        <View style={styles.top}>
          <Text style={styles.text}> PROBLEMAS NO LOGIN?</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.textLink}>AJUDA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
