import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
  },
  containerItens: {
    marginTop: 10,
  },
  avatar: {
    marginTop: 15,
    marginLeft: 25,
  },
  itens: {
    marginBottom: 10,
  },
  title: {
    marginLeft: 15,
    fontSize: 17,
    color: colors.gray2,
  },
  caption: {
    marginLeft: 15,
    fontSize: 11,
    color: colors.gray2,
  },
  icon: {
    color: colors.primary,
    fontSize: 22,
  },
});

export default styles;
