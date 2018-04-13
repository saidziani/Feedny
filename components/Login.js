import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import style from '../assets/style/Style'
import { Toolbar, Button } from 'react-native-material-ui';
import { TextField } from 'react-native-material-textfield';

export default class Login extends React.Component{

    static navigationOptions = (navigationProps) => {
        return {
            header: (props) => (
                <Toolbar
                    leftElement="arrow-back"
                    centerElement=""
                />
            ),
        };
    }
    render(){
        return(
            <View style={style.container}>
                <Text style={style.title}>
                    Log In
                </Text>
                <TextField
                    label='Email or Username'
                />
                <TextField
                    secureTextEntry={true}
                    label='Password'
                />
                <Button icon="done" raised primary text="Login" />
            </View>
        )
    }

}