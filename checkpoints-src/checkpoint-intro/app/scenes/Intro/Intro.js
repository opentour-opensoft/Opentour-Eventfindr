import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

class Intro extends React.Component {

    render() {
        return (
            <Image style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', resizeMode: 'contain',  width: null}} source={require('./../../assets/logo.png')}>
                <Text style={styles.fontBig}> Bem vindos ao EventFindr Workshop!</Text>
            </Image>
        );
    }
};

const styles = StyleSheet.create({
    fontBig: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 30,
    },
});
export default Intro;