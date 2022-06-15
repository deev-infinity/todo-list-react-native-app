import React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ListItem({ el, deleteHandler }) {
    return (
      <TouchableOpacity onPress={() => deleteHandler(el.key)}>
          <Text style={styles.text}>{el.text}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 3,
        backgroundColor: '#fafafa',
        borderWidth: '2px',
        borderColor: '#0B4EBB',
        marginTop: 5,
        paddingTop: 20,
        fontWeight: '400',
        fontSize: 20,
        fontFamily: 'Cochin',
        width: '100%',
        height: 60,
    }
});
