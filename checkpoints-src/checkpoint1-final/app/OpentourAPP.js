import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

class OpentourApp extends React.Component {

    constructor (props) {
        super(props);
    }


    onPress(){
        //Correr comando react-native log-android ou log-ios para ver os logs na consola
        console.log('Pressed!!!');
    }

    render () {
        return (
            <TouchableHighlight underlayColor='#333333' onPress={this.onPress}>
                <Text style={styles.bigTitle}>Opentour 2017</Text>
            </TouchableHighlight>
        )
    }
};

const styles = StyleSheet.create({
    bigTitle: {
        color: 'orange',
        fontSize: 34
    }
});

export default OpentourApp;