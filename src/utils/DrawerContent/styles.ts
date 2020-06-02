import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {},
  section: {},
  itens: {
    color: colors.light,
    borderColor: colors.light,
    borderBottomWidth: 1.1,
    marginBottom: 10,
  },
  avatar: {
    marginTop: 15,
    marginLeft: 15,
  },
  title: {
    fontSize: 17,
    color: colors.gray2,
  },
  caption: {
    fontSize: 11,
    color: colors.gray2,
  },
  icon: {
    color: colors.primary,
    fontSize: 22,
  },
});

export default styles;
