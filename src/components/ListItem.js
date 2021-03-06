import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const listItem = props => (
    <TouchableOpacity onPress={props.onPressItem}>
        <View style={styles.listItem}>
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        margin: 5,
        backgroundColor: '#eee'
    }
})

export default listItem;