import React from 'react';

import {Colors} from './../components/styles';
const {primary, tertiary} = Colors;

//React Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Profile from './../screens/Profile';
import Location from './../screens/Location';

const Stack = createNativeStackNavigator();

const RootStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
			screenOptions={{ 
				headerStyle: {
					backgroundColor: 'transparent'
				},
				headerTintColor: tertiary,
				headerTransparent: true,
				headerTitle: '',
				headerLeftContainerStyle: {
					paddingLeft: 20
				}
			 }}
			 initialRouteName="Login"
			>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Signup" component={Signup} />
				<Stack.Screen options={{ headerTintColor:primary }} name="Welcome" component={Welcome} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="Location" component={Location} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default RootStack;