import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    width: '85%',
    paddingLeft: 15,
    borderWidth: 2,
    borderRadius: 5,
    color: colors.light,
    borderColor: colors.light,
  },
  containerInput: {
    flexDirection: 'row',
    paddingBottom: 22,
  },
  label: {
    paddingLeft: '9%',
    color: colors.light,
    marginBottom: 2,
    alignSelf: 'flex-start',
  },
});

export default styles;
