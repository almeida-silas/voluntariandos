import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderColor: colors.light,
  },
  containerRegister: {
    color: colors.light,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRegister: {
    color: colors.light,
    fontSize: 12,
  },
  textButton: {
    color: colors.secundary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBottom: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    height: 50,
    flexDirection: 'row',
  },
});

export default styles;
