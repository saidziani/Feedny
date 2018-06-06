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

export default class Personalize extends React.Component {

    static navigationOptions = (navigationProps) => {
        return {
            header: (props) => (
                <Toolbar
                    leftElement="menu"
                    centerElement="Personalize"
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search something',
                    }}
                />
            ),
        };
    }

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Container>
                <ScrollView style={{margin: 20}}>
                    <Grid>
                        <Row style={style.choiceRow}>
                            <View style={{marginRight: 8, marginLeft: 8, borderWidth: 1, borderColor: '#424242'}}>
                                <Text style={style.choice}>● Technologie</Text>
                            </View>
                            <View style={{marginRight: 8, marginLeft: 8, borderWidth: 1, borderColor: '#424242'}}>
                                <Text style={style.choice}>● News</Text>
                            </View>
                        </Row>
                        <Row style={style.choiceRow}>
                            <View style={{ marginRight: 8, marginLeft: 8, borderWidth: 1, borderColor: '#424242'}}>
                                <Text style={style.choice}>● Economic</Text>
                            </View>
                            <View style={{marginRight: 8, marginLeft: 8, borderWidth: 1, borderColor: '#424242'}}>
                                <Text style={style.choice}>● Religion</Text>
                            </View>
                        </Row>
                        <Row style={style.choiceRow}>
                            <View style={{marginRight: 8, marginLeft: 8, borderWidth: 1, borderColor: '#424242'}}>
                                <Text style={style.choice}>● Business</Text>
                            </View>
                            <View style={{marginRight: 8, marginLeft: 8, borderWidth: 1, borderColor: '#424242'}}>
                                <Text style={style.choice}>● Sport</Text>
                            </View>
                        </Row>
                        <Row style={style.choiceRow}>
                            <View style={{ marginRight: 8, marginLeft: 8, borderWidth: 1, borderColor: '#424242'}}>
                                <Text style={style.choice}>● Enterpreneurship</Text>
                            </View>
                        </Row>
                        <Row style={style.choiceRow}>
                            <View style={{marginRight: 8, marginLeft: 8, borderWidth: 1, borderColor: '#424242'}}>
                                <Text style={style.choice}>● Culture</Text>
                            </View>
                            <View style={{marginRight: 8, marginLeft: 8, borderWidth: 1, borderColor: '#424242'}}>
                                <Text style={style.choice}>● Art</Text>
                            </View>
                        </Row>
                    </Grid>
                </ScrollView>
            </Container>

        )
    }
}