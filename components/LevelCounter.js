import React, { Component, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Modal } from 'react-native';
import { setState } from 'expect/build/jestMatchersObject';
import { Icon } from 'react-native-elements';

import WinnerScreen from '../winnerComps/WinnerScreen';
import { GlobalStyles } from '../global_assets/GlobalStyles';





function LevelCounter({ playerName, setResources }){

    const [level, setLevel] = useState(0);
    const [modal, setModal] = useState(false);


    var resetResources = false;

    function addLevel() {
        if(level === 9){
            setModal(true);
        }
        else{
            setLevel(level + 1);
        }
    }

    function remLevel(){
        if(level === 0){
            setLevel(0);
        }
        else{
            setLevel(level - 1);
        }
    }

    const resetLevel = () => {
        setLevel(0);
        setModal(false);
        setResources(true);
    }





    return(
            <View style={{
                flex:1, 
                justifyContent:'center',
                alignItems:'center',
                }}
            >

                    <Modal
                        visible={modal}
                        animationType='slide'
                    >
                        <WinnerScreen playerName={playerName} resetLevel={resetLevel}/> 
                    </Modal>
                    <View style={{flex:1.5,height:75}}>
                        <Text style={{fontSize:40, paddingTop:30}}>{playerName}</Text>
                    </View>
                    <View style={{flex:2,width:400, marginTop:10,flexDirection:'row', backgroundColor:'pink'}}>
                    {/* Change these to arrow icons! */}
                        <TouchableOpacity
                            onPress={remLevel}
                            style={{
                                flex: 2,
                                height:100,
                                alignItems:'flex-end'
                            }}
                        >
                            <Icon
                                name='remove'
                                size={50}
                            />
                        </TouchableOpacity>
                        <Text style={{
                            flex: 1,
                            fontSize:50,
                            height:100,
                            textAlign:'center',
                        }}>
                            {level}
                        </Text>
                        <TouchableOpacity
                            onPress={addLevel}
                            style={{
                                flex: 2,
                                height: 100,
                                textAlign: 'center',
                                alignItems: 'flex-start'
                            }}
                        >
                            <View style={{ alignItems: 'center' }}>
                                <Icon 
                                    name='add' 
                                    size={50}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
            </View>
    );
}

export default LevelCounter;