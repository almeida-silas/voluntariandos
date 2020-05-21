import React from 'react';
import { Text, View, TextInput } from 'react-native';

import Button from '../../../components/Button';
import styles from '../styles';

const Register2: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text />

      <TextInput style={styles.input} placeholder="Informe o Sexo" />
      <TextInput
        style={styles.input}
        placeholder="Informe a Data de Nascimento"
      />
      <TextInput style={styles.input} placeholder="Informe seu CPF" />
      <TextInput style={styles.input} placeholder="Informe seu RG" />
      <TextInput
        style={styles.input}
        placeholder="Informe sua Área de interesse"
      />
      <TextInput
        style={styles.input}
        placeholder="Informe sua experiências Profissionais"
      />

      <Button submit={() => {}}>Concluir</Button>
    </View>
  );
};

export default Register2;
