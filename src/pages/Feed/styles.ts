import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  containerTop: {
    maxHeight: 55,
    borderWidth: 1,
    justifyContent: 'center',
  },
  cardsBody: {
    marginTop: 25,
    alignItems: 'center',
  },
  button: {},
});

export default styles;
