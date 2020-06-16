import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secundary,
  },
  containerOutline: {
    marginTop: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.secundary,
  },
  button: {
    alignSelf: 'center',
    height: 35,
  },
});
export default styles;
