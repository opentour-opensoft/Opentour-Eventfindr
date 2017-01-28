import React, {Component} from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ActivityIndicator,
    Share,
    Linking
} from 'react-native';

import Header from './../../components/header/header'
import LogoImage from './../../components/image-container/image-container'
import EventInfoContainer from './../../components/event-info-container/event-info-container'

const DUMMY_EVENT = {
    event: {
        iDEvento: 9001,
        latitudeEvento: 38.74,
        longitudeEvento: -9.16,
        nomeEvento: 'OpenTour 2017',
        dataHoraIniEventoFormatada: 'agora!',
        localidadePostalEvento: 'aqui!',
        uRLEvento: 'http://www.weventual.com/'
    },
    fotoUrl: 'https://facebook.github.io/react-native/img/header_logo.png'
}

class Detail extends React.Component {

    constructor(props){
        super(props);
        this.onPressBack = this.onPressBack.bind(this);
        this.state = DUMMY_EVENT;
    }

    onPressBack(){
        this.props.navigator.pop();
    }

    render() {
        if(this.state.event){
            return (
                <Image style={styles.container}  source={require('./../../assets/bg2.jpg')}>
                    {/*
                      * #TODO 1: associar o estilo respetivo a cada view
                      * #TODO 2: Aplicar o flex a cada estilo
                      */}
                    <View style={styles.TODO1}>
                        <Text>Header</Text>
                    </View>

                    <View style={styles.TODO1}>
                        <Text>Logo</Text>
                    </View>

                    <View style={styles.TODO1}>
                        <Text>Event</Text>
                    </View>

                    <View style={styles.TODO1}>
                        <Text> Footer </Text>
                    </View>

                </Image>
            );
        } else{
            return(
                <View style={styles.activityIndicator}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }

    onPressShare() {
        var mensagem = "Im sharing an event from Weventual!"
        Share.share({
            message: mensagem
        })
            .then(this._showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    }

    onPressNavigate() {
        var url = "http://maps.google.com/maps?z=12&t=m&q=loc:";
        url += this.state.event.latitudeEvento + "+" + this.state.event.longitudeEvento;
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }
};

/*
 TODO 2: ajustar a propriedade flex do estilo
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null
    },
    headerContainer: {
        //TODO2
        backgroundColor: 'red'
    },
    logoImageContainer: {
        //TODO2
        backgroundColor: 'yellow'
    },
    infoContainer: {
        //TODO2
        backgroundColor: 'green'
    },
    footerContainer: {
        //TODO2
        backgroundColor: 'blue'
    },
    fontBig: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    activityIndicator: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    }
});
export default Detail;