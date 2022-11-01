import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Listing from './screens/ListScreen';
import Details from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="ListScreen">
            <Stack.Screen 
                name="ListScreen" 
                component={Listing}
                options={{
                    title: 'Products',
                    headerStyle: {
                      backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center'
                    },
                    headerTitleStyle: {
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'white',
                    },
                }}
            />
            <Stack.Screen 
                name="DetailScreen" 
                component={Details}
                options={{
                    title: 'Product Details',
                    headerStyle: {
                      backgroundColor: 'red'
                    },
                    headerTitleStyle: {
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'white'
                    },
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}