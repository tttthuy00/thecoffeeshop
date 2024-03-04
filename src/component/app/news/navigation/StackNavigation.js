import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import MyorderCurrent from '../screen/MyorderCurrent';
import MyorderHistory from '../screen/MyorderHistory';
import Review_request from '../screen/Review_request';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Current" component={MyorderCurrent}/>
          <Stack.Screen name="History" component={MyorderHistory}/>
          <Stack.Screen name="Report" component={Review_request}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation