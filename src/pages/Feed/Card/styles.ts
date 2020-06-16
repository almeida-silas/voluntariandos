import { StyleSheet } from 'react-native';

import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    marginBottom: 13,
    borderWidth: 1,
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
    backgroundColor: colors.lilac,
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
    marginLeft: 10,
    marginVertical: '100%',
  },
  textContent: {
    paddingRight: 30,
    marginLeft: '5%',
    marginRight: '10%',
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
