import {StatusBar} from "react-native";
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
    }
}