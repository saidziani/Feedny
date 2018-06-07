import React from 'react'
import {StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity, ListView, ActivityIndicator} from 'react-native';
import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import { Col, Row, Grid } from "react-native-easy-grid";
import Container from './Container';

import style from '../assets/style/Style'
import axios from 'axios'
import ArticleRow from './Row'
import Rowstd from './Rowstd'
import Toprow from './Toprow'


export default class Home extends React.Component{

    static navigationOptions = (navigationProps) => {
        return {
            header: (props) => (
                <Toolbar
                    centerElement="Feedny"
                    style={{titleText: style.titleToolbar}}
                />
            ),
        };
    }


    openProfile() {
        this.props.navigation.navigate(Welcome)
    }

    constructor(props) {
        super(props);

        this.state = {
            active: 'Home',
            articles: null,
            weather: null
        }
        this.fetchArticles()
        // this.fetchTopFive()
        //this.fetchWeather(),
        //console.log(this.state.weather)

    }

    fetchArticles() {
        axios.get(`http://192.168.1.234:5000/api/articles/onload/username=said`).then((response) => {{
            this.setState({articles: response.data})}
        }).catch((error)=>{console.log(error)})            
    }

    fetchTopFive() {
        axios.get(`http://192.168.1.234:5000/api/articles/category=entertainment`).then((response) => {{
            this.setState({articles: response.data})}
        }).catch((error)=>{console.log(error)}) 
    }

    fetchWeather(){
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=algiers&mode=json&cnt=20&units=metric&appid=89663512909716c62367d9089f12de93`).then((response) => {
                this.setState({weather: response.data})
            })
    }


    moveMenuBottom (activated) {
        this.setState({active: activated})
        this.props.navigation.navigate(activated)
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
                                    <View style={style.hiYou}>
                                        <View>
                                            <Text style={style.hiMsg}>Good morning.</Text>
                                            <Text style={{color: 'white', fontSize: 18}}>Amle</Text>
                                        </View>
                                        <View>
                                            <Text style={{color: 'white', fontSize: 18}}>25^C</Text>
                                            <Text style={{color: 'white', fontSize: 18}}>Algiers</Text>
                                        </View>
                                    </View>
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
                                label="favorites"
                                onPress={() => this.moveMenuBottom('Preferences')}
                            />
                            <BottomNavigation.Action
                                key="Profil"
                                icon="settings"
                                label="Profil"
                                onPress={() => this.moveMenuBottom('Categories')}
                            />
                        </BottomNavigation>
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