import React from 'react';
import { View, StyleSheet, TouchableHighlight, Dimensions, Text, Image } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Image
                style={styles.backgroundImage}
                source={require('../assets/restaurant.png')}
            />
            <View style={styles.heartIconWraper}>
                <Image
                    resizeMode='contain'
                    style={styles.heartIcon}
                    source={require('../assets/Vector3xcopy6.png')}
                />
            </View>
            <View style={styles.textWraper}>
                <Text style={styles.text}>
                    10 km
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: "center",
        width: "100%",
        height: 150,
        position: "relative"
    },
    backgroundImage: {
        width: deviceWidth * 0.9,
        height: "100%",
        borderRadius: 20
    },
    heartIconWraper: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 10,
        right: 60,
        width: 50,
        height: 50,
        backgroundColor: "white",
        borderRadius: 50,
    },
    heartIcon: {
        width: 30,
        height: 30,
    },
    textWraper: {

    },

});

export default Header;
