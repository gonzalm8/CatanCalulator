import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../global_assets/GlobalStyles';

function WinnerScreen({playerName, resetLevel}){
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={ GlobalStyles.winningScreen }>
                <Text style={{ fontSize: 50, textAlign:'center' }}>{playerName} is the winner!</Text>
                <TouchableOpacity
                    onPress = {resetLevel}
                    style = {{
                        backgroundColor: '#455561',
                        justifyContent:'center',
                        alignSelf:'center',
                        marginTop:50,
                        height:60,
                        width:115
                    }}
                >
                    <Text style={{ color: 'white',textAlign:'center'}}>Reset</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )}

export default WinnerScreen;