import React from 'react'
import { Image, Text, View, StatusBar, ScrollView } from 'react-native';

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

export default class Welcome extends React.Component{

    static navigationOptions = (navigationProps) => {
        return {
            header: (props) => (
                <Toolbar
                    style={{backgroundColor: style.pink}}
                    leftElement="menu"
                    centerElement=""
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
            active: 'today',
            category: this.props.navigation.state.params.category,
        };
    }

    render(){
        return(
            <Container>
                <View>
                    <Text>
                        {this.state.category}
                    </Text>
                </View>
                <ScrollView>
                    <Grid>
                        <Row style={{height:200}}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <Image style={style.imgR} source={require('../assets/img/articles/1.jpg')} />
                            </View>
                        </Row>
                        <Row style={{height:200}}>
                            <Col>
                                <View style={{backgroundColor: style.white}, style.centerAll}>
                                    <Image style={style.imgC} source={require('../assets/img/articles/2.jpg')} />
                                </View>
                            </Col>
                            <Col>
                                <View style={{backgroundColor: style.orange}, style.centerAll}>
                                    <Image style={style.imgC} source={require('../assets/img/articles/3.jpg')} />
                                </View>
                            </Col>
                        </Row>
                        <Row style={{height:200}}>
                            <Col>
                                <View style={{backgroundColor: style.white}, style.centerAll}>
                                    <Image style={style.imgC} source={require('../assets/img/articles/1.jpg')} />
                                </View>
                            </Col>
                            <Col>
                                <View style={{backgroundColor: style.orange}, style.centerAll}>
                                    <Image style={style.imgC} source={require('../assets/img/articles/3.jpg')} />
                                </View>
                            </Col>
                        </Row>
                        <Row style={{height:200}}>
                            <View style={{backgroundColor: style.white}, style.centerAll}>
                                <Image style={style.imgR} source={require('../assets/img/articles/2.jpg')} />
                            </View>
                        </Row>
                    </Grid>
                </ScrollView>

                <BottomNavigation active={this.state.active} >
                    <BottomNavigation.Action
                        key="today"
                        icon="today"
                        label="Today"
                        onPress={() => this.setState({ active: 'today' })}
                    />
                    <BottomNavigation.Action
                        key="people"
                        icon="people"
                        label="People"
                        onPress={() => this.setState({ active: 'people' })}
                    />
                    <BottomNavigation.Action
                        key="bookmark-border"
                        icon="bookmark-border"
                        label={null}
                        onPress={() => this.setState({ active: 'bookmark-border' })}
                    />
                    <BottomNavigation.Action
                        key="settings"
                        icon="settings"
                        label="Settings"
                        onPress={() => this.setState({ active: 'settings' })}
                    />
                </BottomNavigation>
            </Container>

        )
    }

}