import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

import parentStyle from '../../styles';

const Tel: React.FC = () => {
  const navigation = useNavigation();

  const navigateToRegister2 = () => {
    navigation.navigate('Register2');
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={parentStyle.container}>
      <Input label="Telefone" />

      <View style={parentStyle.containerButtons}>
        <Button width={120} onPress={navigateBack}>
          Voltar
        </Button>
        <Button width={120} onPress={navigateToRegister2}>
          Continar
        </Button>
      </View>
    </View>
  );
};

export default Tel;
