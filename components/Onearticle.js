import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView, ActivityIndicator} from 'react-native'
import PropTypes from 'prop-types'
import style from '../assets/style/Style'
import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import { Col, Row, Grid } from "react-native-easy-grid";
import Container from './Container';


export default class Onearticle extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            article: this.props.navigation.state.params.article.article,
        }
    }

    img(){
        let image = this.state.article.sourceImage
        return(
            image
        )
    }

    render (){
            if (this.state.article === null) {
                return (
                    <ActivityIndicator style={style.centerAll} color={style.red} size="large"/>
                )
            }else{
            return(
                <Container>
                    <ScrollView>
                        <View style={style.detailsView}>
                            <Image style={style.detailsImgS} source={{uri :'http://openmindsclub.net/images/logo.png'}} />
                            <Text style={style.detailsTitle}>{this.state.article.title}</Text>
                            <View style={style.detailsHr}>{console.log(this.img())}</View>
                            <Text style={style.detailsSource}>{this.state.article.source}</Text>
                            <Text style={style.detailsAuthor}>Khadija Mousso . Il y a 3 heures</Text>
                            <Text style={style.detailsSummary}>{this.state.article.summary}</Text>
                        </View>
                        <View style={style.mainArticleImg}>
                            <Image style={style.imgR} source={require('../assets/img/articles/2.jpg')} />
                        </View>
                        <View style={{margin:20}}>
                            <Text style={style.detailsParagraphe}>{this.state.article.content}
                            </Text>
                        </View>
                    </ScrollView>
                </Container>

            )
            }
    }
}