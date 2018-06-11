import React from 'react'
import { Image, Text, View, StatusBar, ScrollView, ListView, ActivityIndicator, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';

import axios from 'axios'

import { Col, Row, Grid } from "react-native-easy-grid";

import Container from './Container';
import { PropTypes } from 'prop-types';
import style from '../assets/style/Style'
import ArticleRow from './Row'
import Toprow from './Toprow'
import Swiper from 'react-native-swiper';
import {Utils} from './Utils'



export default class Profile extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "PROFILE",
            headerStyle: { backgroundColor: '#84bcb2'},
            headerTitleStyle: { color: "#fff", fontSize: 20,  flex:1, textAlign: 'center'},
            headerLeft:
                <TouchableOpacity onPress={ () => { navigation.goBack() }}>
                  <Image style={{marginLeft: 5}} source={require('../assets/img/icons/back.png')} />
                </TouchableOpacity>,
            headerRight:
                <TouchableOpacity>
                  <Image style={{marginRight: 5}} source={require('../assets/img/icons/ali.png')} />
                </TouchableOpacity>
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            active: 'today',
            // category: this.props.navigation.state.params.category,
            category: "world",
            articles: null
        }
        this.fetchArticles()
    }

    fetchArticles() {
        // axios.get(`http://`+ip+`:5000/api/articles/category=`+this.state.category).then((response) => {
        axios.get(`http://`+Utils.ip+`:5000/api/articles/category=world`).then((response) => {
            this.setState({articles: response.data})
        }).catch((error)=>{console.log(error)})
    }

    moveMenuBottom (activated) {
        this.setState({active: activated})
        this.props.navigation.navigate(activated)
    }

    render() {
        if (this.state.articles != null) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return (
                    <Container>
                        <ScrollView>
                            <View style={{padding:15, backgroundColor: '#fff'}}>
                                <Text style={{fontSize: 20}}>SUBSCRIPTIONS</Text>
                            </View>
                            <View>
                            <Row style={{height: 170, backgroundColor: '#fff'}}>
                              <Swiper showsButtons={false} autoplayTimeout={3.5} autoplay={true} showsPagination={false}>
                                <View>
                                <Row>
                                    <Col style={style.sourcesCol} size={1}>
                                        <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/bbc-sport.png')} />
                                        <Text style={style.sourcesName}>BBC Sport</Text>
                                    </Col>
                                    <Col style={style.sourcesCol} size={1}>
                                        <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/the-new-york-times.png')} />
                                            <Text style={style.sourcesName}>The New York Times</Text>

                                    </Col>
                                    <Col style={style.sourcesCol} size={1}>
                                        <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/bbc-news.png')} />
                                        <Text style={style.sourcesName}>BBC News</Text>
                                    </Col>
                                    <Col style={style.sourcesCol} size={1}>
                                        <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/al-jazeera.png')} />
                                        <Text style={style.sourcesName}>Al Jazeera</Text>
                                    </Col>
                                </Row>
                                </View>
                                <View>
                                <Row>
                                    <Col style={style.sourcesCol} size={1}>
                                        <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/medical-news-today.png')} />
                                        <Text style={style.sourcesName}>Medical News Today</Text>
                                    </Col>
                                    <Col style={style.sourcesCol} size={1}>
                                        <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/espn.png')} />
                                        <Text style={style.sourcesName}>ESPN</Text>
                                    </Col>
                                    <Col style={style.sourcesCol} size={1}>
                                        <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/cnn.png')} />
                                        <Text style={style.sourcesName}>BBC Sport</Text>
                                    </Col>
                                    <Col style={style.sourcesCol} size={1}>
                                        <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/business-insider.png')} />
                                        <Text style={style.sourcesName}>Business Insider</Text>
                                    </Col>
                                </Row>
                                </View>
                              </Swiper>
                            </Row>
                            </View>
                            <View style={{paddingLeft:15, backgroundColor: '#fff'}}>
                                <Text style={{fontSize: 20}}>SAVED</Text>
                            </View>
                            <View>
                                <ListView
                                    dataSource={ds.cloneWithRows(this.state.articles.articles)}
                                    renderRow={(row, j, i) => <Toprow navigation={this.props.navigation} article={row} index={parseInt(i, 10)} />}
                                />
                            </View>
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
        } else {
            return (
                <ActivityIndicator style={style.centerAll} color={style.red} size="large"/>
            )
        }
    }
}