import React, {Component} from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    ActivityIndicator,
    Dimensions,
    Share,
    Linking,
    Platform
} from 'react-native';

import Colors from './../../common/Colors';

import ApiWeventual from './../../services/api/api-weventual';

var {height, width} = Dimensions.get('window');

class Detail extends React.Component {

    constructor(props){
        super(props);
        this.onPressBack = this.onPressBack.bind(this);
        this.state = {event: null};
    }

    onPressBack(){
        this.props.navigator.pop();
    }

    componentWillMount(){
        //Obtem imagem do evento
        ApiWeventual.getEventDetail(this.props.route.iDEvento).then((response) => {
            var url = 'https://app.weventual.com/' + response.fichImagemEvento;
            this.setState({
                event: response,
                fotoUrl: url,
                latitude: response.latitudeEvento,
                longitude: response.longitudeEvento
            });
        });

      }

    render() {
      if(this.state.event != null){
        return (
            <Image style={{flex: 1,  width: null}}  source={require('./../../assets/bg2.jpg')}>

                <View style={{flex: 1}}>

                    <View style={[styles.paddingTop, {height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>

                        <View style={{flex: 1, paddingLeft: 10, alignItems: 'flex-start'}}>
                            <TouchableOpacity onPress={this.onPressBack}>
                                <Image style={{width: 36, height: 36}} source={require('./../../assets/back.png')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex: 6, alignItems: 'center'}}>

                        </View>

                        <View style={{flex: 3, flexDirection: 'row',alignItems: 'flex-end'}}>
                            <TouchableOpacity onPress={this._shareMessage}>
                                <Image style={{width: 30, height: 30}} source={require('./../../assets/share.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 15}} onPress={() => this._onPressNavigate(this.state.evento)}>
                                <Image style={{width: 30, height: 30}} source={require('./../../assets/navig.png')}/>
                            </TouchableOpacity>
                        </View>

                     </View>

                </View>

                <View style={styles.styleImage}>
                    <Image
                        style={styles.imageSize}
                        source={{uri: this.state.fotoUrl}}>

                    </Image>
                </View>

                <View style={styles.styleDetail}>
                    <ScrollView>
                        <View style={styles.styleViewNormal}>
                            <Text numberOfLines={3} style={styles.fontBig}>
                                {this.state.event.nomeEvento}
                            </Text>
                        </View>
                        <View style={styles.styleViewNormal}>
                            <Text style={styles.bold}>
                                Quando?
                            </Text>
                            <Text style={styles.fontNormal}>
                                {this.state.event.dataHoraIniEventoFormatada}
                            </Text>
                        </View>
                        <View style={styles.styleViewNormal}>
                            <Text style={styles.bold}>
                                Onde?
                            </Text>
                            <Text style={styles.fontNormal}>
                                {this.state.event.localidadePostalEvento}
                            </Text>
                        </View>
                        <View style={[styles.styleViewNormal]}>
                            <Text style={styles.bold}>
                                Site Oficial?
                            </Text>
                            <Text style={[styles.fontNormal ,{color: 'blue'}]} onPress={() => Linking.openURL(this.state.event.uRLEvento)}>
                                {this.state.event.uRLEvento}
                            </Text>
                        </View>
                        <View style={styles.styleViewNormal}>
                            <Text numberOfLines={3} style={styles.fontBig}>
                                {this.state.event.messageToShare} !
                            </Text>
                        </View>
                    </ScrollView>
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

    //Funcao de partilha do evento
    _shareMessage() {
        var mensagem = "Im sharing an event from Weventual!"
        Share.share({
            message: mensagem
        })
            .then(this._showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    }

    //Funcao que aciona a navegacao ate ao evento
    _onPressNavigate(evento) {
        var url = "http://maps.google.com/maps?z=12&t=m&q=loc:";
        url += this.state.latitude + "+" + this.state.longitude;
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
    activityIndicator: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    wrapper: {
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        paddingLeft: 10,
        paddingRight: 10,
    },
    styleImage: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageSize: {
        flexDirection: 'row',
        //opacity: 0.3,
        width: 200,
        height: 200,
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 100,
        borderWidth: 5,
        borderColor: 'white'
    },
    styleDetail: {
        marginTop: 10,
        flex: 5,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bold: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    fontNormal: {
        fontSize: 14,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center'
    },
    styleViewNormal: {
        marginTop: 10,
        alignItems: 'center',
        paddingVertical: 5
    },
    fontBig: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    styleViewBig: {
        paddingTop: 15,
        paddingBottom: 5
    },
    paddingTop: {
        paddingTop: Platform.OS === 'ios' ? 25 : 10
    }
});
export default Detail;