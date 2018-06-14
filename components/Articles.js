import React from 'react'
import { Image, Text, View, StatusBar, ScrollView, ListView, ActivityIndicator, ImageBackground, TouchableOpacity} from 'react-native';
import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import axios from 'axios'
import { Col, Row, Grid } from "react-native-easy-grid";
import Container from './Container';
import { PropTypes } from 'prop-types';
import style from '../assets/style/Style'
import ArticleRow from './Row'
import Toprow from './Toprow'
import {Utils} from './Utils'



export default class Articles extends React.Component {


    static navigationOptions = ({navigation}) => {
        return {
            title: `${Utils.realCategories[navigation.state.params.category][0]}`,
            headerStyle: { backgroundColor: `${Utils.realCategories[navigation.state.params.category][1]}`},
            headerTitleStyle: { color: "#fff", textAlign:"center", flex:1 },
            headerLeft:
                <TouchableOpacity onPress={ () => { navigation.goBack() }}>
                  <Image style={{marginLeft: 10}} source={require('../assets/img/icons/back.png')} />
                </TouchableOpacity>,
            headerRight:
                <TouchableOpacity>
                  <Image style={{marginRight: 10}} source={require('../assets/img/icons/check.png')} />
                </TouchableOpacity>
        }
    }


    constructor(props) {
        super(props);

        this.state = {
            active: 'today',
            category: this.props.navigation.state.params.category,
            articles: null
        }
        this.fetchArticles()
    }

    fetchArticles() {
        axios.get(`http://`+Utils.ip+`:5000/api/articles/category=`+this.state.category).then((response) => {
            this.setState({articles: response.data})
        }).catch((error)=>{console.log(error)})
    }


    render() {
        if (this.state.articles != null) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return (
                <ImageBackground source={{uri:this.state.articles.articles[0].urlToImage}} style={style.backgroundImage}>
                    <Container>
                        <ScrollView>
                            <Grid style={{margin: 10}}>
                                <View style={style.welcomePanel}>
                                   
                                </View>
                                <View style={style.mainArticle}>
                                    <Text style={style.mainArticleTitle}>{this.state.articles.articles[0].title}</Text>
                                    <View style={style.mainArticleInfo}>
                                        <Text style={style.mainArticleSource}>{Utils.realSources[this.state.articles.articles[0].source][0]}</Text>
                                        <Text style={style.mainArticleTime}>{this.state.articles.articles[0].publishedAt}</Text>
                                    </View>
                                </View>
                                
                                <Row></Row>
                                

                            </Grid>
                            <View>
                                <ListView
                                    dataSource={ds.cloneWithRows(this.state.articles.articles.slice(1, this.state.articles.articles.length))}
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