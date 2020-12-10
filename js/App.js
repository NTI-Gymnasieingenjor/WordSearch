/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  DevSettings,
} from 'react-native';
import GameBoard from './gameBoard/GameBoard';
import Word from './word/Word';

const word = new Word('HEJ', 69);

const letters = [
  [new Word('H', 69), new Word('E', 69), new Word('J', 69)],
  [new Word('c', 420), new Word('e', 420), new Word('t', 420)],
  [new Word('f', 96), new Word('j', 96), new Word('a', 96)],
];

export default function App() {
  let [done, setDone] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {word.word.toLowerCase().charAt(0).toUpperCase() +
          word.word.toLowerCase().slice(1)}
      </Text>
      <GameBoard done={done} setDone={setDone} word={word} letters={letters} />
      {done ? (
        <TouchableOpacity
          onPress={() => {
            DevSettings.reload();
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    margin: 12,
    padding: 12,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 32,
    color: 'white',
  },
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
