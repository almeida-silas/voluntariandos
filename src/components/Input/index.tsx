import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

import styles from './styles';
import colors from '../../styles/colors';

interface Props {
  onChange?(text: string): void;
  value?: string;
  label?: string;
  placeholder?: string;
  secureText?: boolean;
  spellCheck?: boolean;
  maxLength?: number;
  maks?: string | undefined;
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
      <View style={styles.containerInput}>
        <TextInput
          accessibilityStates
          label={label}
          value={value}
          onChangeText={onChange}
          style={styles.input}
          placeholder={placeholder}
          maxLength={maxLength}
          placeholderTextColor={colors.gray2}
          secureTextEntry={secureText}
          spellCheck={spellCheck}
        />
      </View>
    </View>
  );
};

export default Input;
