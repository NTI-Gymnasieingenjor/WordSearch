/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

export default class Word {
  /**
   * @param {String} word
   * @param {String} id
   */
  constructor(word, id) {
    this.word = word;
    this.id = id;
    this.sortedWord = this.word.split('').sort().join('');
  }
}
