import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'
import style from '../assets/style/Style'

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ArticleRow extends React.Component{


    static propTypes = {
        article: PropTypes.object.isRequired
    }
    img(){
        let image = this.props.article.sourceImage
        return(
            image
        )
    }


    render (){
        return(
            <Row style={style.articleShow}>
                <Col size={2} style={style.columnBig}>
                    <Text style={style.articleTitle}>
                        {this.props.article.title}
                    </Text>
                    <Text style={style.articleSummary}>
                        {this.props.article.summary}
                    </Text>
                    <View>
                        <Image style={style.imgS} source={{uri:'../assets/img/articles/1.jpg'}} />
                        <Text style={style.sourceName}>
                            {this.props.article.source}
                        </Text>
                        <Text style={style.sourceTime}>
                            {this.props.article.time}
                        </Text>
                        <Icon style={style.interactionIconOne} name="bookmark-border" />
                        <Icon style={style.interactionIconTwo} name="settings" />
                        <Icon style={style.interactionIconThree} name="today" />
                    </View>
                </Col>
                <Col size={1} style={style.columnSmall}>
                    <Image style={style.imgV} source={require('../assets/img/articles/1.jpg')} />
                </Col>
            </Row>


        )
    }
}