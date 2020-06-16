import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  picker: {
    height: 50,
    width: '80%',
    borderColor: '#000',
    borderRadius: 333,
  },
  containerButtons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerBottom: {
    bottom: -10,
    width: '100%',
  },
});

export default styles;
