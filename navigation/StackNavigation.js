import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AjoutDepenses from '../screens/AjoutDepenses'
import AjoutRevenus from '../screens/AjoutRevenus'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

const StackNavigation = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Revenus" component={AjoutRevenus} />
              <Stack.Screen name="Depenses" component={AjoutDepenses} />
          </Stack.Navigator>
      </NavigationContainer>
      
  )
}

export default StackNavigation