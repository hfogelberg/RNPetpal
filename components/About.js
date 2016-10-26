import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';

class About extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>
          About
        </Text>
      </View>
    )
  }
}

module.exports = About;
