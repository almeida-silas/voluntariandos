import React from 'react';

import { Appbar as AppbarModal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';
import styles from './styles';

const Appbar: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <AppbarModal.Header accessibilityStates style={styles.containerTop}>
      <AppbarModal.Content title="Voluntariandos" accessibilityStates />
      <AppbarModal.Action
        icon={() => <Icon name="search" style={styles.icon} />}
        accessibilityStates
      />
      <AppbarModal.Action
        icon={() => <Icon name="log-out" style={styles.icon} />}
        onPress={signOut}
        accessibilityStates
      />
    </AppbarModal.Header>
  );
};

export default Appbar;
