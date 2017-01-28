import React from 'react';

import {
    Navigator,
    AppRegistry,
    Text
} from 'react-native';

import WorkshopApp from './checkpoints-src/checkpoint-app';


class Opentour extends React.Component {
    render () {
        //Transicao entre menus
        return (
            <WorkshopApp sceneTransition={Navigator.SceneConfigs.PushFromRight} />
        );
    }
}

AppRegistry.registerComponent('opentour2017', () => Opentour);