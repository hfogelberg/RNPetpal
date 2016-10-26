import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';
import styles from '../styles/styles';

class Addpet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petname: '',
      breed: '',
      gender: ''
    }
  }

  onSaveButtonPress() {
      console.log('Save pet');
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Pet</Text>
        </View>

        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Image
                source={require('../assets/dinosaur.png')}
                style={styles.icon}/>
              <TextInput
                  placeholder="Type of animal"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus={false}
                  onChangeText={(petname)=>this.setState({petname})}/>
            </View>

          <View style={styles.inputContainer}>
            <Image
                source={require('../assets/catprofile.png')}
                style={styles.icon}/>
              <TextInput
                  placeholder="Name"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus={false}
                  onChangeText={(petname)=>this.setState({petname})}/>
            </View>

            <View style={styles.inputContainer}>
              <Image
                  source={require('../assets/monkey.png')}
                  style={styles.icon}/>
                <TextInput
                    placeholder="Breed"
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoFocus={false}
                    onChangeText={(breed)=>this.setState({breed})}/>
              </View>

              <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/gender.png')}
                    style={styles.icon}/>
                  <TextInput
                      placeholder="Gender"
                      style={styles.textInput}
                      autoCapitalize="none"
                      autoCorrect={false}
                      autoFocus={false}
                      onChangeText={(username)=>this.setState({username})}/>
              </View>

              <View style={styles.centerButtonContainer}>
                <TouchableHighlight
                  underlayColor='gray'
                  style = {styles.button}
                  onPress={() => this.onSaveButtonPress()}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </View>
        </View>
      </View>
    )
  }
}

module.exports = Addpet;
