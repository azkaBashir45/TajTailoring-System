import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './component/LoginScreen';
import SignUpScreen from './component/SignUpScreen';
const Stack = createStackNavigator();
class App extends React.Component {
render() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}
export default App;

