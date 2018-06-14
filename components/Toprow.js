import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import style from '../assets/style/Style'

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import { Col, Row, Grid } from "react-native-easy-grid";
import {Utils} from './Utils'


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
            <TouchableOpacity onPress={() => this.showArticle(this.props)} activeOpacity={0.8}>
            <Row style={style.articleShow}>
                <Col size={2} style={style.columnBig}>
                    <Image source={Utils.realSources[this.props.article.source][3]}/>
                    <Text style={style.articleTitle}>
                        {this.props.article.title}
                    </Text>

                    <View style={{position: 'absolute',bottom: 5, flex: 1, flexDirection: 'row',}}>
                        <Text style={{fontSize:12, fontWeight: '900', color: Utils.realCategories[this.props.article.categoryPredicted][1]}}>
                            {Utils.realCategories[this.props.article.categoryPredicted][0]}
                        </Text>
                        <Text style={style.sourceTime}>
                            {this.props.article.publishedAt}
                        </Text>
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