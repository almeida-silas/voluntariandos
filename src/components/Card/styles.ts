import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 110,
    padding: 15,
    marginBottom: 13,
    borderWidth: 2,
    borderRadius: 5,
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderColor: colors.gray2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  containerIcons: {
    height: 95,
    position: 'absolute',
    paddingRight: '5%',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 20,
    color: colors.light,
  },
  imageProfile: {
    width: 75,
    height: 75,
    borderRadius: 40,
    marginVertical: '100%',
    backgroundColor: colors.light,
  },
  textContent: {
    marginLeft: '5%',
    marginBottom: 5,
    color: colors.light,
  },
  button: {
    position: 'absolute',
    backgroundColor: colors.light,
    alignSelf: 'flex-end',
  },
});

export default styles;
