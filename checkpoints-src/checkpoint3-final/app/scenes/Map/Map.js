import React from 'react';

import {
    View,
    StyleSheet,
    ActivityIndicator,
    Image
} from 'react-native';

import Detail from './../Detail/Detail';
import MapView from 'react-native-maps';

const DEFAULT_REGION =  {
    latitude: 38.74,
    longitude: -9.16,
    latitudeDelta: 5,
    longitudeDelta: 5}

const LOGO_IMAGE = require('./../../assets/logo.png');

const DUMMY_EVENT = {
    iDEvento: 9001,
    latitude: 38.74,
    longitude: -9.16
}

class Map extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            eventLocations: [DUMMY_EVENT]
        };
    }

    onPressDetail(iDEvento) {
        this.props.navigator.push({component: Detail, iDEvento: iDEvento});
    }

    render () {
        if(this.state.eventLocations.length > 0){
            return (
                <View style ={styles.container}>
                    <MapView style={styles.map} region={DEFAULT_REGION}>
                        {
                            this.state.eventLocations.map((marker, index) => (
                                <MapView.Marker key={index}
                                                onSelectkey={marker.iDEvento}
                                                coordinate={marker}
                                                onPress={() => this.onPressDetail(marker.iDEvento)}
                                                onSelect={() => this.onPressDetail(marker.iDEvento)}/>
                            ))
                        }
                    </MapView>
                </View>
            );
        }else{
            return(
                <Image style={styles.activityIndicatorContainer} source={LOGO_IMAGE}>
                    <ActivityIndicator size="large"/>
                </Image>
            )
        }
    }
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    activityIndicatorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        width: null
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});

export default Map;