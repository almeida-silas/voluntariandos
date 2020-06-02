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
  div: {
    marginTop: '17%',
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
    bottom: -10,
    width: '100%',
  },
});

export default styles;
