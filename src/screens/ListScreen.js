import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = function () {
    const friends = [
        { name: 'Friend 1', age: '20' },
        { name: 'Friend 2', age: '45' },
        { name: 'Friend 3', age: '32' },
        { name: 'Friend 4', age: '27' },
        { name: 'Friend 5', age: '53' },
        { name: 'Friend 7', age: '20' },
    ];

    return <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={function ({ item }) {
            const info = item.name + ' - Age ' + item.age;
            return <Text style={styles.textStyle}>{info}</Text>;
        }} />
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 3
    }
});

export default ListScreen;