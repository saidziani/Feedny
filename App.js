import React from 'react';
import { StatusBar } from 'react-native';
import {ThemeProvider} from 'react-native-material-ui'
import {TabNavigator, StackNavigator} from 'react-navigation'
import style from './assets/style/Style'
import Welcome from './components/Welcome'
import Home from './components/Home'
import Login from './components/Login'
import Main from './components/Main'
import Details from './components/Details'


import { YellowBox } from 'react-native';
import Categories from "./components/Categories";
YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);

const RootStack = StackNavigator(
    {
        Welcome: { screen: Welcome,},
        Home: { screen: Home,},
        Login: { screen: Login,},
        Main: { screen: Main,},
        Categories: {screen: Categories,},
        Details: { screen: Details,},
    },
    {
        initialRouteName: 'Categories',
    }
);

export default class App extends React.Component {

    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <RootStack />
            </ThemeProvider>
        )
    }
}




/*Material-UI style customization*/
const uiTheme = {
    palette: {
        primaryColor: style.green,
    },
    toolbar: {
        container: {
            marginTop: StatusBar.currentHeight,
            height: 50,
        },
    }
};