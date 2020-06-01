import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: '10%',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  containerRegister: {},
  containerBottom: {
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

export default styles;
