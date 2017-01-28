import React from 'react';

import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

const BACK_IMAGE = require('./../../assets/back.png');
const SHARE_IMAGE = require('./../../assets/share.png');
const NAVIGATION_IMAGE = require('./../../assets/navig.png');

class Header extends React.Component {

    constructor(props){
        super(props);
    }

    render () {
        return(
            <View style={styles.container}>


                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.props.onPressBack}>
                        <Image style={styles.imageDimensions} source={BACK_IMAGE}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.actionsContainer}>
                        <TouchableOpacity onPress={this.props.onPressShare}>
                            <Image style={styles.imageDimensions} source={SHARE_IMAGE}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.spaceAround} onPress={this.props.onPressNavigate}>
                            <Image style={styles.imageDimensions} source={NAVIGATION_IMAGE}/>
                        </TouchableOpacity>
                </View>

            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 10 : 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    backContainer: {
        flex: 1,
        paddingLeft: 5,
        alignItems: 'flex-start'
    },
    actionsContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 10,
        justifyContent: 'flex-end'
    },
    spaceAround: {
        marginLeft: 15
    },
    imageDimensions: {
        width: 30,
        height: 30
    }
});

export default Header;