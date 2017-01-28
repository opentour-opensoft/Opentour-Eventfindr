import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class Detail extends React.Component {

    render() {
        return (
            <View style={styles.container} >

                <View style={styles.headerContainer}>
                    <Text>Header</Text>
                </View>

                <View style={styles.logoImageContainer}>
                    <Text>Logo</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text>Event</Text>
                </View>

                <View style={styles.footerContainer}>
                    <Text> Footer </Text>
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        backgroundColor: 'red'
    },
    logoImageContainer: {
        flex: 2,
        backgroundColor: 'yellow'
    },
    infoContainer: {
        flex: 3,
        backgroundColor: 'green'
    },
    footerContainer: {
        flex: 1,
        backgroundColor: 'blue'
    }
});
export default Detail;