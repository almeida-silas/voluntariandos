import React, { useState } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './styles';

const Register: React.FC = () => {
  const [isJuridical, setIsJuridical] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const navigation = useNavigation();

  const navigateToRegister2 = () => {
    if (!isJuridical) {
      navigation.navigate('Register-physical');
    }
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Input onChangeText={setIsJuridical} />
      <Input
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        label="E-mail"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        secureText
        label="Senha"
      />
      <Input
        value={password2}
        secureText
        onChangeText={setPassword2}
        label="Confirmar senha"
      />

      <View style={styles.containerButtons}>
        <Button width={120} onPress={navigateBack}>
          Voltar
        </Button>
        <Button width={120} mode="outlined" onPress={navigateToRegister2}>
          Continar
        </Button>
      </View>
    </View>
  );
};

export default Register;
