/**
 * Created by fabioaarito on 16-01-2017.
 */
import React from 'react';


// Associar checkpoint atual aqui para facilitar desenvolvimento! Have fun!
// Intro page: 'CheckPointIntro'

let CHECKPOINT_ATUAL_NAME = 'CheckPointIntro';

import {
    View
} from 'react-native';

import CheckPointIntro from './checkpoint-intro/app/OpentourAPP';
import CheckPoint1Init from './checkpoint1-init/app/OpentourAPP';
import CheckPoint1Final from './checkpoint1-final/app/OpentourAPP';
import CheckPoint2Init from './checkpoint2-init/app/OpentourAPP';
import CheckPoint2Final from './checkpoint2-final/app/OpentourAPP';
import CheckPoint3Init from './checkpoint3-init/app/OpentourAPP';
import CheckPoint3Final from './checkpoint3-final/app/OpentourAPP';
import CheckPoint4Final from './checkpoint4-final/app/OpentourAPP';
import CheckPoint4Init from './checkpoint4-init/app/OpentourAPP';

let CHECKPOINTS = {
    CheckPointIntro,
    CheckPoint1Init,
    CheckPoint1Final,
    CheckPoint2Init,
    CheckPoint2Final,
    CheckPoint3Init,
    CheckPoint3Final,
    CheckPoint4Init,
    CheckPoint4Final
};

let CHECKPOINT_ATUAL = CHECKPOINTS[CHECKPOINT_ATUAL_NAME];

class WorkshopApp extends React.Component {

    render () {
        return (
            <CHECKPOINT_ATUAL sceneTransition={this.props.sceneTransition} />
        );
    }

};

export default WorkshopApp;
