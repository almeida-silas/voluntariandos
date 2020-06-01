import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
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
