import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight
} from 'react-native';
import styles from '../styles/styles';

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>
          User
        </Text>

        <TouchableHighlight
            style = {styles.footerStart}
          onPress={()=>this.onSignoutPress()}>
            <Text style={styles.discreetButton} >Sign out</Text>
        </TouchableHighlight>
      </View>
    )
  }

  onSignoutPress() {
    AsyncStorage.removeItem('token', function(err){
      if (err) {console.log(err);}
      console.log('Item removed');
      this.props.navigator.push({id: 'Login'});
    });
  }
}

module.exports = User;
