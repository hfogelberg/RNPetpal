import React, {Component }  from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text
} from 'react-native';
import Button from 'react-native-button';
import styles from '../styles/styles';

class Signup extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        emal: '',
        username: '',
        password: ''
       };
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Sign up</Text>
        </View>

        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Image
                source={require('../assets/name.png')}
                style={styles.icon}/>
            <TextInput
              placeholder="Name"
              autoCapitalize="words"
              autoCorrect={false}
              autoFocus={true}
              style={styles.textInput}
              onChangeText={(name )=> this.setState({name})} />
        </View>
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
                source={require('../assets/email.png')}
                style={styles.icon}/>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={false}
                placeholder="Email"
                style={styles.textInput}
                onChangeText={(email)=>this.setState({email})}/>
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
            <Button
            style={styles.button}
            styleDisabled={styles.disabledButton}
            onPress={() => this.onButtonPress()}>
            Save
          </Button>
        </View>
      </View>
    )
  }

  onButtonPress() {
    fetch("http://localhost:3000/api/users", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        username:   this.state.username,
        password:   this.state.password
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        return '';
      })
  }
}

module.expors = Signup;
