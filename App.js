import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {COLOR, ThemeProvider} from 'react-native-material-ui'

import Welcome from './components/Welcome'
import Home from './components/Home'


const RootStack = StackNavigator(
    {
        Welcome: { screen: Welcome,},
        Home: { screen: Home,},
    },
    {
        initialRouteName: 'Welcome',
    }
);

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};


export default class App extends React.Component {
    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <RootStack />
            </ThemeProvider>
        )
    }
}