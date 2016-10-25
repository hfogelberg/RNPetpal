import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';
import Signup from './Signup';
import Login from './Login';
import Addpet from './Addpet';
import Menu from './Menu';
import Mypets from './Mypets';

class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
      <Login />
      </View>
    )
  }
}

module.exports = App;
