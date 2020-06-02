import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Carousel from '../../components/Carousel';
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

  const data = {
    title: 'Desafio',
    description: 'Melhoria para volutários',
    content:
      'O aplicativo tem a intenção de melhorar a comunicação das intituições com os seus voluntários.',
  };

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.carousel}>
        <Carousel itens={[data, data, data]} />
      </View>

      <Button submit={navigateToLogin}>Entrar</Button>
      <Button submit={navigateToRegister}>Inscrever-se</Button>

      <View style={styles.containerBottom}>
        <ContainerLink link="AJUDA">PROBLEMAS AO ENTRAR?</ContainerLink>
      </View>
    </View>
  );
};
export default Main;
