/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { TodoProvider } from './src/context/Tasks';
import { LocationProvider } from './src/context/Location';

const EntendedApp = () => {
    return (
            <TodoProvider>
                <LocationProvider>
                    <App />
                </LocationProvider>
            </TodoProvider>
    )
}

AppRegistry.registerComponent(appName, () => EntendedApp);
