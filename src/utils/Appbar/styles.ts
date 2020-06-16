import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  containerTop: {
    backgroundColor: colors.gray,
    justifyContent: 'space-between',
  },
  icon: {
    color: colors.primary,
    fontSize: 22,
  },
  input: {
    width: '75%',
  },
});

export default styles;
