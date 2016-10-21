import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/root';

class Login extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>
          Log in
        </Text>
      </View>
    )
  }
}

module.exports = Login;
