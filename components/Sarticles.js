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
            title: `${Utils.realSources[navigation.state.params.source][0]}`.toUpperCase(),
            headerStyle: { backgroundColor: `${Utils.realSources[navigation.state.params.source][1]}`, elevation: 0 },
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
                            <View style={{backgroundColor: Utils.realSources[this.state.source][1], height: 170, flex:1, alignItems: 'center', justifyContent: 'center'}}>
                                <Image source={Utils.realSources[this.state.source][2]} />
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