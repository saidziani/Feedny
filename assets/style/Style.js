import {StatusBar, StyleSheet} from "react-native";
import {COLOR} from "react-native-material-ui";

const white = '#f5f5f5'
const green = '#00a699'
const pink = '#ff5a5f'
const orange = '#fc642d'
const black = '#484848'
const gray = '#767676'
const whiteGray = '#e5e5e5'

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
        width: 165,
        height: 150
    },
    imgR:{
        width: 360,
        height: 180,
    },
    imgV:{
        width: 100,
        height: 100,
    },
    imgS:{
        width: 23,
        height: 23,
        marginTop:20,
    },

    /*Extra*/
    centerAll: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerHorizontal: {
        flex: 1,
        //alignItems: 'center',
    },


    /*Images*/
    logo:{
        width: 150,
        height: 70
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
        borderRadius: 3,
        borderBottomWidth: 1,
        borderBottomColor: gray,
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
        borderRadius: 3,
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
    },
    selection:{
        backgroundColor: whiteGray,
        padding: 15,
        marginTop: 5,
        height: 70,
    },
    selectionMsg:{
        fontSize: 18,
        color: black,
    },
    selectionLittleMsg:{
        marginTop:5,
        fontSize: 12,
        color: black,
    },
    selectionHr:{
        marginTop: 5,
        width: 60,
        borderBottomWidth: 2,
        borderBottomColor: black,
    },

    /*Article Standard*/
    articleStd:{
        borderTopWidth: 10,
        borderTopColor: whiteGray,
        backgroundColor: white,
        height: 170
    },
    articleStdTitle:{
      fontSize: 18,
        paddingTop: 5,
        paddingBottom: 5
    },
    viewStd:{
        padding: 15,
    },
    stdImgS:{
        width: 23,
        height: 23,
        marginTop:20,
        marginLeft: 15,
    },
    stdSourceName:{
        fontSize:12, position:'absolute',marginTop:20,marginLeft:50
    },
    stdSourceTime:{
        fontSize:10, position:'absolute',marginTop:30,marginLeft:50
    },
    stdIconOne:{
        position:'absolute',marginTop:20,marginLeft:230,opacity:0.7
    },
    stdIconTwo:{
        position:'absolute',marginTop:20,marginLeft:270,opacity:0.7
    },
    stdIconThree:{
        position:'absolute',marginTop:20,marginLeft:310,opacity:0.7
    },
    /*One article*/
    detailsHr:{
        marginTop: 5,
        width: 100,
        borderBottomWidth: 2,
        borderBottomColor: black,
    },
    detailsView:{
        margin:20,
        marginTop:30,
        flex: 1,
        alignItems: 'center',
    },
    detailsSource:{
        fontSize:15,
        marginTop:5,
    },
    detailsAuthor:{
        fontSize:13,
    },
    detailsTitle:{
        fontSize:21,
        margin:35,
        marginBottom:15,
    },
    detailsSummary:{
        fontSize:18,
        marginTop:30
    },
    detailsImgS:{
        width:45,
        height:45,
    },
    detailsParagraphe:{
        fontSize:17,
        marginBottom:15
    },
    mainArticleImg:{
        marginTop:20,
        height:180,
    }
}