import React from 'react'
import { Image, Text, View, StatusBar, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';

import { Col, Row, Grid } from "react-native-easy-grid";

import Container from './Container';
import { PropTypes } from 'prop-types';

import style from '../assets/style/Style'


export default class Sources extends React.Component{

    static navigationOptions = ({navigation}) => {
        return {
            title: "SOURCES",
            headerStyle: { backgroundColor: '#3dc86c'},
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
            active: 'Sources',
            source: ''
        };
    }

    details (source) {
        this.props.navigation.navigate('Sarticles', {source: source})
    }

    moveMenuBottom (activated) {
        this.setState({active: activated})
        this.props.navigation.navigate(activated)
    }

    render(){
        return(
            <Container>
                <ScrollView style={{backgroundColor: '#fff'}}>
                    <Grid style={{margin:10}}>
                        <Row style={{marginBottom: 20, marginTop: 20}}>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("the-new-york-times")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/the-new-york-times.png')} />
                                <Text style={style.sourcesName}>The New York Times</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("new-scientist")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/new-scientist.png')} />
                                <Text style={style.sourcesName}>New Scientist</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("bbc-news")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/bbc-news.png')} />
                                <Text style={style.sourcesName}>BBC News</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("bbc-sport")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/bbc-sport.png')} />
                                <Text style={style.sourcesName}>BBC Sport</Text>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: 20, marginTop: 20}}>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("techcrunch")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/techcrunch.png')} />
                                <Text style={style.sourcesName}>Tech Crunch</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("techradar")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/techradar.png')} />
                                <Text style={style.sourcesName}>Tech Radar</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("the-economist")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/the-economist.png')} />
                                <Text style={style.sourcesName}>The economist</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("medical-news-today")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/medical-news-today.png')} />
                                <Text style={style.sourcesName}>Medical News Today</Text>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: 20, marginTop: 20}}>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("cnn")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/cnn.png')} />
                                <Text style={style.sourcesName}>CNN</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("al-jazeera")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/al-jazeera.png')} />
                                <Text style={style.sourcesName}>Al Jazeera</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("mtv-news")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/mtv-news.png')} />
                                <Text style={style.sourcesName}>MTV News</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("business-insider")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/business-insider.png')} />
                                <Text style={style.sourcesName}>Business Insider</Text>
                                </TouchableOpacity>
                            </Col>                           
                        </Row>
                        <Row style={{marginBottom: 20, marginTop: 20}}>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("the-wall-street-journal")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/the-wall-street-journal.png')} />
                                <Text style={style.sourcesName}>The Wall Street Journal</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("espn")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/espn.png')} />
                                <Text style={style.sourcesName}>ESPN</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("entertainment-weekly")} activeOpacity={0.8}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/entertainment-weekly.png')} />
                                <Text style={style.sourcesName}>Entertainment Weekly</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                
                            </Col>
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