import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';


import { GlobalStyles } from '../global_assets/GlobalStyles';
import ResourceCalc from './ResourceCalc';



function Resources({ resources, resetResources }){

    const [brick, setBrickNumber] = useState(0);
    const [wood, setWoodNumber] = useState(0);
    const [wheat, setWheatNumber] = useState(0);
    const [sheep, setSheepNumber] = useState(0);
    const [stone, setStoneNumber] = useState(0);
    const [structures, setStructures] = useState(false);

    
    useEffect(() => {
        if(resources === true){
            setBrickNumber(0);
            setWheatNumber(0);
            setWoodNumber(0);
            setStoneNumber(0);
            setSheepNumber(0);
            resetResources(false);
            setStructures(true);
        }
    });

    function foo(){
        function butch(){
            
        }
    }

    function remBrick(){
        if(brick != 0){
            setBrickNumber(brick - 1);
        }
    };

    function addBrick(){
        setBrickNumber(brick + 1);
    }

    function remWood() {
        if (wood != 0) {
            setWoodNumber(wood - 1);
        }
    };

    function addWood() {
        setWoodNumber(wood + 1);
    }

    function remWheat() {
        if (wheat != 0) {
            setWheatNumber(wheat - 1);
        }
    };

    function addWheat() {
        setWheatNumber(wheat + 1);
    }

    function remStone() {
        if (stone != 0) {
            setStoneNumber(stone - 1);
        }
    };

    function addStone() {
        setStoneNumber(stone + 1);
    }

    function remSheep() {
        if (sheep != 0) {
            setSheepNumber(sheep - 1);
        }
    };

    function addSheep() {
        setSheepNumber(sheep + 1);
    }

    function printResources() {
        console.log("|--------CURRENT RESROUCES-------|");
        console.log("b: " + brick);
        console.log("wd: " + wood);
        console.log("wht: " + wheat);
        console.log("shp: " + sheep);
        console.log("stn: " + stone);
        console.log("|--------------------------------|");
    }

    
    const getUpdatedResources = () => {
        console.log("");
        console.log("In function");
        printResources();
        let resources = {
            brick: brick,
            wood: wood,
            sheep: sheep,
            stone: stone,
            wheat: wheat
        };
        return resources;
    };

    return(
        //Resources Container 
        <View style={{flex:2, flexDirection:'column', backgroundColor:'lime'}}>
            {/* Brick Container */}
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor:'blue'}}>
                <View style={styles.resourceBox}>
                    <Text>Bricks:</Text>
                    <Text>{brick}</Text>
                    <TouchableOpacity
                        onPress={addBrick}
                        style={GlobalStyles.buttonStyle}
                    >
                        <Icon
                            name='add'
                        />
                        
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={remBrick}
                        style={GlobalStyles.buttonStyle}
                    >
                        <Icon
                            name='remove'
                        />
                    </TouchableOpacity>
                </View>
                {/* Wood Container */}
                <View style={styles.resourceBox}>
                    <Text>Wood: {wood}</Text>
                    <TouchableOpacity
                        onPress={addWood}
                        style={GlobalStyles.buttonStyle}
                    >
                        <Icon 
                            name='add'
                        />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={remWood}
                        style={GlobalStyles.buttonStyle}
                    >
                        <Icon 
                            name='remove'
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center',backgroundColor:'orange'}}>
                {/* Wheat Container */}
                <View style={styles.resourceBox}>
                    <Text>Wheat: {wheat}</Text>
                    <TouchableOpacity
                        onPress={addWheat}
                        style={GlobalStyles.buttonStyle}
                    >
                        <Icon
                            name='add'
                        />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={remWheat}
                        style={GlobalStyles.buttonStyle}
                    >
                        <Icon
                            name='remove'
                        />
                    </TouchableOpacity>
                </View>
                {/* Sheep Container */}
                <View style={styles.resourceBox}>
                    <Text>Sheep: {sheep}</Text>
                    <TouchableOpacity
                        onPress={addSheep}
                        style={GlobalStyles.buttonRight}
                    >
                        <Icon
                            name='add'
                        />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={remSheep}
                        style={GlobalStyles.buttonStyle}
                    >
                        <Icon
                            name='remove'
                        />
                    </TouchableOpacity>
                </View>
                {/* Stone Container */}
                <View style={styles.resourceBox}>
                    <Text>Stone: {stone}</Text>
                    <TouchableOpacity
                        onPress={addStone}
                        style={GlobalStyles.buttonStyle}
                    >
                        <Icon
                            name='add'
                        />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={remStone}
                        style={GlobalStyles.buttonStyle}
                    >
                        <Icon
                            name='remove'
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1}}>
                <ResourceCalc getUpdatedResources={getUpdatedResources} structures={structures} setStructures={setStructures} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    resourceBox:{
        backgroundColor:'beige',
        width:150,
        alignItems:'center',
        margin:4
    }
});

export default Resources;