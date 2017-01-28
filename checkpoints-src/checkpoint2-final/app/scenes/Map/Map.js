import React from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';

import MapView from 'react-native-maps';

class Map extends React.Component {

    render () {
        return (
            <View style ={styles.container}>
                <MapView style={styles.map}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});

export default Map;