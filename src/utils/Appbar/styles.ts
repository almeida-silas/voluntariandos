import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  containerTop: {
    borderBottomWidth: 1,
    borderColor: colors.gray2,
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
  },
  icon: {
    color: colors.light,
    fontSize: 22,
  },
  input: {
    width: '75%',
  },
});

export default styles;
