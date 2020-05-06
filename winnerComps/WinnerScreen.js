import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';


function WinnerScreen({playerName, resetLevel}){
    return(
        <SafeAreaView>
            <View>
                <Text>Congradulations on level 10 {playerName}!</Text>
                <TouchableOpacity
                    onPress = {resetLevel}
                >
                    <Text>Reset</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )}

export default WinnerScreen;