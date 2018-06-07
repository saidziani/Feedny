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
                    <Text style={style.sourceName}>
                        SPORT
                    </Text>
                    <Text style={style.articleTitle}>
                        {this.props.article.title}
                    </Text>
                    <Text style={style.sourceCategory}>
                        SPORT
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