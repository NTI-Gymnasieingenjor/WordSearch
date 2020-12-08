/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './gameBoardStyle';
import Word from '../word/Word';

const letters = [
  [new Word('H', 69), new Word('e', 69), new Word('j', 69)],
  [new Word('c', 420), new Word('a', 420), new Word('y', 420)],
  [new Word('K', 96), new Word('o', 96), new Word('r', 96)],
];

export default function GameBoard() {
  function renderRow(letterGroup) {
    return (
      <View style={styles.row}>
        <GameTile letters={letterGroup[0]} />
        <GameTile letters={letterGroup[1]} />
        <GameTile letters={letterGroup[2]} />
      </View>
    );
  }
  return (
    <View style={styles.board}>
      {letters.map((letterGroup) => {
        return renderRow(letterGroup);
      })}
    </View>
  );
}

export function GameTile(props) {
  let [selected, setSelected] = React.useState(false);
  return (
    <View
      onStartShouldSetResponder={() => {
        setSelected(!selected);
      }}
      style={[
        styles.tile,
        {backgroundColor: !selected ? 'white' : 'lightblue'},
      ]}>
      <Text style={styles.text}>
        {props.letters === undefined ? '' : props.letters.word.toUpperCase()}
      </Text>
    </View>
  );
}
