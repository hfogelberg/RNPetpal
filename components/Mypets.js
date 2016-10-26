import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableOpacity
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

        console.log('Token: ' +  this.state.token);
        console.log('User id: ' +  this.state.userid);

        if( this.state.token && this.state.userid) {
          console.log('Has token and user id. Fetch pets');
          this.getMyPets();
        }  else {
          console.log('Token or user id missing. Redirect to login');
          this.props.navigator.push({id: 'Login'});
        }
      });
    });
  }

  getMyPets() {
    console.log('Get my pets');
    const url = 'http://localhost:3000/api/v1/pets'
    fetch(url,
      {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Auth-Token': this.state.token,
          'X-User-Id': this.state.userid
        }
      })
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
        const data = responseData.data;
        this.setState({pets: data});
    })
    .done();
  }

  onSelectPet(pet) {
    console.log('onSelectPet ', pet);

    this.props.navigator.push({
      id: 'Pet',
      passProps: {
        pet: pet
      }
    });
  }

  iteratePets() {
    return this.state.pets.map((pet) => {
      return (
        <View
          key={pet._id}
          style={styles.listItem}>
          <TouchableOpacity
            onPress={()=>this.onSelectPet(pet)}>
            <Text style={styles.petName}>{pet.name}</Text>
          </TouchableOpacity>
        </View>
      )
    });
  }
  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Pets</Text>
        </View>

        <View style={styles.listContainer}>
          {this.iteratePets()}
        </View>
      </View>
    )
  }
}

module.exports = Mypets;
