import React from 'react'
import { Image, Text, View, StatusBar, ScrollView, ListView, ActivityIndicator } from 'react-native';

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';

import axios from 'axios'

import { Col, Row, Grid } from "react-native-easy-grid";

import Container from './Container';
import { PropTypes } from 'prop-types';

import style from '../assets/style/Style'


import ArticleRow from './Row'

import ArticleRowStd from './Rowstd'

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

export default class Preferences extends React.Component {

    static navigationOptions = (navigationProps) => {
        return {
            header: (props) => (
                <Toolbar
                    style={{backgroundColor: style.pink}}
                    leftElement="menu"
                    centerElement="Preferences"
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
            active: 'Preferences',
        };

    }

    moveMenuBottom (activated) {
        this.setState({active: activated})
        this.props.navigation.navigate(activated)
    }


    render() {

            return (
                <Container>
                    <ScrollView>
                        <Grid style={{padding: 5}}>
                            <Row style={{height:160}}>
                                <Col style={style.centerAll}>
                                    <Image style={style.imgC} source={require('../assets/img/preferences/1.png')} />
                                </Col>
                                <Col style={style.centerAll}>
                                    <Image style={style.imgC} source={require('../assets/img/preferences/2.png')} />
                                </Col>
                            </Row>
                            <Row style={{height:160}}>
                                <Col style={style.centerAll}>
                                    <Image style={style.imgC} source={require('../assets/img/preferences/3.png')} />
                                </Col>
                                <Col style={style.centerAll}>
                                    <Image style={style.imgC} source={require('../assets/img/preferences/4.png')} />
                                </Col>
                            </Row>
                            <Row style={{height:160}}>
                                <Col style={style.centerAll}>
                                    <Image style={style.imgC} source={require('../assets/img/preferences/1.png')} />
                                </Col>
                                <Col style={style.centerAll}>
                                    <Image style={style.imgC} source={require('../assets/img/preferences/2.png')} />
                                </Col>
                            </Row>
                            <Row style={{height:160}}>
                                <Col style={style.centerAll}>
                                    <Image style={style.imgC} source={require('../assets/img/preferences/3.png')} />
                                </Col>
                                <Col style={style.centerAll}>
                                    <Image style={style.imgC} source={require('../assets/img/preferences/4.png')} />
                                </Col>
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