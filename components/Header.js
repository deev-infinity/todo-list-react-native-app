import React from "react";
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
        <View style={styles.main}>
          <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
        main: {
            paddingTop: 60,
            height: 100,
            backgroundColor: '#010020'
        },
        text: {
            fontSize: 18,
            fontWeight: "700",
            color: '#FA932F',
            textAlign: 'center',
            paddingBottom: 15,
        }
});
