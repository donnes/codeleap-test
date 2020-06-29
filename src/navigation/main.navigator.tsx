import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { CareerSnapshot } from '../models/career';
import Login from '../screens/login';
import CareersList from '../screens/careers-list';
import CareersEdit from '../screens/careers-edit';

type RootStackParamsList = {
  Login: undefined,
  CareersList: undefined,
  CareersEdit: { career: CareerSnapshot },
}

const Stack = createStackNavigator<RootStackParamsList>();

type MainNavigatorProps = {
  initialRouteName?: 'Login' | 'CareersList' | 'CareersEdit' | undefined,
};

const MainNavigator:React.FC<MainNavigatorProps> = ({ initialRouteName }) => (
  <Stack.Navigator headerMode="none" initialRouteName={initialRouteName}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="CareersList" component={CareersList} />
    <Stack.Screen name="CareersEdit" component={CareersEdit} />
  </Stack.Navigator>
);

export default MainNavigator;
