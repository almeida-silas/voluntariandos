import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import ContainerLink from '../../components/ContainerLink';
import Input from '../../components/Input';
import styles from './styles';

const Register: React.FC = () => {
  const navigation = useNavigation();

  const navigateToRegister2 = () => {
    navigation.navigate('Register2');
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Tipo de pessoa" />

      <Input label="E-mail" placeholder="Informe seu Email" />
      <Input label="Senha" placeholder="****************" />
      <Input label="Confirmar senha" placeholder="****************" />

      <View style={styles.containerButtons}>
        <Button submit={navigateBack}>Voltar</Button>
        <Button submit={navigateToRegister2}>Continar</Button>
      </View>

      <View style={styles.containerBottom}>
        <ContainerLink link="AJUDA">PROBLEMAS AO ENTRAR?</ContainerLink>
      </View>
    </View>
  );
};

export default Register;
