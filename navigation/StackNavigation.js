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
            <Stack.Screen name="Home" options={{ headerTitleAlign: 'center', headerShown: false }} component={HomeScreen} />
            <Stack.Screen name="Revenus" options={{ headerTitleAlign: 'center', headerStyle: {backgroundColor:'#2B6747'}, headerTitleStyle: {color:'white'}, headerTintColor:'white' }} component={AjoutRevenus} />
            <Stack.Screen name="Depenses" options={{ headerTitleAlign: 'center', headerStyle: {backgroundColor:'#2B6747'}, headerTitleStyle: {color:'white'}, headerTintColor:'white' }} component={AjoutDepenses} />
        </Stack.Navigator>

    )
}

export default StackNavigation