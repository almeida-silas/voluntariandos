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
  maxLength?: number;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  secureText,
  spellCheck,
  label,
  maxLength,
}) => {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          placeholderTextColor="#979797"
          secureTextEntry={secureText}
          spellCheck={spellCheck}
        />
      </View>
    </View>
  );
};

export default Input;
