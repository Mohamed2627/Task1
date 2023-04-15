import React from 'react';
import { View, StyleSheet, TouchableHighlight, Dimensions, Text, Image } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Image
                resizeMode='contain'
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
        justifyContent: "center",
        width: "100%",
        height: 200,
        position: "relative",
        marginBottom: 10
    },
    backgroundImage: {
        width: deviceWidth * 0.9,
        height: "80%",
        borderRadius: 20
    },
    heartIconWraper: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 25,
        right: 20,
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
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 25,
        right: 20,
        width: 60,
        height: 20,
        backgroundColor: "white",
        borderRadius: 10,
    },
    text: {
        fontWeight: "bold"
    }

});

export default Header;
