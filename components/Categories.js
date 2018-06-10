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
                    centerElement="Categories"
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
                    <Grid>
                        <Row style={style.rowImg}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("us")}>
                                    <Text style={style.category}>US</Text>
                                    <Image style={style.imgR} source={require('../assets/img/categories/us.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.rowImg}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("sport")}>
                                    <Text style={style.category}>Sport</Text>
                                    <Image style={style.imgR} source={require('../assets/img/categories/sport.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.rowImg}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("entertainment")}>
                                    <Text style={style.category}>Entertainment</Text>
                                    <Image style={style.imgR} source={require('../assets/img/categories/culture.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.rowImg}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("health")}>
                                    <Text style={style.category}>Health</Text>
                                    <Image style={style.imgR} source={require('../assets/img/categories/health.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.rowImg}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("world")}>
                                    <Text style={style.category}>World</Text>
                                    <Image style={style.imgR} source={require('../assets/img/categories/world.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.rowImg}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("religion")}>
                                    <Text style={style.category}>Religion</Text>
                                    <Image style={style.imgR} source={require('../assets/img/categories/religion.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.rowImg}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("business")}>
                                    <Text style={style.category}>Business</Text>
                                    <Image style={style.imgR} source={require('../assets/img/categories/business.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>
                    </Grid>
                </ScrollView>
                <BottomNavigation active={this.state.active}>
                    <BottomNavigation.Action
                        key="bookmark"
                        icon="bookmark"
                        label="For you"
                        onPress={() => this.moveMenuBottom('Home')}
                    />
                    <BottomNavigation.Action
                        key="categories"
                        icon="view-list"
                        label="Categories"
                        onPress={() => this.moveMenuBottom('Categories')}
                    />
                    <BottomNavigation.Action
                        key="preferences"
                        icon="favorite"
                        label="Sources"
                        onPress={() => this.moveMenuBottom('Sources')}
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