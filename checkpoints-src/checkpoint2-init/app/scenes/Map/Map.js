import React from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';

// #TODO 1: Importar componente react-native-maps

class Map extends React.Component {

    render () {
        return (
            <View style ={styles.container}>
                {/* #TODO 2: Adicionar componente react-native-maps à renderização e aplicar respetivo stylesheet */}
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