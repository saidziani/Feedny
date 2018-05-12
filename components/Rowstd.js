import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import style from '../assets/style/Style'

import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import { Col, Row, Grid } from "react-native-easy-grid";


export default class ArticleRow extends React.Component{


    static propTypes = {
        article: PropTypes.object.isRequired
    }

    showArticle (article) {
        //this.props.navigation.navigate('Onearticle', {article: article})
        console.log(article)
    }

    render (){
        return(
            <View style={style.articleStd}>
                <TouchableOpacity onPress={() => this.showArticle(this.props.article)}>
                    <View style={style.viewStd}>
                        <Text style={style.articleStdTitle}>
                            {this.props.article.title}
                        </Text>

                        <Text style={style.articleSummary}>
                            uygjkb gbliu ,fglhrt n rtn eoge goeng eoghe nghengio nrg eogne gehrngmo ernge gn eghn ego heng eoghi neg eiohge nge ...
                        </Text>
                    </View>
                    <View>
                        <Image style={style.stdImgS} source={require('../assets/img/articles/1.jpg')} />
                        <Text style={style.stdSourceName}>
                            {this.props.article.source}
                        </Text>
                        <Text style={style.stdSourceTime}>
                            {this.props.article.time}
                        </Text>
                        <Icon style={style.stdIconOne} name="bookmark-border" />
                        <Icon style={style.stdIconTwo} name="settings" />
                        <Icon style={style.stdIconThree} name="today" />
                    </View>
                </TouchableOpacity>
            </View>

        )
    }
}