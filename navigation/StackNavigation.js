import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AjoutDepenses from '../screens/AjoutDepenses'
import AjoutRevenus from '../screens/AjoutRevenus'
import HomeScreen from '../screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" options={{ headerTitleAlign: 'center' }} component={HomeScreen} />
            <Stack.Screen name="Revenus" options={{ headerTitleAlign: 'center' }} component={AjoutRevenus} />
            <Stack.Screen name="Depenses" options={{ headerTitleAlign: 'center' }} component={AjoutDepenses} />
        </Stack.Navigator>

    )
}

export default StackNavigation