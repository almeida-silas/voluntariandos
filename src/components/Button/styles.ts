import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    height: 35,
    width: '50%',
    borderRadius: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.secundary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.light,
    fontWeight: '900',
  },
});

export default styles;
