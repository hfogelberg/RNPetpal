import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
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
      animaltype: '',
      petname: '',
      breed: '',
      gender: '',
      dobDate: ''
    }
  }

  componentDidMount() {
    console.log('My pets');
    AsyncStorage.getAllKeys((err, keys) => {
      console.log(keys);
      AsyncStorage.multiGet(keys, (err, stores) => {
       stores.map((result, i, store) => {
         // get at each store's key/value so you can work with it
         let key = store[i][0];
         let value = store[i][1];

         console.log('Key ' + key);
         console.log('Value: ' + value);

         switch (key) {
           case 'token':
             this.setState({'token': value});
            case 'userid':
              this.setState({'userid': value}) ;
         }
        });
      });

        console.log('Token: ' +  this.state.token);
        console.log('User id: ' +  this.state.userid);
    });
  }

  onSaveButtonPress() {
      console.log('Save pet');

      console.log(this.state.petname);

      var details = {
          name: this.state.petname,
          animaltype: this.state.animaltype,
          breed: this.state.breed,
          gender: this.state.gender,
          dob: this.state.dobDate,
          userId: this.state.userid
      };

      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      const url = 'http://localhost:3000/api/v1/pets'
      fetch(url,
        {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Auth-Token': this.state.token,
            'X-User-Id': this.state.userid
          },
          body: formBody
        })
      .then((response) => response.json())
      .then((responseData) => {
          console.log(responseData);
      })
      .catch((error) => {
        console.error(error);
      });

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
                  onChangeText={(animaltype)=>this.setState({animaltype})}/>
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
