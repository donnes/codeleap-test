import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider, initialWindowSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStore, RootStoreProvider, setupRootStore } from './models';
import { AppNavigator } from './navigation';
import { theme } from './theme';

const App:React.FC = () => {
  const [rootStore, setRootStore] = useState<RootStore>({});

  useEffect(() => {
    setupRootStore().then(setRootStore);
  }, []);

  return (
    <RootStoreProvider value={rootStore}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
          <AppNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </RootStoreProvider>
  );
};

export default App;
