import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppNavigator } from './navigation';
import { colors } from './theme';

const App:React.FC = () => (
  <ThemeProvider theme={{ colors }}>
    <AppNavigator />
  </ThemeProvider>
);

export default App;
