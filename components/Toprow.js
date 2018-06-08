import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import style from '../assets/style/Style'

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import { Col, Row, Grid } from "react-native-easy-grid";


export default class Toprow extends React.Component{


    static propTypes = {
        article: PropTypes.object.isRequired,
        navigation:PropTypes.object.isRequired,
        index:PropTypes.number.isRequired,
    }


    showArticle (article) {
        this.props.navigation.navigate('Onearticle', {article: article})
    }

    render (){
        return(
            <TouchableOpacity onPress={() => this.showArticle(this.props)}>
            <Row style={style.articleShow}>
                <Col size={2} style={style.columnBig}>
                    <Text style={style.articleTitle}>
                        {this.props.article.title}
                    </Text>
                    <Text style={{fontSize:12, fontWeight: '900', position: 'absolute',bottom: 5,
                        color: bgcolors[this.props.article.categoryPredicted]}}>
                        {this.props.article.categoryPredicted.toUpperCase()}
                    </Text>
                    <Text style={style.sourceTime}>
                        1 hour ago
                    </Text>
                </Col>
                <Col size={1} style={style.columnSmall}>
                    <Image style={style.imgV} source={{uri:this.props.article.urlToImage}}/>
                </Col>
            </Row>
            </TouchableOpacity>
            

        )
         
   }
}


const bgcolors = {"sport":"#fcc000", "us":"#eb2629", "entertainment":"#b46ef5", "business":"#84bcb2", "health":"#3dc86c", "sci_tech":"#d25c89", "world":"#2598b8", };

const imgSourcePath = "../assets/img/sources/mtv-news.png"