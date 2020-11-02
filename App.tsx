import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet} from 'react-native';
import ErrorBoundary from './src/services/ErrorBoundary';
import SignIn from './src/modules/SignIn/SignIn';
import Authentication from './src/screens/Authentication';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux'
import {store} from './src/services/Store/Store'

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name={"Auth"} component={Authentication}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </ErrorBoundary>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
