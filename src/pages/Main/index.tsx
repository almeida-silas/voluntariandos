import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import ContainerLink from '../../components/ContainerLink';
import styles from './styles';

const Main: React.FC = () => {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Logo />

      <Button submit={navigateToLogin}>Login</Button>
      <Button submit={navigateToRegister}>Inscrever-se</Button>

      <View style={styles.containerRegister}>
        <Text>NÃO TEM UMA CONTA? CRIAR</Text>
      </View>

      <View style={styles.containerBottom}>
        <ContainerLink link="AJUDA">PROBLEMAS AO ENTRAR?</ContainerLink>
      </View>
    </View>
  );
};
export default Main;
