import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import StatsScreen from '../screens/StatsScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StackNavigation from './StackNavigation';


const Tab = createBottomTabNavigator();



const homeName = "Accueil";
const accountName = "Account";
const StatsName = "Statistiques";

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                        tabBarStyle: { backgroundColor: '#222222', paddingBottom: 5 },
                        tabBarLabelStyle: {
                          fontSize: 10,
                          fontWeight: 'bold',
                        },
                        tabBarActiveTintColor: '#9F8236',
                        tabBarInactiveTintColor: '#adabab',
                        headerTitleAlign: 'center',
                        tabBarIcon: ({ focused, color, size }) => {
                          let iconName;
                          let rn = route.name;
                
                          if (rn === homeName) {
                            iconName = Platform.OS === 'ios' ? `home${focused ? '' : 'home'}` : 'home';
                          } else if (rn === accountName) {
                            iconName = Platform.OS === 'ios' ? `bank${focused ? '' : 'bank'}` : 'bank';
                          } else if (rn === StatsName) {
                            iconName = Platform.OS === 'ios' ? `chart-timeline-variant${focused ? '' : 'chart-timeline-variant'}` : 'chart-timeline-variant';
                          }
                
                          return <Icon name={iconName} size={size} color={focused ? '#9F8236' : '#adabab'} style={{ marginTop: 5 }} />
                
                
                        }
            })}>
                <Tab.Screen name="Accueil" options={{ headerShown: false }}  component={StackNavigation} />
                <Tab.Screen name="Account" options={{title: 'Compte', headerShown: false}} component={AccountScreen} />
                <Tab.Screen name="Statistiques" options={{ headerShown: false }} component={StatsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default TabNavigation; 