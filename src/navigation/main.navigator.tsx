import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CareersList from '../screens/careers-list';

const Stack = createStackNavigator();

type MainNavigatorProps = {
  initialRouteName: string,
};

const MainNavigator:React.FC<MainNavigatorProps> = ({ initialRouteName }) => (
  <Stack.Navigator headerMode="none" initialRouteName={initialRouteName}>
    <Stack.Screen name="CareersList" component={CareersList} />
  </Stack.Navigator>
);

export default MainNavigator;
