import React from 'react';
import { StatusBar } from 'react-native';
import {ThemeProvider} from 'react-native-material-ui'
import {TabNavigator, StackNavigator} from 'react-navigation'
import style from './assets/style/Style'
import Welcome from './components/Welcome'
import Home from './components/Home'
import Login from './components/Login'
import Articles from './components/Articles'
import Sarticles from './components/Sarticles'
import Personalize from './components/Personalize'
import Onearticle from './components/Onearticle'
import Rowstd from './components/Rowstd'
import Categories from "./components/Categories"
import Sources from "./components/Sources"
import Toprow from './components/Toprow'
import Profile from './components/Profile'
import Landing from './components/Landing'


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
        Categories: {screen: Categories,},
        Articles: { screen: Articles,},
        Sarticles: { screen: Sarticles,},
        Personalize: { screen: Personalize,},
        Onearticle: { screen: Onearticle,},
        Rowstd: { screen: Rowstd,},
        Sources: { screen: Sources,},
        Profile: { screen: Profile,},
        Landing: { screen: Landing,},
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