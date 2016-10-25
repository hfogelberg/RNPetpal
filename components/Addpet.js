import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';

class Addpet extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>
          Add Pet
        </Text>
      </View>
    )
  }
}

module.exports = Addpet;
