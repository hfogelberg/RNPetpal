import React, { Platform } from 'react-native';
import _ from 'underscore';

module.exports = function (scene) {
    var componentMap = {
        'Mypets': {
          title: 'My pets',
          id: 'Mypets'
        },
        'Addpet': {
          title: 'Addpet',
          id: 'Addpet'
        },
        'About': {
          title: 'About',
          id: 'About'
        },
        'User': {
          title: 'User',
          id: 'User'
        }
    }

    return componentMap[scene];
}
