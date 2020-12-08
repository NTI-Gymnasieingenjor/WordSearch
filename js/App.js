/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import GameBoard from './gameBoard/GameBoard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>yeet!</Text>
      <GameBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  char: {
    margin: 8,
    padding: 24,
    fontSize: 18,
    backgroundColor: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  charSelect: {
    margin: 8,
    padding: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'lightblue',
  },
});
