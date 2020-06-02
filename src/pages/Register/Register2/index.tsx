import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/Button';
import Datapicker from '../../../components/Datapicker';
import Input from '../../../components/Input';
import styles from './styles';

const Register2: React.FC = () => {
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Datapicker label="Data de nascimento" />

      <Input label="CPF" placeholder="000.000.000-00" />

      <Input
        label="Área de interesse"
        placeholder="Informe sua Área de interesse"
      />
      <Input
        label="Experiências Profissionais"
        placeholder="Conte sobre as suas experiências profissionais"
      />

      <View style={styles.containerButtons}>
        <Button submit={navigateBack}>Voltar</Button>
        <Button>Concluir</Button>
      </View>
    </View>
  );
};

export default Register2;
