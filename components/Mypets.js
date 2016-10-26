import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Image,
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
    this,getMyPets =  this.getMyPets.bind(this);
    this.state = {
      pets: [],
      statusText: '',
      token: '',
      userid: ''
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

        const message = responseData.message;
        console.log('message: ' + message);
        if (message == 'OK') {
          console.log('Status is OK');
        } else if (message === 'You must be logged in to do this.') {
          console.log('Logged out');
          AsyncStorage.removeItem('token', function(err){
            AsyncStorage.removeItem('userid', function(err){
              if (err) {console.log(err);}
              console.log('Item removed');
              this.props.navigator.push({id: 'Login'});
            });
          });
        }

        const pets = responseData.data;
        this.setState({pets});
    })
    .catch((error) => {
      this.setState({
        pets: [],
        statusText: error
      })
      console.error(error);
    });
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

  onCreatePet() {
    this.props.navigator.push({id: 'Addpet'});
  }

  iteratePets() {
    console.log('Number of pets: ' + this.state.pets.length);
    if (this.state.pets.length > 0){
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
    } else {
      return (
        <View style={styles.loadingView}>
          <Text style={styles.loadingText}
                numberOfLines={4}>
            {this.state.statusText}
          </Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Pets</Text>
        </View>

        <View style={styles.newPetButtonContainer}>
          <TouchableOpacity
            onPress={()=>this.onCreatePet()}
            style={styles.newPetButton}>
            <Image source={require('../assets/Plus.png')}/>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          {this.iteratePets()}
        </View>
      </View>
    )
  }
}

module.exports = Mypets;
