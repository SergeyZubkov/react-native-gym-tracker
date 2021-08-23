import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { toMinSec } from '../../../utils';
import useSound from '../../../hooks/useSound';

export default function Timer() {
    const navigation = useNavigation()
    const { workInterval, restInterval  } = useSelector(state => state.timer)
    const [playAsync, stopAsync] = useSound('start')

    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <View style={styles.btnTop}>
                    <TouchableOpacity>
                        <Text style={styles.leftSectionText}>
                            Сбросить
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnBottom}>
                    <TouchableOpacity onPress={() => navigation.navigate('Установка таймера')}>
                        <Text style={styles.rightSectionText}>
                            Изменить
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.middleSection}>
                <View style={styles.workInterval}>
                    <Text style={[styles.workIntervalText, styles.timeText]}>
                        {toMinSec(workInterval)}
                    </Text>
                </View>
                <View style={styles.restInterval}>
                    <Text style={[styles.restIntervalText, styles.timeText, styles.timeTextInactive]}>
                        {toMinSec(restInterval)}
                    </Text>
                </View>
                <View style={styles.commonTime}>
                    <Text style={[styles.commonTimeText, styles.timeText]}>
                        {toMinSec(restInterval + workInterval)}
                    </Text>
                </View>
            </View>
            <View style={styles.rightSection}>
                <TouchableOpacity onPress={playAsync}>
                    <Text style={styles.rightSectionText}>Старт</Text>
                </TouchableOpacity>
            </View>
            <Countdown 
                
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#d32f2f',
        height: 80,
        alignItems: 'stretch',
        backgroundColor: "#d32f2f"
    },
    leftSection: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 2,
        backgroundColor: "white",
        overflow: 'hidden'
    },
    leftSectionText: {
        textAlign: 'center',
        color: "#d32f2f",
        textTransform: 'uppercase',
        fontWeight: "700",
    },
    btnTop: {
        borderBottomWidth: 1,
        borderColor: "#d32f2f",
        width: '100%',
        height: '50%',
        justifyContent: 'center'
    },  
    btnBottom: {
        borderTopWidth: 1,
        borderColor: "#d32f2f",
        width: '100%',
        height: '50%',
        justifyContent: 'center',
    },
    rightSection: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 2,
        backgroundColor: "white",
        overflow: 'hidden'
    },
    rightSectionText: {
        textAlign: 'center',
        color: "#d32f2f",
        textTransform: 'uppercase',
        fontWeight: "700",
    },
    middleSection: {
        flex:2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: "#d32f2f",
        alignItems: 'center',

    },
    timeText: {
        color: "white",
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 20
    },
    timeTextInactive: {
        color: 'rgba(255, 255, 255, 0.6)'
    },
    workInterval: {
        justifyContent: 'center',
        height: '50%'
    },
    workIntervalText: {

    },
    restInterval: {
        justifyContent: 'center'
    },
    restIntervalText: {

    },
    commonTime: {
        width: '90%',
        justifyContent: 'center',
        height: "50%",
        borderTopWidth: 2,
        borderColor: "rgba(255, 255, 255, 0.3)"
    },
    commonTimeText: {

    }
})