import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';

class Mypets extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>
          My Pets
        </Text>
      </View>
    )
  }
}

module.exports = Mypets;
