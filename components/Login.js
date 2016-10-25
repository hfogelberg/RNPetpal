'use strict';
//@flex

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Navigator,
  TouchableHighlight
} from 'react-native';
import styles from '../styles/styles';

class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
       };
  }

  render() {
    return (
      <View style = {styles.formContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Log in</Text>
        </View>

        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Image
                source={require('../assets/username.png')}
                style={styles.icon}/>
              <TextInput
                  placeholder="Username"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus={false}
                  onChangeText={(username)=>this.setState({username})}/>
            </View>
            <View style={styles.inputContainer}>
              <Image
                  source={require('../assets/password.png')}
                  style={styles.icon}/>
                <TextInput
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus={false}
                  style={styles.textInput}
                  onChangeText={(password)=>this.setState({password})}
                  />
            </View>

            <View style={styles.centerButtonContainer}>
              <TouchableHighlight
                underlayColor='gray'
                style = {styles.button}
                onPress={() => this.onButtonPress()}>
                  <Text style={styles.buttonText}>Log in</Text>
              </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }

  onButtonPress() {
    console.log('On press');
    fetch("http://localhost:3000/api/authenticate", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        username:   this.state.username,
        password:   this.state.password
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        return '';
      })
  }
}

module.exports = Login;
