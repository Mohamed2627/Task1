import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Title from '../utils/Title';

const Upcoming = () => {
    return (
        <View style={styles.componentWraper}>
            <View style={styles.firstRowWraper}>
                <Title brand="Meraki" place="Greek" />
                <View style={styles.iconTextWraper}>
                    <Image
                        resizeMode='contain'
                        style={styles.icon}
                        source={require('../assets/Vector3xcopy.png')}
                    />
                    <Text style={styles.text}>
                        Mode Al Faisalih-Riaydh
                    </Text>
                </View>
            </View>
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode='contain'
                    style={styles.icon}
                    source={require('../assets/carbon_phone-voice3x.png')}
                />
                <Text style={styles.text}>
                    +966 11 481 0569
                </Text>
            </View>
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode='contain'
                    style={styles.icon}
                    source={require('../assets/Vector3x.png')}
                />
                <Text style={styles.text}>
                    Reservation for 3 people
                </Text>
            </View>
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode='contain'
                    style={styles.icon}
                    source={require('../assets/akar-icons_calendar3x.png')}
                />
                <Text style={styles.dateText}>
                    Wed, Aug 28, 9.11 pm
                </Text>
            </View>
            <TouchableOpacity
                style={styles.cancelButton}
            >
                <Text style={{ color: '#D81F1F', fontSize: 15 }}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    componentWraper: {
        position: "relative",
    },
    firstRowWraper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconTextWraper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 6
    },
    icon: {
        width: 17,
        height: 17
    },
    text: {
        color: "#180732",
        paddingLeft: 4
    },
    dateText: {
        color: "#ff8223",
        paddingLeft: 4
    },
    cancelButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: "#D81F1F",
        borderWidth: 2,
        width: 100,
        height: 40,
        // padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 20,
        right: 0

    }
})

export default Upcoming;
