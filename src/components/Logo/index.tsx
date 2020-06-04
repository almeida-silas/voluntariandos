import React from 'react';
import { View } from 'react-native';

import ImgLogo from '../../assets/svg/Logo.svg';
import styles from './styles';

const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImgLogo />
    </View>
  );
};

export default Logo;
