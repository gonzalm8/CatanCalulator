/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState }from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LevelCounter from './components/LevelCounter';
import Resources from './resource_comps/Resources';
import ResourceCalc from './resource_comps/ResourceCalc';


const App: () => React$Node = () => {

  const [resources, setResources] = useState(false);
  const [building, setBuilding] = useState(false);

  const playerName = "Tester";

  const resetResources = () => {
    setResources(false);
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <LevelCounter playerName={playerName} setResources={setResources} />
      <Resources resources={resources} resetResources={resetResources} />
    </SafeAreaView>
  );
};

export default App;
