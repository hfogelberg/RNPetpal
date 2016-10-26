import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';

class Mypets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    this.getMyPets();
  }

  getMyPets() {
    console.log('Get my pets');
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Pets</Text>
        </View>

        <View style={styles.listContainer}>

        </View>
      </View>
    )
  }
}

module.exports = Mypets;
