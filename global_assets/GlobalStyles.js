import { StyleSheet } from 'react-native';

const mainRed = "#FB3640";
const mainBlue = "#247BA0";
const mainWhite = "#F7F7FF";
const mainOrange = "#F18F01";

const GlobalStyles = StyleSheet.create({
    blueCard:{
        flex:1,
        backgroundColor:mainBlue,
        justifyContent:'center'
    },
    levelCounter:{
        alignSelf:'center',
        backgroundColor:mainOrange
    },
    buttonRight:{
        height:40,
        width:100,
        backgroundColor: 'white',
        margin:4,
        alignItems:'flex-end'
    },
    winningScreen:{
        flex:.75,
        justifyContent:'center',
        alignSelf:'center'
    }

});

export { GlobalStyles };