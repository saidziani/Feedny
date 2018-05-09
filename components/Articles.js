import React from 'react'
import { Image, Text, View, StatusBar, ScrollView, ListView, ActivityIndicator } from 'react-native';

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';

import axios from 'axios'

import { Col, Row, Grid } from "react-native-easy-grid";

import Container from './Container';
import { PropTypes } from 'prop-types';

import style from '../assets/style/Style'


import ArticleRow from './Row'

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

export default class Articles extends React.Component {

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
            //category: this.props.navigation.state.params.category,
            articles: null
        }
        this.fetchArticles()
    }

    fetchArticles() {
        /*axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=london&mode=json&cnt=20&units=metric&appid=89663512909716c62367d9089f12de93`).
        then((response) => {
            this.setState({articles: response.data})
        })*/
        const data = {
            "category":"news",
            "articles":[
                {
                    "article_id":1,
                    "title":"la mere de boufarik",
                    "content":"je suii efnenl zfln zelfnlznglz USTHB zfuizfb zef."
                },
                {
                    "article_id":2,
                    "title":"Black Friday",
                    "content":"bkack friday s one off best seller..."
                }
            ]
        };

    }


    render() {
        const data = {
            "category":"news",
            "articles":[
                {
                    "article_id":1,
                    "title":"Let's make America Great Again with Donald Trump",
                    "summary":"je suii efnenl zfln zelfnlznglz USTHB zfuizfb zef",
                    "content":"je suii efnenl zfln zelfnlznglz USTHB zfuizfb zef" +
                    " je suii efnenl zfln zelfnlznglz USTHB zfuizfb zef " +
                    "je suii efnenl zfln zelfnlznglz USTHB zfuizfb zef.",
                    "image":"../assets/img/articles/1.jpg",
                    "source":"France 24",
                    "time":"Il y a 5 heures",
                    "sourceImage":"../assets/img/articles/2.jpg"
                },
            ]
        };
        //this.setState({articles: data})


        if (data === null) {
            return (
                <ActivityIndicator color={style.red} size="large"/>
            )
        }else{
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

            return (
                <ListView
                    dataSource={ds.cloneWithRows(data.articles)}
                    renderRow={(row, j, i) => <ArticleRow article={row} index={parseInt(i, 10)} />}
                    //renderRow={(row) => <Text>{row.content} </Text>}
                />

            )
        }
    }

}