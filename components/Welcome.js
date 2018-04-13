import React from 'react'
import { Image, Text, View, StatusBar } from 'react-native';
import style from '../assets/style/Style'
import { Toolbar, Button } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';

export default class Welcome extends React.Component{

    static navigationOptions = (navigationProps) => {
        return {
           header: (props) => (
                <Toolbar
                    leftElement="arrow-back"
                    centerElement="Log In"
                />
            ),
        };
    }
    render(){
        return(
            <View style={style.container}>
                <Image style={style.logo} source={require('../assets/img/logo.png')}  />
                <Text style={style.title}>
                    Welcome to{'\n'}
                    News.
                </Text>
                <Button icon="done" raised primary text="Continue with Facebook" />
                <Button icon="done" raised primary text="Create account" />
                <Text>
                    By tapping Continue, Create account, I agree to News's Terms of Service.{'\n'}
                    Privacy Policy...and shit
                </Text>
            </View>
        )
    }

}