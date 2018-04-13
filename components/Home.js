import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import style from '../assets/style/Style'

export default class Home extends React.Component{

    static navigationOptions = (navigationProps) => {
        return {
            header: (props) => (
                <Toolbar
                    leftElement="menu"
                    centerElement="Home"
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search',
                    }}
                />
            ),
        };
    }
    render(){
        return(
            <View style={style.container}>
                <Text>
                    Test
                </Text>
            </View>

        )
    }

}