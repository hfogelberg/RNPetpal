import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  Navigator,
  DeviceEventEmitter,
  TouchableOpacity,
  Image
} from 'react-native';
import Drawer from 'react-native-drawer';
import { EventEmitter } from 'fbemitter';
import navigationHelper from '../helpers/navigation';
import styles from '../styles/styles';
import Signup from './Signup';
import Login from './Login';
import Addpet from './Addpet';
import Menu from './Menu';
import Mypets from './Mypets';
import User from './User';
import Pet from './Pet';

let _emitter = new EventEmitter();

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        initialRoute: {
           id: 'Mypets',
          title: 'My Pets',
          index: 0
        }
      };
    }

    componentDidMount() {
      var self = this;

      // Don't show warnings in the simulator
      // console.disableYellowBox = true;

      _emitter.addListener('openMenu', () => {
          self._drawer.open();
      });

      _emitter.addListener('back', () => {
          self._navigator.pop();
      });

      // If there is a token go to Mypets, otherwise the login page on startup
      AsyncStorage.getItem('token').then((token) => {
        console.log('Token from storage: ' + token);
        var initialRoute = {};
        if (!token) {
          console.log('No token. Go to login page');
          this._navigator.push({id: 'Login'});
        }

        this.setState({initialRoute});
      });
    }

    render() {
      return (
        <Drawer
            ref={(ref) => this._drawer = ref}
            type="overlay"
            content={<Menu navigate={(route) => {
                this._navigator.push(navigationHelper(route));
                this._drawer.close()
            }}/>}
            tapToClose={true}
            openDrawerOffset={0.2}
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            styles= {styles.navbar}
            tweenHandler={(ratio) => ({
                main: { opacity:(2-ratio)/2 }
            })}>
            <Navigator
                ref={(ref) => this._navigator = ref}
                configureScene={(route) => Navigator.SceneConfigs.FloatFromLeft}
                initialRoute={this.state.initialRoute}
                renderScene={(route, navigator) => this._renderScene(route, navigator)}
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.navBar}
                        routeMapper={NavigationBarRouteMapper} />
                }
            />
        </Drawer>
      );
    }

    _renderScene(route, navigator) {
        switch (route.id) {
          case 'Signup':
            return (<Signup navigator={navigator} />);
          case 'Login':
            return (<Login navigator={navigator} />);
          case 'Mypets':
            return (<Mypets navigator={navigator} />);
          case 'Addpet':
            return (<Addpet navigator={navigator}/>);
          case 'About':
            return (<About navigator={navigator} />);
          case 'User':
            return (<User navigation={navigator} />);
          case 'Pet':
            return (<Pet navigation={navigator} {...route.passProps} />);
        }
    }
}

const NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
      switch(route.id) {
        case 'Login':
          return null;
        case 'Signup':
          return null;
        default:
          return (
            <TouchableOpacity
              style={styles.navBarLeftButton}
              onPress={() => {_emitter.emit('openMenu')}}>
              <Image source={require('../assets/Menu.png')}/>
            </TouchableOpacity>
          )
      }
    },

    RightButton(route, navigator, index, navState) {
      return null;
    },

    Title(route, navigator, index, navState) {
      return  null;
    }
}

export default App;
