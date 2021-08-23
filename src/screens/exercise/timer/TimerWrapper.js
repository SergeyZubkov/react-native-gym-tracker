import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Timer from './Timer';
import Collapsible from 'react-native-collapsible';

export default function TimerWrapper() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <View>
            <TouchableOpacity onPress={() => setIsCollapsed(isCollapsed => !isCollapsed)}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Таймер</Text>
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                <Timer />
            </Collapsible>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height: 60,
        borderTopWidth: 2,
        borderColor: '#dfdfdf'
    },
    headerText: {
        fontSize: 20,
        lineHeight: 60,
        textAlign: 'center',
    }
})