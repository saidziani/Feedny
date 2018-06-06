import React from 'react'
import { Image, Text, View, StatusBar, ScrollView, ListView, ActivityIndicator } from 'react-native';

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';

import axios from 'axios'

import { Col, Row, Grid } from "react-native-easy-grid";

import Container from './Container';
import { PropTypes } from 'prop-types';

import style from '../assets/style/Style'


import ArticleRow from './Row'

import Rowstd from './Rowstd'


export default class Articles extends React.Component {


    static navigationOptions = ({navigation}) => {
        return {
            title: `${navigation.state.params.category}`.toUpperCase(),
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
        axios.get(`http://172.29.111.80:5000/api/articles/category=`+this.state.category).then((response) => {
            this.setState({articles: response.data})
        }).catch((error)=>{console.log(error)})
    }


    render() {

        if (this.state.articles === null) {
            return (
                <ActivityIndicator style={style.centerAll} color={style.red} size="large"/>
            )
        }else{
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return (
                <View>
                    <ListView
                        dataSource={ds.cloneWithRows(this.state.articles.articles)}
                        renderRow={(row, j, i) => <Rowstd navigation={this.props.navigation} article={row} index={parseInt(i, 10)} />}
                    />
                </View>

            )
        }
    }

}