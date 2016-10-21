import React, { Platform } from 'react-native';
import _ from 'underscore';

module.exports = function (scene) {
    var componentMap = {
        'Signup': {
          title: 'Signup',
          id: 'Signup'
        },
        'Login': {
          title: 'Login',
          id: 'Login'
        },
        'Mypets': {
          title: 'Mypets',
          id: 'Mypets'
        },
        'Addpet': {
          title: 'Addpet',
          id: 'Addpet'
        }
    }

    return componentMap[scene];
}
