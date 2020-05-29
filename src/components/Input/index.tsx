import React from 'react';
import { TextInput } from 'react-native';

// import styles from './styles';

interface Props {
  onChange(): void;
  value: string;
}

const Input: React.FC<Props> = ({ value, onChange }) => {
  return <TextInput value={value} onChange={onChange} />;
};

export default Input;
