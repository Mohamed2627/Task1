import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Title from '../utils/Title';
import ReReserveButton from '../utils/ReReserveButton';

const Previous = ({ data }) => {
    return (
        <View style={styles.componentWraper}>
            <Title brand="The Globe" place="International" />
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode='contain'
                    style={styles.icon}
                    source={require('../assets/Vector3xcopy.png')}
                />
                <Text style={styles.text}>
                    {data.id}
                </Text>
            </View>
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode='contain'
                    style={styles.icon}
                    source={require('../assets/Vector3x.png')}
                />
                <Text style={styles.text}>
                    {data.title}
                </Text>
            </View>
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode='contain'
                    style={styles.icon}
                    source={require('../assets/carbon_phone-voice3x.png')}
                />
                <Text style={styles.text}>
                    Mode Al Faisalih-Riaydh
                </Text>
            </View>
            <View style={styles.iconTextWraper}>
                <Image
                    resizeMode='contain'
                    style={styles.icon}
                    source={require('../assets/akar-icons_calendar3x.png')}
                />
                <Text style={styles.dateText}>
                    Mode Al Faisalih-Riaydh
                </Text>
            </View>
            <View style={styles.buttonWraper}>
                <ReReserveButton />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    componentWraper: {
        marginTop: 10,
        marginBottom: 10,
        position: "relative"
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
    buttonWraper: {
        position: "absolute",
        bottom: 20,
        right: 0
    }
})

export default Previous;
