import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';


const Tab = createBottomTabNavigator

const TabNavigation = () => (
<NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Accueil" component={HomeScreen} />
    </Tab.Navigator>
</NavigationContainer>
);

export default TabNavigation;