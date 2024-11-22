import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AboutMeScreen from './screens/AboutMeScreen';
import MyLanguagesScreen from './screens/MyLanguagesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="О Себе" component={AboutMeScreen} />
        <Tab.Screen name="Мои языки" component={MyLanguagesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
