import React from 'react';
import { Button as ButtonPaper } from 'react-native-paper';

import colors from '../../styles/colors';
import styles from './styles';

interface Props {
  onPress?(): void;
  icon?: string;
  mode?: 'text' | 'outlined' | 'contained' | undefined;
  width?: number;
}

const Button: React.FC<Props> = ({
  children,
  mode = 'contained',
  icon,
  width = 170,
  onPress,
}) => {
  return (
    <ButtonPaper
      accessibilityStates
      style={mode === 'outlined' ? styles.containerOutline : styles.container}
      contentStyle={[styles.button, { width }]}
      icon={icon}
      mode={mode}
      color={colors.light}
      onPress={onPress}>
      {children}
    </ButtonPaper>
  );
};

export default Button;
