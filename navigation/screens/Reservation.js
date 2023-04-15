import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';
import Header from '../../components/Header';
import Upcoming from '../../components/Upcoming';
import Previous from '../../components/Previous';
import { fetchPosts } from '../../state/postsSlice';
import { useDispatch, useSelector } from 'react-redux';



const Reservation = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.posts)

    const [data, setData] = useState([])

    useEffect(() => {
        dispatch(fetchPosts())
            .then(
                (data) => {
                    // console.log(data.payload);
                    let newData = [...data.payload]
                    setData(newData)
                }
            )
            .catch(err => console.log(err))
    }, []);

    const renderItem = ({ item }) => (
        <Previous data={item} />
    );

    const renderFooter = () => {
        if (!loading) return null;
        return (
            <View>
                <ActivityIndicator size="large" />
            </View>
        );
    };

    return (
        <View style={styles.screenWraper}>
            <View style={styles.container}>
                <Text style={styles.declareWord}>
                    upcoming
                </Text>
                <Header />
                <Upcoming />
                <Text style={styles.declareWord}>
                    Previous
                </Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={renderFooter}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenWraper: {
        alignItems: "center",
        flex: 1,
    },
    declareWord: {
        paddingTop: 20,
        fontSize: 20,
        fontWeight: "normal",
        backgroundColor: "##fdfdfdff",
        width: "100%",
        paddingBottom: 10,
        marginBottom: 5,
        marginTop: 20
    },
})

export default Reservation;
