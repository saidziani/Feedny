import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'
import style from '../assets/style/Style'

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class RowArticle extends React.Component{

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    img(){
        let image = this.props.article.urlToImage
        return(
            image
        )
    }

    render (){
        return(
            <Row style={style.row}>
                <View style={{backgroundColor: style.white}, style.centerAll}>
                    <TouchableOpacity onPress={() => this.details("news")}>
                        <Text style={style.category}>News</Text>
                            <Image style={style.imgR} source={require('../assets/img/articles/1.jpg')} />
                    </TouchableOpacity>
                </View>
            </Row>
        )
    }
}