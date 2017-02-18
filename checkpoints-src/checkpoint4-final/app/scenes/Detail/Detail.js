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

import ApiWeventual from './../../services/api/api-weventual';

class Detail extends React.Component {

    constructor(props){
        super(props);
        this.onPressBack = this.onPressBack.bind(this);
        this.state = {event: undefined};
    }

    onPressBack(){
        this.props.navigator.pop();
    }

    componentWillMount(){
        ApiWeventual.getEventDetail(this.props.route.iDEvento).then((response) => {
            var url = 'https://app.weventual.com/' + response.fichImagemEvento;
            this.setState({
                event: response,
                fotoUrl: url
            });
        });

      }

    render() {
      if(this.state.event){
        return (
            <Image style={styles.container}  source={require('./../../assets/bg2.jpg')}>

                <View style={styles.headerContainer}>
                    <Header onPressNavigate={this.onPressNavigate.bind(this)}
                            onPressShare={this.onPressShare}
                            onPressBack={this.onPressBack} />
                </View>

                <View style={styles.logoImageContainer}>
                    <LogoImage url={this.state.fotoUrl} />
                </View>

                <View style={styles.infoContainer}>
                    <EventInfoContainer event={this.state.event}/>
                </View>

                <View style={styles.footerContainer}>
                    <Text style={styles.fontBig}> Obrigado por participares neste Workshop ! </Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null
    },
    headerContainer: {
        flex: 1
    },
    logoImageContainer: {
        flex: 2
    },
    infoContainer: {
        flex: 3
    },
    footerContainer: {
        flex: 1
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
