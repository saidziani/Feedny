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



export default class Sarticles extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: `${realSources[navigation.state.params.source][0]}`.toUpperCase(),
            headerStyle: { backgroundColor: `${realSources[navigation.state.params.source][1]}`, elevation: 0 },
            headerTitleStyle: { color: "#fff", textAlign:"center", flex:1 },
            headerLeft:
                <TouchableOpacity onPress={ () => { navigation.goBack() }}>
                  <Image style={{marginLeft: 5}} source={require('../assets/img/icons/back.png')} />
                </TouchableOpacity>,
            headerRight:
                <TouchableOpacity>
                  <Image style={{marginRight: 5}} source={require('../assets/img/icons/check.png')} />
                </TouchableOpacity>
        }
    }



    constructor(props) {
        super(props);

        this.state = {
            active: 'today',
            source: this.props.navigation.state.params.source,
            articles: null
        }
        this.fetchArticles()
    }

    fetchArticles() {
        axios.get(`http://`+Utils.ip+`:5000/api/articles/source=`+this.state.source).then((response) => {
            this.setState({articles: response.data})
        }).catch((error)=>{console.log(error)})
    }


    render() {
        if (this.state.articles != null) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return (
                    <Container>
                        <ScrollView>
                            <View style={{backgroundColor: realSources[this.state.source][1], height: 170, flex:1, alignItems: 'center', justifyContent: 'center'}}>
                                <Image source={realSources[this.state.source][2]} />
                            </View>
                            <View>
                                <ListView
                                    dataSource={ds.cloneWithRows(this.state.articles.articles)}
                                    renderRow={(row, j, i) => <Toprow navigation={this.props.navigation} article={row} index={parseInt(i, 10)} />}
                                />
                            </View>
                        </ScrollView>
                    </Container>
            )
        } else {
            return (
                <ActivityIndicator style={style.centerAll} color={style.red} size="large"/>
            )
        }
    }
}

const realSources = {
    "the-new-york-times":[
        "The New York Times",
        "#6EC8E3",
        require("../assets/img/sources-small/the-new-york-times.png")
    ],
    "new-scientist":[
        "New Scientist",
        '#002937',
        require("../assets/img/sources-small/new-scientist.png")
    ],
    "bbc-news":[
        "BBC News",
        '#9D0A0E',
        require("../assets/img/sources-small/bbc-news.png")
    ],
    "bbc-sport":[
        "BBC Sport",
        '#FFD22F',
        require("../assets/img/sources-small/bbc-sport.png")
    ],
    "techcrunch":[
        "Tech Crunch",
        '#0A9E00',
        require("../assets/img/sources-small/techcrunch.png")
    ],
    "techradar":[
        "Tech Radar",
        '#316D91',
        require("../assets/img/sources-small/techradar.png")
    ],
    "the-economist":[
        "The Economist",
        '#FE0000',
        require("../assets/img/sources-small/the-economist.png")
    ],
    "medical-news-today":[
        "Medical News Today",
        '#fff',
        require("../assets/img/sources-small/medical-news-today.png")
    ],
    "cnn":[
        "CNN",
        '#CC1417',
        require("../assets/img/sources-small/cnn.png")
    ],
    "al-jazeera":[
        "Al Jazeera",
        '#fff',
        require("../assets/img/sources-small/al-jazeera.png")
    ],
    "mtv-news":[
        "MTV News",
        '#fff',
        require("../assets/img/sources-small/mtv-news.png")
    ],
    "business-insider":[
        "Business Insider",
        '#E6E6E6',
        require("../assets/img/sources-small/business-insider.png")
    ],
    "the-wall-street-journal":[
        "The Wall Street Journal",
        '#fff',
        require("../assets/img/sources-small/the-wall-street-journal.png")
    ],
    "espn":[
        "ESPN",
        '#DC1D00',
        require("../assets/img/sources-small/espn.png")
    ],
    "entertainment-weekly":[
        "Enter. Weekly",
        '#1FC6CE',
        require("../assets/img/sources-small/entertainment-weekly.png")
    ]
}