import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Carousel from '../../components/Carousel';
import styles from './styles';

const Main: React.FC = () => {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const data = {
    title: 'Desafio',
    description: 'Melhoria para volutários',
    content:
      'O aplicativo tem a intenção de melhorar a' +
      'comunicação das intituições com os seus voluntários.',
  };

  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        <Carousel itens={[data, data, data]} />
      </View>

      <Button mode="outlined" onPress={navigateToLogin}>
        Entrar
      </Button>
      <Button onPress={navigateToRegister}>Inscrever-se</Button>
    </View>
  );
};

export default Main;
