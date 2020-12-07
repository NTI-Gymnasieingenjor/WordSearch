/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

function LetterBox(letter, setFoundLetters, foundLetters) {
  let [selected, setSelected] = React.useState(false);

  let click = (letter) => {
    console.log('click: ', letter);
    setSelected(!selected);
    setFoundLetters([...foundLetters, letter]);
  };

  return (
    <Button
      title={letter}
      onPress={() => click(letter)}
      color={
        selected
          ? styles.charSelect.backgroundColor
          : styles.char.backgroundColor
      }>
      <Text>{letter}</Text>
    </Button>
  );
}

function LetterRow(letterList, setFoundLetters, foundLetters) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {letterList.map((letter) =>
        LetterBox(letter, setFoundLetters, foundLetters),
      )}
    </View>
  );
}

let word = 'CAT';
let wordSearch = [
  ['C', 'O', 'Z'],
  ['S', 'A', 'Y'],
  ['Q', 'G', 'T'],
];

export default function App() {
  let [foundLetters, setFoundLetters] = React.useState([]);
  console.log(foundLetters);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{word}</Text>
      <View>
        {wordSearch.map((row) => LetterRow(row, setFoundLetters, foundLetters))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
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
