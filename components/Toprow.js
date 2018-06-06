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
                        {this.props.index}. {this.props.article.title}
                    </Text>
                    <Text style={style.articleSummary}>
                        {this.props.article.summary}...
                    </Text>
                    <View>
                        <Image style={style.imgS} source={{uri:this.props.article.sourceImage}}/>
                        <Text style={style.sourceName}>
                            {this.props.article.source}
                        </Text>
                        <Text style={style.sourceTime}>
                            {this.props.article.publishedAt}
                        </Text>
                        <Icon style={style.interactionIconTwo} name="bookmark-border"/>
                        <Icon style={style.interactionIconThree} name="thumb-down"/>
                    </View>
                </Col>
                <Col size={1} style={style.columnSmall}>
                    <Image style={style.imgV} source={{uri:this.props.article.urlToImage}}/>
                </Col>
            </Row>
            </TouchableOpacity>
            

        )
         
   }
}