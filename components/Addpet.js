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
import ModalPicker from 'react-native-modal-picker';
import DatePicker from 'react-native-datepicker';
import styles from '../styles/styles';
import {COLOR_LATTE} from '../constants/colors';

class Addpet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petname: '',
      breed: '',
      gender: '',
      dobDate: ''
    }
  }

  onSaveButtonPress() {
      console.log('Save pet');
  }

  render() {
    const genderOptions = [
      {key: 0, label: 'Male'},
      {key: 1, label: 'Femal'}
    ];

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
                  source={require('../assets/calendar.png')}
                  style={styles.icon}/>
                  <DatePicker
                    date = {this.state.date}
                    mode = 'date'
                    placeholder = 'Date of birth'
                    format = 'YYYY-MM-DD'
                    minDate = '2006-01-01'
                    confirmBtnText = 'Confirm'
                    cancelBtnText = 'Cancel'
                    showIcon = {false}
                    style = {styles.datePickerInput}
                    customStyles = {{
                      textinput: {
                        top: 5,
                        right: 10,
                        fontSize: 24,
                        height: 30,
                        borderRadius: 10,
                        paddingLeft: 10,
                        backgroundColor: COLOR_LATTE
                      },
                      dateInput: {
                        borderWidth: 0
                      }
                    }}
                    onDateChange={(dobDate) => {this.setState({dobDate})}}
                  />
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

                    <ModalPicker
                        data={genderOptions}
                        initValue= {this.state.gender}
                        onChange={(option)=>{ this.setState({gender:genderOptions.label})}}>

                        <TextInput
                            style={styles.genderPicker}
                            editable={false}
                            placeholder= 'Select gender'
                            value={this.state.gender} />
                    </ModalPicker>

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
