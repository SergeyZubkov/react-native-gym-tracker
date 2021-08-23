import React, {useState} from 'react';
import { StyleSheet, View, Text, Pressable, Button } from 'react-native';
import NumberKeyboard from './NumberKeyboard';
import { Feather } from '@expo/vector-icons'; 

export default function NumberInput({
    value,
    onCancel,
    onChange,
    onSubmit
}) {
    // const [value, setValue] = useState(value);

    const prepend = (string, char) => {
        const chars = string.split('')
        chars.push(char)
        return chars.slice(-2).join("")
    }

    const append = (string, char) => {
        const chars = string.split('')
        chars.unshift(char)
        return chars.slice(0, 2).join("")
    }

    return (
        <View styles={styles.container}>
            <View style={styles.value}>
                <Text style={styles.valueText}>
                   {value} 
                </Text>
                <View>
                    <Pressable onPress={() => onChange(append(value, '0'))}>
                        <Feather name="delete" size={40} color="black" />
                    </Pressable>
                </View>
            </View>
            <NumberKeyboard onKeyPress={(k) => onChange(value => prepend(value, k))}/>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button color="#d3d3d3" title="Отмена" onPress={onCancel}/>
                </View>
                <View style={styles.button} >
                    <Button style={styles.button} title="Ок" onPress={onSubmit}/>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
    },
    value: {
        width: 250,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#cbcaca',
    },
    valueText: {
        fontSize: 50
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    button: {
        width: 100
    }
})