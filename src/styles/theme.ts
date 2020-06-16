import { DefaultTheme, Theme } from 'react-native-paper';

import colors from './colors';

const theme: Theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.secundary,
    text: colors.gray2,
    placeholder: colors.gray2,
  },
};

export default theme;
