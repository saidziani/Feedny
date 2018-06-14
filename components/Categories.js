import React from 'react'
import { Image, Text, View, StatusBar, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';

import { Col, Row, Grid } from "react-native-easy-grid";

import Container from './Container';
import { PropTypes } from 'prop-types';

import style from '../assets/style/Style'


export default class Categories extends React.Component{

    static navigationOptions = ({navigation}) => {
        return {
            title: "CATEGORIES",
            headerStyle: { backgroundColor: '#fcc000'},
            headerTitleStyle: { color: "#fff", fontSize: 20,  flex:1, textAlign: 'center'},
            headerLeft:
                <TouchableOpacity onPress={ () => { navigation.goBack() }}>
                  <Image style={{marginLeft: 10}} source={require('../assets/img/icons/back.png')} />
                </TouchableOpacity>,
            headerRight:
                <TouchableOpacity>
                  <Image style={{marginRight: 10}} source={require('../assets/img/icons/ali.png')} />
                </TouchableOpacity>
        }
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
                                <TouchableOpacity onPress={() => this.details("us")} activeOpacity={0.8}>
                                    <Image style={style.categoryImg} source={require('../assets/img/icons/check.png')} />
                                    <Text style={style.categoryTxt}>US</Text>
                                    <Image style={style.imgCateg} source={require('../assets/img/categories/us.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.rowImg}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("sport")} activeOpacity={0.8}>
                                    <Image style={style.categoryImg} source={require('../assets/img/icons/check.png')} />
                                    <Text style={style.categoryTxt}>Sport</Text>
                                    <Image style={style.imgCateg} source={require('../assets/img/categories/sport.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.rowImg}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("entertainment")} activeOpacity={0.8}>
                                    <Image style={style.categoryImg} source={require('../assets/img/icons/check.png')} />
                                    <Text style={style.categoryTxt}>Entertainment</Text>
                                    <Image style={style.imgCateg} source={require('../assets/img/categories/culture.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.rowImg}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("health")} activeOpacity={0.8}>
                                    <Image style={style.categoryImg} source={require('../assets/img/icons/check.png')} />
                                    <Text style={style.categoryTxt}>Health</Text>
                                    <Image style={style.imgCateg} source={require('../assets/img/categories/health.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.rowImg}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("world")} activeOpacity={0.8}>
                                    <Image style={style.categoryImg} source={require('../assets/img/icons/check.png')} />
                                    <Text style={style.categoryTxt}>World</Text>
                                    <Image style={style.imgCateg} source={require('../assets/img/categories/world.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.rowImg}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("sci_tech")} activeOpacity={0.8}>
                                    <Image style={style.categoryImg} source={require('../assets/img/icons/check.png')} />
                                    <Text style={style.categoryTxt}>Science & Technology</Text>
                                    <Image style={style.imgCateg} source={require('../assets/img/categories/entertainment.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>

                        <Row style={style.rowImg}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <TouchableOpacity onPress={() => this.details("business")} activeOpacity={0.8}>
                                    <Image style={style.categoryImg} source={require('../assets/img/icons/check.png')} />
                                    <Text style={style.categoryTxt}>Business</Text>
                                    <Image style={style.imgCateg} source={require('../assets/img/categories/business.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </Row>
                    </Grid>
                </ScrollView>
                <BottomNavigation active={this.state.active}>
                    <BottomNavigation.Action
                        key="home"
                        icon={<Image source={require('../assets/img/icons/home.png')} />}
                        label="Home"
                        onPress={() => this.moveMenuBottom('Home')}
                    />
                    <BottomNavigation.Action
                        key="categories"
                        icon={<Image source={require('../assets/img/icons/categories.png')} />}
                        label="Categories"
                        onPress={() => this.moveMenuBottom('Categories')}
                    />
                    <BottomNavigation.Action
                        key="sources"
                        icon={<Image source={require('../assets/img/icons/sources.png')} />}
                        label="Sources"
                        onPress={() => this.moveMenuBottom('Sources')}
                    />
                    <BottomNavigation.Action
                        key="profile"
                        icon={<Image source={require('../assets/img/icons/profile.png')} />}
                        label="Profile"
                        onPress={() => this.moveMenuBottom('Profile')}
                    />
                </BottomNavigation>
            </Container>

        )
    }


}