import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Title = ({ brand, place }) => {
    // console.log(props)
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.brand}>
                {brand}
            </Text>
            <Text style={styles.place}>
                {place}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    brand: {
        color: "#553586",
        fontSize: 30,
        fontWeight: "bold"
    },
    place: {
        fontSize: 15,
        marginLeft: 6,
        color: "#180732"
    }

})

export default Title;
