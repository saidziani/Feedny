import {StatusBar, StyleSheet} from "react-native";
import {COLOR} from "react-native-material-ui";

const white = '#f5f5f5'
const green = '#00a699'
const pink = '#ff5a5f'
const orange = '#fc642d'
const black = '#484848'
const gray = '#767676'

export default {
    white: white,
    black: black,
    green: green,
    pink: pink,
    orange: orange,
    gray: gray,

    container:{
        margin: 20,
        //flex: 1,
        //justifyContent: 'center',
    },
    title:{
        fontSize:25
    },
    button:{
        marginTop: 30
    },
    imgC:{
        maxWidth: 150,
        maxHeight: 150
    },
    imgR:{
        maxWidth: 360,
        maxHeight: 180,
    },
    imgV:{
        maxWidth: 100,
        maxHeight: 100,
    },
    imgS:{
        maxWidth: 23,
        maxHeight: 23,
        marginTop:20,
    },

    /*Extra*/
    centerAll: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },


    /*Images*/
    logo:{
        maxWidth: 150,
        maxHeight: 70
    },

    row:{
        height: 180,
        margin: 5,
    },

    category:{
        zIndex: 99999,
        position: 'absolute',
        top: 10,
        left: 10,
        fontSize: 30,
        color: white,
    },

    /*Personalize*/
    choiceRow:{
        marginBottom: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    choice:{
        fontSize: 25,
        margin: 5,
        marginLeft: 20,
        marginRight: 20
        //textTransform: 'uppercase',
    },

    choiceView:{
        marginRight: 15,
    },

    /*Article*/
    articleTitle:{
        fontSize: 20,
    },
    articleSummary:{
        fontSize: 15,
    },
    articleShow:{
        height: 130,
        backgroundColor: '#fff',
        padding: 14,
        borderRadius: 5,
        marginBottom:1,
    },
    articleTitle:{
        fontSize:18,
    },
    articleSummary:{
        fontSize:12,
    },
    sourceName:{
        fontSize:12, position:'absolute',marginTop:20,marginLeft:30
    },
    sourceTime:{
        fontSize:10, position:'absolute',marginTop:30,marginLeft:30
    },
    interactionIconOne:{
        position:'absolute',marginTop:20,marginLeft:110,opacity:0.7
    },
    interactionIconTwo:{
        position:'absolute',marginTop:20,marginLeft:140,opacity:0.7
    },
    interactionIconThree:{
        position:'absolute',marginTop:20,marginLeft:170,opacity:0.7
    },
    columnBig:{
        paddingRight: 7
    },
    columnSmall:{
        paddingLeft: 7, justifyContent: 'center'
    },

    /*Home*/
    welcomePanel:{
        height: 250
    },
    hiYou:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: 80,
        borderRadius: 5,
        padding: 15,
    },
    hiMsg:{
        color: white,
        fontSize: 20
    },
    topFive: {
        padding: 15,
        marginTop: 65,
        height: 80,
    },
    topFiveMsg:{
        fontSize: 30,
        color: white,
    },
    topFiveLittleMsg:{
        marginTop:8,
        fontSize: 18,
        color: white,
    },
    topFiveHr:{
        marginTop: 15,
        width: 100,
        borderBottomWidth: 2,
        borderBottomColor: white,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        shadowOffset:{  width: 200,  height: 200,  },
        shadowColor: black,
        shadowOpacity: 1.0,
    }

}