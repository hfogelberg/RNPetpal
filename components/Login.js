'use strict';
//@flex

import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
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

    const url = "http://localhost:3000/api/v1/login"

    var details = {
        'username': this.state.username,
        'password': this.state.password
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);

      const data = responseJson.data;
      console.log('Data', data);
      const token = data.authToken;

      if (token) {
        try {
          console.log('Token: ' + token);
          AsyncStorage.setItem('token', token);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log('No token');
      }
    })
    .catch((error) => {
      console.log(console.error);
    });
  }

module.exports = Login;
