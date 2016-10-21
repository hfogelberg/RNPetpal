import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';
import Signup from './Signup';
import Addpet from './Addpet';
import Login from './Login';
import Menu from './Menu';
import Mypets from './Mypets';

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
