import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
// import styles from './styles';

const Tel: React.FC = () => {
  const navigation = useNavigation();

  const navigateToRegister2 = () => {
    navigation.navigate('Register2');
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Input label="Telefone" placeholder="(71) 9 9999-9999" />

      <View>
        <Button submit={navigateBack}>Voltar</Button>
        <Button submit={navigateToRegister2}>Continar</Button>
      </View>
    </View>
  );
};

export default Tel;
