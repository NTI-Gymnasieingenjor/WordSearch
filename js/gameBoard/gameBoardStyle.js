/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  board: {
    display: 'flex',
    backgroundColor: 'black',
    borderWidth: 3,
    height: 312,
    width: 312,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  tile: {
    height: 98,
    width: 98,
    margin: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
});
