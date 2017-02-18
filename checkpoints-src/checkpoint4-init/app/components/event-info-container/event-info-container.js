import React from 'react';

import {
    View,
    StyleSheet,
    Image,
    ScrollView,
    Text,
    Linking
} from 'react-native';

class EventInfoContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render () {
        return(
            <ScrollView>
                <View style={styles.infoSection}>
                    <Text numberOfLines={3} style={styles.fontBig}>
                        {this.props.event.nomeEvento}
                    </Text>
                </View>
                <View style={styles.infoSection}>
                    <Text style={styles.bold}>
                        Quando?
                    </Text>
                    <Text style={styles.fontNormal}>
                        {this.props.event.dataHoraIniEventoFormatada}
                    </Text>
                </View>
                <View style={styles.infoSection}>
                    <Text style={styles.bold}>
                        Onde?
                    </Text>
                    <Text style={styles.fontNormal}>
                        {this.props.event.localidadePostalEvento}
                    </Text>
                </View>
                <View style={[styles.infoSection]}>
                    <Text style={styles.bold}>
                        Site Oficial?
                    </Text>
                    <Text style={[styles.fontNormal , {color: 'blue'}]} onPress={() => Linking.openURL(this.props.event.uRLEvento)}>
                        {this.props.event.uRLEvento}
                    </Text>
                </View>
            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    infoSection: {
        marginTop: 10,
        alignItems: 'center',
        paddingVertical: 5
    },
    fontBig: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
});

export default EventInfoContainer;
