/* eslint-disable react-native/no-inline-styles */
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

let letters;
let word;

export default function GameBoard(props) {
  letters = props.letters;
  word = props.word;
  let [selectedList, setSelectedList] = React.useState([]);
  let [selectedColor, setSelectedColor] = React.useState('lightblue');
  function renderRow(
    letterGroup,
    selectedList,
    setSelectedList,
    selectedColor,
    setSelectedColor,
    done,
    setDone,
  ) {
    return (
      <View
        style={styles.row}
        key={letterGroup.map((letter) => letter.word).join('')}>
        {letterGroup.map((letter) => (
          <GameTile
            className={letterGroup}
            key={letter.id + ':' + letter.word}
            letters={letter}
            selectedList={selectedList}
            setSelectedList={setSelectedList}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            done={done}
            setDone={setDone}
          />
        ))}
      </View>
    );
  }
  return (
    <View style={styles.board}>
      {letters.map((letterGroup) =>
        renderRow(
          letterGroup,
          selectedList,
          setSelectedList,
          selectedColor,
          setSelectedColor,
          props.done,
          props.setDone,
        ),
      )}
    </View>
  );
}

export function GameTile(props) {
  let [selected, setSelected] = React.useState(false);
  return (
    <View
      onStartShouldSetResponder={() => {
        /**@type {Array} */
        let lettersList = props.selectedList;
        if (!selected === true) {
          lettersList = [...props.selectedList, props.letters.word];
        } else {
          lettersList.splice(lettersList.indexOf(props.letters.word), 1);
          props.setSelectedColor('lightblue');
        }

        if (lettersList.length > 3) {
          return;
        }
        props.setDone(false);
        let try_word = lettersList.sort().join('');
        if (lettersList.length === 3) {
          if (try_word === word.sortedWord) {
            props.setDone(true);
            alert('GRATTIS!!!');
          }
          props.setSelectedColor(
            try_word === word.sortedWord ? 'green' : 'red',
          );
        }

        setSelected(!selected);
        props.setSelectedList(lettersList);
      }}
      style={[
        styles.tile,
        {backgroundColor: !selected ? 'white' : props.selectedColor},
      ]}>
      <Text style={styles.text}>
        {props.letters === undefined ? '' : props.letters.word.toUpperCase()}
      </Text>
    </View>
  );
}
