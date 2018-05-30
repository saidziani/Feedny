import React from 'react'
import { Image, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import style from '../assets/style/Style'
import { TextField } from 'react-native-material-textfield';
import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import { Col, Row, Grid } from "react-native-easy-grid";
import Container from './Container';


export default class Welcome extends React.Component{

    static navigationOptions = (navigationProps) => {
        return {
           header: (props) => (
                <Toolbar
                    leftElement="arrow-back"
                    centerElement="Signin"
                />
            ),
        };
    }

    constructor (props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    submit(){
        this.props.navigation.navigate('List', {username: this.state.username, password: this.state.username})
    }

    render(){
        return(
            <Container>
                <Grid style={{margin: 20}}>
                    <View style={style.centerHorizontal}>
                        <View style={{alignItems: 'center',marginBottom: 50, marginTop: 30}}>
                            <Image style={style.logo} source={require('../assets/img/logo.png')}  />
                            <Text style={style.title}>
                                Welcome to News.
                            </Text>
                        </View>
                        <TextField label='Username' />
                        <TextField secureTextEntry={true} label='Password' />
                        <View style={{marginBottom: 40}}></View>
                        <Button icon="done" raised primary text="Login" onPress={() => this.submit()} />
                        <TouchableOpacity style={{alignItems: 'center',marginTop:10 }}>
                            <Text style={{fontSize:16}}>Don't have an account?</Text>
                        </TouchableOpacity>
                    </View>
                </Grid>
            </Container>
        )
    }

}