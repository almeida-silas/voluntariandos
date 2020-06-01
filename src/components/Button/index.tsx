import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  submit?(): void;
}

const Button: React.FC<Props> = ({ children, submit }) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={submit}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
