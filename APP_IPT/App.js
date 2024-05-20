import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navegacao from './components/Navegacao';
import Login from './components/Login';
import NovaConta from './components/NovaConta';
import AuthContextProvider from './Context';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
          <Stack.Screen name="NovaConta" component={NovaConta} />
          <Stack.Screen options={{headerShown: false}} name="Navegacao" component={Navegacao} />
        </Stack.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  );
}