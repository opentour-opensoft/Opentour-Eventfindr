import React from 'react';

import {
    BackAndroid,
    Navigator,
    View,
    StyleSheet,
    StatusBar
} from 'react-native';

import Intro from './scenes/Intro/Intro';
import Colors from './common/Colors';

class OpentourApp extends React.Component {

    constructor (props) {
        super(props);
        this.handleBackButton = this.handleBackButton.bind(this);
        this.renderScene = this.renderScene.bind(this);
    }

    componentDidMount () {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount () {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton () {
        const {navigator} = this.refs;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }

    renderScene (route, navigator) {
        let Component = route.component;
        return <Component route={route} navigator={navigator} />;
    }

    render () {
        return (
            <View style={styles.container}>
            <StatusBar
                backgroundColor={Colors.primaryBlue}
                barStyle='light-content'
            />
            <Navigator
                ref='navigator'
                style={styles.navigatorContainer}
                initialRoute={{component: Intro}}
                renderScene={this.renderScene}
                configureScene={(route) => { return this.props.sceneTransition; }} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigatorContainer: {
        flex: 1,
        backgroundColor: '#222222'
    }

});

export default OpentourApp;