import React from 'react';

import { Appbar as AppbarModal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import { DrawerActions, useNavigation } from '@react-navigation/native';

import styles from './styles';

const Appbar: React.FC = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <AppbarModal.Header accessibilityStates style={styles.containerTop}>
      <AppbarModal.Action
        accessibilityStates
        icon={() => <Icon name="menu" style={styles.icon} />}
        onPress={openDrawer}
      />
    </AppbarModal.Header>
  );
};

export default Appbar;
