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
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 40,
    width: '100%',
    backgroundColor: colors.gray,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  top: {
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  textLink: {
    fontWeight: 'bold',
    color: colors.secundary,
  },
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 5,
  },
});

export default styles;
