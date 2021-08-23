import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default function NumberKeyboard({
    onKeyPress
}) {
    const numbers = [
        1,2,3,4,5,6,7,8,9,0
    ]
    return (
        <View style={styles.container}>
            {numbers.map(n => (
                <TouchableHighlight 
                    style={{borderRadius: 90}}
                    onPress={() => 
                    onKeyPress(n.toString())} key={n}
                    underlayColor="#efefef"
                >
                    <View style={styles.number}>
                        <Text style={styles.numberText}>{n}</Text>
                    </View>
                </TouchableHighlight>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 35,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    number: {
        borderRadius: 100,
        width: 90,
        height: 90,
        justifyContent: 'center'
    },
    numberText: {  
        fontSize: 35,
        padding: 20,
        color: 'black',
        textAlign: 'center'
    }
})