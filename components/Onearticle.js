import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import style from '../assets/style/Style'
import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import { Col, Row, Grid } from "react-native-easy-grid";
import Container from './Container';
import axios from 'axios'
import {Utils} from './Utils'

export default class Onearticle extends React.Component{

    static navigationOptions = ({navigation}) => {
        return {
            title: `${Utils.realCategories[navigation.state.params.article.article.categoryPredicted][0]}`,
            headerStyle: { backgroundColor: `${Utils.realCategories[navigation.state.params.article.article.categoryPredicted][1]}`},
            headerTitleStyle: { color: "#fff",textAlign:"center", flex:1 },
            headerLeft:
                <TouchableOpacity onPress={ () => { navigation.goBack() }}>
                  <Image style={{marginLeft: 10}} source={require('../assets/img/icons/back.png')} />
                </TouchableOpacity>,
            headerRight:
                <TouchableOpacity>
                  <Image style={{marginRight: 10}} source={require('../assets/img/icons/bookmark.png')} />
                </TouchableOpacity>
        }
    }
    

    constructor(props) {
        super(props);
        this.state = {
            lang : 'en',
            title:{
                en: this.props.navigation.state.params.article.article.title,
                ar: this.props.navigation.state.params.article.article.translatedTitle
            },
            content:{
                en: this.props.navigation.state.params.article.article.content,
                ar: this.props.navigation.state.params.article.article.translatedContent
            },
            summary:{
                en: this.props.navigation.state.params.article.article.summaryGenerated,
                ar: this.props.navigation.state.params.article.article.translatedSummary
            },
            subTitles:{
                en:['Summary', 'Article'],
                ar:['الملخص', 'المقال'],
            },
            article: this.props.navigation.state.params.article.article,
        }
        this.sendCategory()
    }

    sendCategory(){
        axios.get(`http://`+Utils.ip+`:5000/api/profiles/update/username=Saïd,category=`+this.state.article.categoryPredicted).then((response) => {{console.log(response)}
        }).catch((error)=>{console.log(error)})
    }

    render (){
            if (this.state.article === null) {
                return (
                    <ActivityIndicator style={style.centerAll} color={style.red} size="large"/>
                )
            }else{
            return(
                <Container>
                    <ScrollView style={{backgroundColor: '#fff'}}>
                        <View style={style.mainArticleImg}>
                            <Image style={style.imgR} source={{uri : this.state.article.urlToImage}} />
                            <TouchableOpacity 
                                style={style.translateButton}
                                onPress={() => {this.setState({lang: "ar"});}}
                            >
                                <Text style={style.translateText}>Translate to Arabic</Text>
                            </TouchableOpacity>
                            <Text style={style.mainArticleSourceDisplay}>{Utils.realSources[this.state.article.source][0]}</Text>
                        </View>

                        <View style={style.detailsView}>
                            <Text style={style.detailsTitle}>{this.state.title[this.state.lang]}</Text>
                            <Text style={style.detailsAuthor}>By {this.state.article.author}, {this.state.article.publishedAt}</Text>
                        </View>
                        <View style={style.detailsContent}>
                            <Text style={{fontSize: 13.5, color: "#1c1c1c", fontWeight: '100'}}>{this.state.subTitles[this.state.lang][0]}</Text>
                            <Text style={style.detailsSummaryParagraphe}>{this.state.summary[this.state.lang]}
                            </Text>
                        </View>
                        <View style={style.detailsContent}>
                            <Text style={{fontSize: 13.5, color: "#1c1c1c", fontWeight: '100'}}>{this.state.subTitles[this.state.lang][1]}</Text>
                            <Text style={style.detailsParagraphe}>{this.state.content[this.state.lang]}
                            </Text>
                        </View>
                    </ScrollView>
                </Container>

            )
            }
    }
}