import React from 'react';
import { StatusBar } from 'react-native';
import {ThemeProvider} from 'react-native-material-ui'
import {TabNavigator, StackNavigator} from 'react-navigation'
import style from './assets/style/Style'
import Welcome from './components/Welcome'
import Home from './components/Home'
import Login from './components/Login'
import Main from './components/Main'
import Articles from './components/Articles'
import Personalize from './components/Personalize'
import Preferences from './components/Preferences'
import Onearticle from './components/Onearticle'
import Rowstd from './components/Rowstd'
import Categories from "./components/Categories"
import Toprow from './components/Toprow'
import { Font } from 'expo';


import { YellowBox } from 'react-native';
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
        Articles: { screen: Articles,},
        Personalize: { screen: Personalize,},
        Preferences: { screen: Preferences,},
        Onearticle: { screen: Onearticle,},
        Rowstd: { screen: Rowstd,},
    },
    {
        initialRouteName: 'Home',
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
        primaryColor: style.black,
    },
    toolbar: {
        container: {
            paddingTop: StatusBar.currentHeight,
            height: StatusBar.currentHeight + 50,
        },
    }
};