import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './main.navigator';
import { useStores } from '../models';

const AppNavigator:React.FC = () => {
  const { userStore } = useStores();

  return (
    <NavigationContainer>
      <MainNavigator initialRouteName={userStore.username ? 'CareersList' : 'Login'} />
    </NavigationContainer>
  );
};

export default AppNavigator;
