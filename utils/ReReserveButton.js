import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ReReserveButton = () => {
    return (
        <TouchableOpacity
            style={styles.rereservButton}
        >
            <Text style={styles.text}>Re-Reserve</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    rereservButton: {
        backgroundColor: "#553586",
        width: 100,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    text: {
        color: "white",
        fontSize: 15
    }
})

export default ReReserveButton;
