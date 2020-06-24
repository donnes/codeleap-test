import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './main.navigator';

const AppNavigator:React.FC = () => (
  <NavigationContainer>
    <MainNavigator initialRouteName="CareersList" />
  </NavigationContainer>
);

export default AppNavigator;
