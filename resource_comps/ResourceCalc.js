import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../global_assets/GlobalStyles';
import { Icon } from 'react-native-elements';


function ResourceCalc( {getUpdatedResources, structures, setStructures} ){

    const [roads, setRoads] = useState(0);
    const [houses, setHouses] = useState(0);
    const [cities, setCities] = useState(0);
    const [devCard, setDevCard] = useState(0);

    useEffect(() => {
        if (structures === true) {
            setRoads(0);
            setHouses(0);
            setCities(0);
            setDevCard(0);
            setStructures(false);
        }
    });




    const calcBuildings = () => {
        
        const resourceCards = getUpdatedResources();
        
        let b = resourceCards.brick;
        let wd = resourceCards.wood;
        let wht = resourceCards.wheat;
        let shp = resourceCards.sheep;
        let stn = resourceCards.stone;
        getNumRoads(b,wd);
        getNumSett(b,wd,wht,shp);
        getNumCity(wht,stn);
        getNumDev(wht,shp,stn);
    
    };

    function getNumRoads(brick, wood){

        let numRoads = 0;
        while ((brick != 0) && (wood != 0)){
            numRoads++;
            brick--;
            wood--;
        }
        console.log("numRoads: " + numRoads);
        
        setRoads(numRoads);
    }

    function getNumSett(brick, wood, wheat, sheep) {

        let numSettlements = 0;
        while ((brick != 0) && (wood != 0) && (wheat != 0) && (sheep != 0)) {
            numSettlements++;
            brick--;
            wood--;
            wheat--;
            sheep--;
        }
        console.log("numSettlements: " +numSettlements);

        setHouses(numSettlements);
    }

    function getNumCity(wheat, stone) {

        let numCities = 0;
        while (((wheat - 2) >= 0) && ((stone - 3) >= 0)) {
                numCities++;
                wheat -= 2;
                stone -= 3;
        }
        console.log("numCities: " + numCities);

        setCities(numCities);
    }

    function getNumDev(wheat, stone, sheep) {

        let numDevCards = 0;
        while ((wheat != 0) && (stone != 0) && (sheep != 0)) {
            numDevCards++;
            wheat--;
            stone--;
            sheep--;
        }
        console.log("numDevCards: " + numDevCards);

        setDevCard(numDevCards);
    }

    return(
        <View style={{ flex:1,backgroundColor:'yellow'}}>
            <View style={{ flex: 2, flexDirection: 'row'}}>
                <View style={{flex:1, backgroundColor:'lime',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{ paddingBottom:12,fontSize:20}}>Roads: {roads}</Text>
                    <Text style={{ fontSize: 20 }}>Cities: {cities}</Text>
                    
                </View>
                <View style={{ flex: 1, backgroundColor:'crimson',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ paddingBottom:12,fontSize: 20 }}>Settlements: {houses}</Text>
                    <Text style={{ fontSize: 20 }}>Development Card: {devCard}</Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent:'center',alignItems:'center',backgroundColor: 'yellow' }}>
                <View>
                    <TouchableOpacity
                        onPress={calcBuildings}
                        style={GlobalStyles.buttonStyle}
                    >
                        <Text>Cacl Options</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

};

export default ResourceCalc;