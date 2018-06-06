import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import style from '../assets/style/Style'

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import { Col, Row, Grid } from "react-native-easy-grid";


export default class ArticleRow extends React.Component{


    static propTypes = {
        article: PropTypes.object.isRequired,
        navigation:PropTypes.object.isRequired
    }


    showArticle (article) {
        this.props.navigation.navigate('Onearticle', {article: article})
    }

    render (){
        return(
            <View style={style.articleStd}>
                <TouchableOpacity onPress={() => this.showArticle(this.props)}>
                    <View style={style.viewStd}>
                        <Text style={style.articleStdTitle}>
                            {this.props.article.title}
                        </Text>

                        <Text style={style.articleSummary}>
                            {this.props.article.summary}
                        </Text>
                    </View>
                    <View>
                        <Image style={style.stdImgS} source={{uri : this.props.article.urlToImage}} />
                        <Text style={style.stdSourceName}>
                            {this.props.article.source}
                        </Text>
                        <Text style={style.stdSourceTime}>
                            {this.props.article.publishedAt}
                        </Text>
                        <Icon style={style.stdIconTwo} name="bookmark-border" />
                        <Icon style={style.stdIconThree} name="thumb-down" />
                    </View>
                </TouchableOpacity>
            </View>

        )
    }
}