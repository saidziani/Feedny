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
                    leftElement="menu"
                    centerElement="Welcome"
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search on the app',
                    }}
                />
            ),
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            active: 'Home',
            articles: null,
            weather: null
        }
        this.fetchArticles(),
        console.log(this.state.articles)
        // this.fetchTopFive()
        //this.fetchWeather(),
        //console.log(this.state.weather)

    }

    fetchArticles() {
        axios.get(`http://192.168.1.234:5000/api/articles/category=entertainment`).then((response) => {{
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
                <ImageBackground source={require('./bg.jpg')} style={style.backgroundImage}>
                    <Container>
                        <ScrollView>
                            <Grid style={{margin: 10}}>
                                <View style={style.welcomePanel}>
                                    <View style={style.hiYou}>
                                        <Text style={style.hiMsg}>Hey Saïd!</Text>
                                        <View style={{
                                            marginTop: 10,
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{color: 'white', fontSize: 18}}>Algiers</Text>
                                            <Icon name={'today'}/>
                                            <Text style={{color: 'white', fontSize: 18}}>25^C</Text>
                                        </View>
                                    </View>
                                    <View style={style.topFive}>
                                        <Text style={style.topFiveMsg}>Selection of the day</Text>
                                        <Text style={style.topFiveLittleMsg}>Top 5 articles for you</Text>
                                        <View style={style.topFiveHr}></View>
                                    </View>
                                </View>
                                
                                <Toprow index={1} article={this.state.articles.articles[0]} navigation={this.props.navigation} />
                                <Toprow index={2} article={this.state.articles.articles[1]} navigation={this.props.navigation} />
                                <Toprow index={3} article={this.state.articles.articles[2]} navigation={this.props.navigation} />
                                <Toprow index={4} article={this.state.articles.articles[3]} navigation={this.props.navigation} />
                                <Toprow index={5} article={this.state.articles.articles[4]} navigation={this.props.navigation} /> 
                                <Row></Row>

                            </Grid>
                            <View>
                                <View style={style.selection}>
                                    <Text style={style.selectionMsg}>Recommandations</Text>
                                    <Text style={style.selectionLittleMsg}>Top articles for you</Text>
                                    <View style={style.selectionHr}></View>
                                </View>
                                <ListView
                                    dataSource={ds.cloneWithRows(this.state.articles.articles)}
                                    renderRow={(row, j, i) => <Rowstd navigation={this.props.navigation} article={row} index={parseInt(i, 10)} />}
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
                                key="settings"
                                icon="settings"
                                label="Settings"
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