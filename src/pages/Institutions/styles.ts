import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  containerInstitution: {
    marginTop: 10,
    height: 45,
    width: 300,
    borderWidth: 1,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.gray2,
    backgroundColor: colors.lilac,
  },
  content: {
    color: colors.gray2,
  },
  message: {
    color: colors.light,
  },
});

export default styles;
