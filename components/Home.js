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
import {Utils} from './Utils'


export default class Home extends React.Component{


    static navigationOptions = ({navigation}) => {
        return {
            title: <Image source={require('../assets/img/icons/logo.png')} />,
            headerStyle: { backgroundColor: '#282828'},
            headerTitleStyle: { color: "#fff", fontSize: 22,  flex:1, textAlign: 'center'},
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
        //this.fetchWeather(),

    }
    


    fetchArticles() {
        axios.get(`http://`+Utils.ip+`:5000/api/articles/onload/username=Saïd`).then((response) => {{
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
                <ImageBackground source={{uri:this.state.articles.articles[0].urlToImage}} style={style.backgroundImage}>
                    <Container>
                        <ScrollView>
                            <Grid style={{margin: 10}}>
                                <View style={style.welcomePanel}>
                                    <View style={style.hiYou}>
                                        <View>
                                            <Text style={style.hiMsg}>Good morning.</Text>
                                            <Text style={{color: 'white', fontSize: 18}}>Amel</Text>
                                        </View>
                                        <View>
                                            <Text style={{color: 'white', fontSize: 18}}>25^C</Text>
                                            <Text style={{color: 'white', fontSize: 18}}>Algiers</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={style.mainArticle}>
                                    <Text style={style.mainArticleTitle}>{this.state.articles.articles[0].title}</Text>
                                    <View style={style.mainArticleInfo}>
                                        <Text style={{color:"#fff", fontSize:13, marginRight: 10, borderRadius: 3, paddingLeft: 2, paddingRight: 2, backgroundColor: Utils.realCategories[this.state.articles.articles[0].categoryPredicted][1]}}>{Utils.realCategories[this.state.articles.articles[0].categoryPredicted][0]}</Text>
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
                </ImageBackground>
            )
        } else {
            return (
                <ActivityIndicator style={style.centerAll} color={style.red} size="large"/>
            )
        }
    }

}