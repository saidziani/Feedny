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

export default class Sources extends React.Component{

    static navigationOptions = (navigationProps) => {
        return {
            header: (props) => (
                <Toolbar
                    style={{backgroundColor: style.pink}}
                    centerElement="Sources"
                />
            ),
        };
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
                                <TouchableOpacity onPress={() => this.details("the-new-york-times")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/the-new-york-times.png')} />
                                <Text style={style.sourcesName}>The New York Times</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("new-scientist")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/new-scientist.png')} />
                                <Text style={style.sourcesName}>New Scientist</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("bbc-news")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/bbc-news.png')} />
                                <Text style={style.sourcesName}>BBC News</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("bbc-sport")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/bbc-sport.png')} />
                                <Text style={style.sourcesName}>BBC Sport</Text>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: 20, marginTop: 20}}>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("techcrunch")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/techcrunch.png')} />
                                <Text style={style.sourcesName}>Tech Crunch</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("techradar")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/techradar.png')} />
                                <Text style={style.sourcesName}>Tech Radar</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("the-economist")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/the-economist.png')} />
                                <Text style={style.sourcesName}>The economist</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("medical-news-today")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/medical-news-today.png')} />
                                <Text style={style.sourcesName}>Medical News Today</Text>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: 20, marginTop: 20}}>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("cnn")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/cnn.png')} />
                                <Text style={style.sourcesName}>CNN</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("al-jazeera")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/al-jazeera.png')} />
                                <Text style={style.sourcesName}>Al Jazeera</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("mtv-news")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/mtv-news.png')} />
                                <Text style={style.sourcesName}>MTV News</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("business-insider")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/business-insider.png')} />
                                <Text style={style.sourcesName}>Business Insider</Text>
                                </TouchableOpacity>
                            </Col>                           
                        </Row>
                        <Row style={{marginBottom: 20, marginTop: 20}}>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("the-wall-street-journal")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/the-wall-street-journal.png')} />
                                <Text style={style.sourcesName}>The Wall Street Journal</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("espn")}>
                                <Image style={style.sourcesImg} source={require('../assets/img/sources-carre/espn.png')} />
                                <Text style={style.sourcesName}>ESPN</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col style={style.sourcesCol} size={1}>
                                <TouchableOpacity onPress={() => this.details("entertainment-weekly")}>
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
                        label="Profile"
                        onPress={() => this.moveMenuBottom('Profile')}
                    />
                </BottomNavigation>
            </Container>

        )
    }


}