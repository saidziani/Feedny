import React from 'react'
import { Image, Text, View, StatusBar, ScrollView, ListView, ActivityIndicator, ImageBackground} from 'react-native';

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';

import axios from 'axios'

import { Col, Row, Grid } from "react-native-easy-grid";

import Container from './Container';
import { PropTypes } from 'prop-types';

import style from '../assets/style/Style'


import ArticleRow from './Row'

import Toprow from './Toprow'


export default class Sarticles extends React.Component {


    static navigationOptions = ({navigation}) => {
        return {
            title: `${navigation.state.params.category}`.toUpperCase(),
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
        axios.get(`http://172.29.111.80:5000/api/articles/category=world`).then((response) => {
            this.setState({articles: response.data})
        }).catch((error)=>{console.log(error)})
    }


    render() {
        if (this.state.articles != null) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return (
                <ImageBackground source={require('./trump.png')} style={style.backgroundImage}>
                    <Container>
                        <ScrollView>
                            <Grid style={{margin: 10}}>
                                <View style={style.welcomePanel}>
                                   
                                </View>
                                <View style={style.mainArticle}>
                                    <Text style={style.mainArticleTitle}>Trump accuses Mueller's team of medding in midterm elections</Text>
                                    <View style={style.mainArticleInfo}>
                                        <Text style={style.mainArticleCategory}>WORLD</Text>
                                        <Text style={style.mainArticleSource}>ABC News</Text>
                                        <Text style={style.mainArticleTime}>1 hour ago</Text>
                                    </View>
                                </View>
                                
                                <Row></Row>
                                

                            </Grid>
                            <View>
                                <ListView
                                    dataSource={ds.cloneWithRows(this.state.articles.articles)}
                                    renderRow={(row, j, i) => <Toprow navigation={this.props.navigation} article={row} index={parseInt(i, 10)} />}
                                />
                            </View>
                        </ScrollView>
                    </Container>
                </ImageBackground>

            )
        } else {
            return (
                <ActivityIndicator style={style.centerAll} color={style.red} size="large"/>
            )
        }
    }
}