import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class Detail extends React.Component {

    render() {
        return (
            <View style={styles.container}>
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

            </View>
        );
    }
};

/*
 TODO 2: ajustar a propriedade flex do estilo
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
});
export default Detail;