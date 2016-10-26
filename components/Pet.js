import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';

class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: this.props.pet
    }
  }

  componentDidMount() {
    console.log('Pet', this.state.pet);
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>
          {this.state.pet.name}
        </Text>
      </View>
    )
  }
}

module.exports = Pet;
