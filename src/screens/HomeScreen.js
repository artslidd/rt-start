import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View>
            <Text style={styles.text}>Hello world !</Text>
            <Button
                onPress={function () { navigation.navigate('Component') }}
                title='Go to Components Demo' />
            <Button onPress={function () { navigation.navigate('List') }} title='Go to List Demo' />
            <Button onPress={function () { navigation.navigate('Image') }} title='Go to Image Screen Demo' />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});
