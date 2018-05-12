import React from 'react'
import { Image, Text, View, StatusBar, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';

import { Col, Row, Grid } from "react-native-easy-grid";

import Container from './Container';
import { PropTypes } from 'prop-types';

import style from '../assets/style/Style'


const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

export default class Categories extends React.Component{

    static navigationOptions = (navigationProps) => {
        return {
            header: (props) => (
                <Toolbar
                    style={{backgroundColor: style.pink}}
                    leftElement="menu"
                    centerElement="Categories"
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search',
                    }}
                />
            ),
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            active: 'Categories',
            category: ''
        };
    }

    details (category) {
        //this.setState({category: category})
        this.props.navigation.navigate('Articles', {category: category})
    }

    moveMenuBottom (activated) {
        this.setState({active: activated})
        this.props.navigation.navigate(activated)
    }

    render(){
        return(
            <Container>
                <ScrollView>
                    <Grid style={{marginTop: 5, marginBottom: 5}}>
                        <Row style={style.row}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("news")}>
                                    <Text style={style.category}>News</Text>
                                    <Image style={style.imgR} source={require('../assets/img/articles/1.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.row}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("sport")}>
                                    <Text style={style.category}>Sport</Text>
                                    <Image style={style.imgR} source={require('../assets/img/articles/2.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.row}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <Text style={style.category}>Culture</Text>
                                <Image style={style.imgR} source={require('../assets/img/articles/3.jpg')} />
                            </View>
                        </Row>

                        <Row style={style.row}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <Text style={style.category}>Religion</Text>
                                <Image style={style.imgR} source={require('../assets/img/articles/1.jpg')} />
                            </View>
                        </Row>

                        <Row style={style.row}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <Text style={style.category}>Technology</Text>
                                <Image style={style.imgR} source={require('../assets/img/articles/2.jpg')} />
                            </View>
                        </Row>
                    </Grid>
                </ScrollView>
                <BottomNavigation active={this.state.active}>
                    <BottomNavigation.Action
                        key="today"
                        icon="today"
                        label="Today"
                        onPress={() => this.moveMenuBottom('Home')}
                    />
                    <BottomNavigation.Action
                        key="people"
                        icon="people"
                        label="People"
                        onPress={() => this.moveMenuBottom('Categories')}
                    />
                    <BottomNavigation.Action
                        key="bookmark-border"
                        icon="bookmark-border"
                        label={null}
                        onPress={() => this.moveMenuBottom('Preferences')}
                    />
                    <BottomNavigation.Action
                        key="settings"
                        icon="settings"
                        label="Settings"
                        onPress={() => this.moveMenuBottom('Categories')}
                    />
                </BottomNavigation>
            </Container>

        )
    }


}