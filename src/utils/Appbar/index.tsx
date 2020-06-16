import React from 'react';

import { Appbar as AppbarModal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

const Appbar: React.FC = () => {
  return (
    <AppbarModal.Header accessibilityStates style={styles.containerTop}>
      <AppbarModal.Action
        icon={() => <Icon name="menu" style={styles.icon} />}
        onPress={() => {}}
        accessibilityStates
      />
    </AppbarModal.Header>
  );
};

export default Appbar;
