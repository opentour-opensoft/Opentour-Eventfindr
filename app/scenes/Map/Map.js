import React from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    Image
} from 'react-native';

import Colors from './../../common/Colors';
import Detail from './../Detail/Detail';
import MapView from 'react-native-maps';

import ApiWeventual from '../../services/api/api-weventual';

class Map extends React.Component {

    constructor(props){
        super(props);
        this.onPressDetail = this.onPressDetail.bind(this);
        this.state = {
            eventLocations: []
        };
    }

    onPressDetail(iDEvento, latitude, longitude) {
        this.setState({
            latitude,
            longitude
        });
        this.props.navigator.push({component: Detail, iDEvento: iDEvento});
    }

    //Esta funcao vem a partir do react.Component. Vai ser executada automaticamente antes do
    //metodo render()
    componentWillMount(){
        //Efetua evocacao ao weventual para obter eventos
        ApiWeventual.getAllEvents().then((response) => {
            this.setState({
                eventLocations: response
            });
        });
    }

    render () {
        if(this.state.eventLocations.length > 0){
            return (
                <View style ={styles.container}>
                    <MapView
                        style={styles.map}
                        region={{
                            latitude: (this.state.latitude ? this.state.latitude : 38.74),
                            longitude: (this.state.longitude ? this.state.longitude : -9.16),
                            latitudeDelta: 5,
                            longitudeDelta: 5}}
                    >
                        {
                            this.state.eventLocations.map((marker, index) => (
                                <MapView.Marker key={index} onSelectkey={marker.iDEvento} pinColor={this.getPinColor(marker)} coordinate={marker} onPress={() => this.onPressDetail(marker.iDEvento, marker.latitude, marker.longitude)} onSelect={() => this.onPressDetail(marker.iDEvento)}>
                                </MapView.Marker>
                            ))
                        }
                    </MapView>
                </View>
            );
        }else{
            return(
                <Image style={{flex: 1, alignItems: 'center', justifyContent: 'center', resizeMode: 'contain',  width: null}} source={require('./../../assets/logo.png')}>
                    <ActivityIndicator size="large"/>
                </Image>
            )
        }
    }

    //Metodo que define a cor do pin a partir do estado do evento do
    //Weventual
    getPinColor(marker){
        if(marker.fechado){
            return 'red';
        }else{
            return 'green';
        }
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
    },
    activityIndicator: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    }
});

export default Map;