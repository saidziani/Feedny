import React from 'react'
import {StyleSheet, Text, View, ScrollView, Image, ImageBackground, ListView, ActivityIndicator} from 'react-native';
import { Toolbar, Button, BottomNavigation, Icon } from 'react-native-material-ui';
import { Col, Row, Grid } from "react-native-easy-grid";
import Container from './Container';

import style from '../assets/style/Style'
import axios from 'axios'
import ArticleRow from './Row'
import ArticleRowStd from './RowStd'


export default class Home extends React.Component{

    static navigationOptions = (navigationProps) => {
        return {
            header: (props) => (
                <Toolbar
                    leftElement="menu"
                    centerElement="Welcome"
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search on the app',
                    }}
                />
            ),
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            active: 'Home',
            articles: null
        }
        this.fetchArticles()
    }

    fetchArticles() {
        axios.get(`http://192.168.1.234:5000/api/articles/category=news`).then((response) => {{
            this.setState({articles: response.data}), console.log(response.data)}
        }).catch((error)=>{console.log(error)})
    }


    moveMenuBottom (activated) {
        this.setState({active: activated})
        this.props.navigation.navigate(activated)
    }

    render() {
        if (this.state.articles != null) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return (
                <ImageBackground source={require('./bg.jpg')} style={style.backgroundImage}>
                    <Container>
                        <ScrollView>
                            <Grid style={{margin: 10}}>
                                <View style={style.welcomePanel}>
                                    <View style={style.hiYou}>
                                        <Text style={style.hiMsg}>Hey Saïd!</Text>
                                        <View style={{
                                            marginTop: 10,
                                            flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{color: 'white', fontSize: 18}}>Algiers</Text>
                                            <Icon name={'today'}/>
                                            <Text style={{color: 'white', fontSize: 18}}>25^C</Text>
                                        </View>
                                    </View>
                                    <View style={style.topFive}>
                                        <Text style={style.topFiveMsg}>Selection of the day</Text>
                                        <Text style={style.topFiveLittleMsg}>Top 5 articles for you</Text>
                                        <View style={style.topFiveHr}></View>
                                    </View>

                                </View>

                                <Row style={style.articleShow}>
                                    <Col size={2} style={style.columnBig}>
                                        <Text style={style.articleTitle}>
                                            Let's make America Great Again with Donald Trump
                                        </Text>
                                        <Text style={style.articleSummary}>
                                            Organized for the first time in algeria and trip tu Istanbul...
                                        </Text>
                                        <View>
                                            <Image style={style.imgS} source={require('../assets/img/articles/1.jpg')}/>
                                            <Text style={style.sourceName}>
                                                France 24
                                            </Text>
                                            <Text style={style.sourceTime}>
                                                Il y a 5 heures
                                            </Text>
                                            <Icon style={style.interactionIconOne} name="bookmark-border"/>
                                            <Icon style={style.interactionIconTwo} name="settings"/>
                                            <Icon style={style.interactionIconThree} name="today"/>
                                        </View>
                                    </Col>
                                    <Col size={1} style={style.columnSmall}>
                                        <Image style={style.imgV} source={require('../assets/img/articles/2.jpg')}/>
                                    </Col>
                                </Row>
                                <Row style={style.articleShow}>
                                    <Col size={2} style={style.columnBig}>
                                        <Text style={style.articleTitle}>
                                            Let's make America Great Again with Donald Trump
                                        </Text>
                                        <Text style={style.articleSummary}>
                                            Organized for the first time in algeria and trip tu Istanbul...
                                        </Text>
                                        <View>
                                            <Image style={style.imgS} source={require('../assets/img/articles/2.jpg')}/>
                                            <Text style={style.sourceName}>
                                                France 24
                                            </Text>
                                            <Text style={style.sourceTime}>
                                                Il y a 5 heures
                                            </Text>
                                            <Icon style={style.interactionIconOne} name="bookmark-border"/>
                                            <Icon style={style.interactionIconTwo} name="settings"/>
                                            <Icon style={style.interactionIconThree} name="today"/>
                                        </View>
                                    </Col>
                                    <Col size={1} style={style.columnSmall}>
                                        <Image style={style.imgV} source={require('../assets/img/articles/3.jpg')}/>
                                    </Col>
                                </Row>
                                <Row style={style.articleShow}>
                                    <Col size={2} style={style.columnBig}>
                                        <Text style={style.articleTitle}>
                                            Let's make America Great Again with Donald Trump
                                        </Text>
                                        <Text style={style.articleSummary}>
                                            Organized for the first time in algeria and trip tu Istanbul...
                                        </Text>
                                        <View>
                                            <Image style={style.imgS} source={require('../assets/img/articles/2.jpg')}/>
                                            <Text style={style.sourceName}>
                                                France 24
                                            </Text>
                                            <Text style={style.sourceTime}>
                                                Il y a 5 heures
                                            </Text>
                                            <Icon style={style.interactionIconOne} name="bookmark-border"/>
                                            <Icon style={style.interactionIconTwo} name="settings"/>
                                            <Icon style={style.interactionIconThree} name="today"/>
                                        </View>
                                    </Col>
                                    <Col size={1} style={style.columnSmall}>
                                        <Image style={style.imgV} source={require('../assets/img/articles/1.jpg')}/>
                                    </Col>
                                </Row>
                                <Row style={style.articleShow}>
                                    <Col size={2} style={style.columnBig}>
                                        <Text style={style.articleTitle}>
                                            Let's make America Great Again with Donald Trump
                                        </Text>
                                        <Text style={style.articleSummary}>
                                            Organized for the first time in algeria and trip tu Istanbul...
                                        </Text>
                                        <View>
                                            <Image style={style.imgS} source={require('../assets/img/articles/1.jpg')}/>
                                            <Text style={style.sourceName}>
                                                France 24
                                            </Text>
                                            <Text style={style.sourceTime}>
                                                Il y a 5 heures
                                            </Text>
                                            <Icon style={style.interactionIconOne} name="bookmark-border"/>
                                            <Icon style={style.interactionIconTwo} name="settings"/>
                                            <Icon style={style.interactionIconThree} name="today"/>
                                        </View>
                                    </Col>
                                    <Col size={1} style={style.columnSmall}>
                                        <Image style={style.imgV} source={require('../assets/img/articles/2.jpg')}/>
                                    </Col>
                                </Row>
                                <Row style={style.articleShow}>
                                    <Col size={2} style={style.columnBig}>
                                        <Text style={style.articleTitle}>
                                            Let's make America Great Again with Donald Trump
                                        </Text>
                                        <Text style={style.articleSummary}>
                                            Organized for the first time in algeria and trip tu Istanbul...
                                        </Text>
                                        <View>
                                            <Image style={style.imgS} source={require('../assets/img/articles/2.jpg')}/>
                                            <Text style={style.sourceName}>
                                                France 24
                                            </Text>
                                            <Text style={style.sourceTime}>
                                                Il y a 5 heures
                                            </Text>
                                            <Icon style={style.interactionIconOne} name="bookmark-border"/>
                                            <Icon style={style.interactionIconTwo} name="settings"/>
                                            <Icon style={style.interactionIconThree} name="today"/>
                                        </View>
                                    </Col>
                                    <Col size={1} style={style.columnSmall}>
                                        <Image style={style.imgV} source={require('../assets/img/articles/3.jpg')}/>
                                    </Col>
                                </Row>

                            </Grid>
                            <View>
                                <View style={style.selection}>
                                    <Text style={style.selectionMsg}>Selection of the day</Text>
                                    <Text style={style.selectionLittleMsg}>Top 5 articles for you</Text>
                                    <View style={style.selectionHr}></View>
                                </View>
                                <ListView
                                    dataSource={ds.cloneWithRows(this.state.articles.articles)}
                                    renderRow={(row, j, i) => <ArticleRowStd article={row} index={parseInt(i, 10)} />}
                                />
                            </View>
                        </ScrollView>
                        <BottomNavigation active={this.state.active}>
                            <BottomNavigation.Action
                                key="today"
                                icon="today"
                                label="Today"
                                onPress={() => this.moveMenuBottom('Home')}
                            />
                            <BottomNavigation.Action
                                key="people"
                                icon="people"
                                label="People"
                                onPress={() => this.moveMenuBottom('Categories')}
                            />
                            <BottomNavigation.Action
                                key="bookmark-border"
                                icon="bookmark-border"
                                label={null}
                                onPress={() => this.moveMenuBottom('Categories')}
                            />
                            <BottomNavigation.Action
                                key="settings"
                                icon="settings"
                                label="Settings"
                                onPress={() => this.moveMenuBottom('Categories')}
                            />
                        </BottomNavigation>
                    </Container>
                </ImageBackground>
            )
        } else {
            return (
                <ActivityIndicator style={style.centerAll} color={style.red} size="large"/>
            )
        }
    }

}