import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import StatsScreen from '../screens/StatsScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();



const homeName = "Accueil";
const accountName = "Account";
const StatsName = "Statistiques";

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                        tabBarStyle: { backgroundColor: '#191970', paddingBottom: 5 },
                        tabBarLabelStyle: {
                          fontSize: 10,
                          fontWeight: 'bold',
                        },
                        tabBarActiveTintColor: '#f96531',
                        tabBarInactiveTintColor: 'white',
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
                
                          return <Icon name={iconName} size={size} color={focused ? '#f96531' : 'white'} style={{ marginTop: 5 }} />
                
                
                        }
            })}>
                <Tab.Screen name="Accueil" component={HomeScreen} />
                <Tab.Screen name="Account" options={{title: 'Compte'}} component={AccountScreen} />
                <Tab.Screen name="Statistiques" component={StatsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default TabNavigation; 