import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
      <Signup />
      </View>
    )
  }
}

module.exports = App;
