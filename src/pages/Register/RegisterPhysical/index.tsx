import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/Button';
import Datapicker from '../../../components/Datapicker';
import Input from '../../../components/Input';

import parentStyle from '../styles';

const Register2: React.FC = () => {
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={parentStyle.container}>
      <Datapicker label="Data de nascimento" />

      <Input label="CPF" />

      <Input label="Área de interesse" />
      <Input label="Experiências Profissionais" />

      <View style={parentStyle.containerButtons}>
        <Button width={120} onPress={navigateBack}>
          Voltar
        </Button>

        <Button width={120} mode="outlined" onPress={() => {}}>
          Concluir
        </Button>
      </View>
    </View>
  );
};

export default Register2;
