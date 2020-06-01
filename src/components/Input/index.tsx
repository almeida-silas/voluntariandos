import React from 'react';
import { TextInput, Text, View } from 'react-native';

import styles from './styles';

interface Props {
  onChange?(text: string): void;
  value?: string;
  label?: string;
  placeholder?: string;
  secureText?: boolean;
  spellCheck?: boolean;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  secureText,
  spellCheck,
  label,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor="#FFFF"
          secureTextEntry={secureText}
          spellCheck={spellCheck}
        />
      </View>
    </View>
  );
};

export default Input;
