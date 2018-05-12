import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import PropTypes from 'prop-types'
import style from '../assets/style/Style'
import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import { Col, Row, Grid } from "react-native-easy-grid";
import Container from './Container';


export default class Onearticle extends React.Component{

    static propTypes = {
        article: PropTypes.object.isRequired
    }



    render (){
        if (this.props.article != null) {
            <Text>TESTINGGG</Text>
        }else{
        return(
            <Container>
                <ScrollView>
                    <View style={style.detailsView}>
                        <Image style={style.detailsImgS} source={require('../assets/img/articles/3.jpg')} />
                        <Text style={style.detailsTitle}>Annulation de kohlanta 2018, les causes, kohlanta 2018, les causes</Text>
                        <View style={style.detailsHr}></View>
                        <Text style={style.detailsSource}>France 24</Text>
                        <Text style={style.detailsAuthor}>Khadija Mousso . Il y a 3 heures</Text>
                        <Text style={style.detailsSummary}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                            Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. .</Text>
                    </View>
                    <View style={style.mainArticleImg}>
                        <Image style={style.imgR} source={require('../assets/img/articles/2.jpg')} />
                    </View>
                    <View style={{margin:20}}>
                        <Text style={style.detailsParagraphe}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                            Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                            Fusce aliquet pede non pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla. Donec blandit feugiat ligula.
                        </Text>
                        <Text style={style.detailsParagraphe}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                            Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                            Fusce aliquet pede non pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla. Donec blandit feugiat ligula.
                        </Text>
                    </View>
                </ScrollView>
            </Container>

        )
    }}
}