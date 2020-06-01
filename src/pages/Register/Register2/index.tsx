import React from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import styles from './styles';

const Register2: React.FC = () => {
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text />

      <Input placeholder="Informe a Data de Nascimento" />
      <Input placeholder="Informe seu CPF" />
      <Input placeholder="Informe sua Área de interesse" />
      <Input placeholder="Informe sua experiências Profissionais" />

      <View style={styles.containerButtons}>
        <Button submit={navigateBack}>Voltar</Button>
        <Button>Concluir</Button>
      </View>
    </View>
  );
};

export default Register2;
