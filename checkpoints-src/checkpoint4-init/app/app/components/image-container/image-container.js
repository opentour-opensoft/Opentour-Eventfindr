import React from 'react';

import {
    View,
    StyleSheet,
    Image,
} from 'react-native';

class ImageContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render () {
        return(
            <View style={styles.container}>
                <Image
                    style={styles.imageSize}
                    source={{uri: this.props.url}}>

                </Image>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageSize: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: 'white'
    }
});

export default ImageContainer;