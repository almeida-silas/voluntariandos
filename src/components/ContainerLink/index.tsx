import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface IProps {
  link?: ReactNode;
  onPress?(): void;
}

const ContainerLink: React.FC<IProps> = ({ children, link, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>{children}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textLink}>{link}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContainerLink;
