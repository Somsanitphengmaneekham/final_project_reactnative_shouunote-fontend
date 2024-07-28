
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Shouunote/src/Homepage/LoginScreen';
import RegisterScreen from '../Shouunote/src/Homepage/RegisterScreen';
import NoteList from './src/menu/NoteList';
import CreateNote from './src/menu/CreateNote';
import EditNote from './src/menu/EditNote';
import ProfileScreen from './src/profile/ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={LoginScreen}

          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="NoteList" component={NoteList} options={{ headerShown: false }}/>
        <Stack.Screen name="CreateNote" component={CreateNote} />
        <Stack.Screen name="EditNote" component={EditNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
