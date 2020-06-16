import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '45%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.secundary,
  },
  title: {
    marginTop: 25,
    color: colors.light,
    fontSize: 30,
  },
  paragraph: {
    color: colors.black,
  },
  caption: {
    paddingHorizontal: 35,
    color: colors.primary,
  },
  activeDot: {
    width: 20,
    height: 3.5,
    backgroundColor: colors.light,
  },
  inactiveDot: {
    width: 20,
    height: 3,
    borderRadius: 0,
    marginHorizontal: -20,
    backgroundColor: colors.light,
  },
  containerPagination: {
    marginTop: -18,
    alignItems: 'baseline',
  },
});

export default styles;
