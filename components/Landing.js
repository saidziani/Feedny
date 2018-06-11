import React from 'react'
import {Image, View, ActivityIndicator, StatusBar} from 'react-native'


export default class Landing extends React.Component{
    
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        setTimeout( () => {
            this.move();
        },200);
        //StatusBar.setHidden(true);
    }

    // componentWillUnmount() {
    //     StatusBar.setHidden(false);
    // }

    move (){
        this.props.navigation.navigate('Home')
    }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center',  alignItems: 'center', backgroundColor: '#282828'}}>
                <Image source={require('../assets/img/icons/logo.png')}  />
            </View>         
        )
    }
}