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
        height: 220,
    },
    imgCateg:{
        width: 360,
        height: 150,
    },
    imgV:{
        width: 110,
        height: 110,
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
    rowImg:{
        height: 150,
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
    articleSummary:{
        fontSize: 15,
    },
    articleShow:{
        height: 140,
        backgroundColor: '#fff',
        padding: 15,
        flex:1
        // borderRadius: 3,
        // borderBottomWidth: 0.15,
        // borderBottomColor: gray,
    },
    articleTitle:{
        fontSize:18,
        marginTop:5,
        //fontFamily: 'Publico-Black'
    },
    articleSummary:{
        fontSize:12,
    },
    sourceName:{
        fontSize:12,
    },

    sourceTime:{
        fontSize:10, 
        marginLeft: 15
    },
    sourceCategory:{
        fontSize:12, 
        position: 'absolute',
        bottom: 5,
        backgroundColor: '#e1d523',
        borderRadius: 5,
        padding: 1,
        paddingLeft: 3,
        paddingRight: 3,
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
        paddingRight: 10,
    },
    columnSmall:{
        paddingLeft: 0,
    },

    /*Home*/
    welcomePanel:{
        height: 70,
        marginBottom: 180
    },
    hiYou:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 3,
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
                                            
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
        height: 270,
        shadowOffset:{  width: 270,  height: 270,  },
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
        margin:15,
    },
    detailsSource:{
        fontSize:15,
        marginTop:5,
    },
    detailsAuthor:{
        fontSize:13,
    },
    detailsTitle:{
        fontSize:25,
        marginBottom: 20
    },
    detailsSummary:{
        fontSize:18,
        marginTop:30
    },
    detailsContent:{
        margin: 15
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
        height:220,
    },
    mainArticleSourceDisplay:{
        position: 'absolute',
        bottom: 15,
        left: 15,
        fontSize: 20,
        color: "#fff"
    },


    /*****************/
    mainArticle:{
        position: 'absolute',
        bottom: 20,
        left: 5
    },
    mainArticleTitle:{
        fontSize: 25,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 10,
    },
    mainArticleInfo:{
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center'
    },
    mainArticleSource:{
        marginRight: 10,
        color:"#fff",
    },
    mainArticleTime:{
        marginRight: 0,
        color:"#fff",
    },

    /*****************/
    titleToolbar:{
        textAlign: 'center',
        fontSize: 27
    },

    /****Sources******/
    sourcesName:{
        fontSize:16, 
        color: '#000', 
        width: 75, 
        textAlign: 'center', 
        marginTop: 10
    },
    sourcesCol:{
        flex:1, 
        alignItems: 'center'
    },
    sourcesImg:{
        width: 75, 
        height: 75
    }
}