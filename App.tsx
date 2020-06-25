import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import { AuthProvider } from './src/context/auth';
import theme from './src/styles/theme';

import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PaperProvider theme={theme}>
          <Routes />
        </PaperProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
