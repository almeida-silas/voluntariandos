import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  carousel: {
    marginTop: 20,
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBottom: {
    bottom: -10,
    width: '100%',
  },
});

export default styles;
