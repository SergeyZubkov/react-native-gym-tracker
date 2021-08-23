import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableHighlight, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { toMinSec } from '../../utils';
import TimerParamInput from './timer-param-input';

export default function TimerSetup() {
    const { restInterval, workInterval, rounds } = useSelector(state => state.timer);
    const [modalVisibility, setModalVisibility] = useState({
        restInterval: false,
        workInterval: false,
        rounds: false
    });

    const timerParams = [
        {paramName: 'Время тренировки', value: toMinSec(workInterval), key: 'workInterval'},
        {paramName: 'Время отдыха', value: toMinSec(restInterval), key: 'restInterval'},
        {paramName: 'Раунды', value: rounds.toString(), key: 'rounds'}
    ]

    const showModal = key => {
        setModalVisibility({
            ...modalVisibility,
            [key]: true
        })
    }

    const hideModal = key => {
        console.log(key)
        setModalVisibility({
            ...modalVisibility,
            [key]: false
        })
    }

    const handleSubmit = () => dispatch(changeTimer())

    return (
        <View>
            <Text style={styles.header}>Текущие настройки</Text>
            <FlatList 
                style={styles.list}
                keyExtractor={item => item.paramName}
                data={timerParams}
                renderItem={
                    ({item, index, seperators}) => (
                    <TouchableHighlight
                        underlayColor="#e1e2e1"
                        onPress={() => showModal(item.key)}
                    >
                        <View style={styles.item}>
                            <Text style={styles.itemTitle}>{item.paramName}</Text>
                            <Text style={styles.itemValue}>{item.value}</Text>
                        </View>
                    </TouchableHighlight>
                    )}
            />
            {timerParams.map(p => (
                <Modal
                    key={p.key}
                    animationType="slide"
                    transparent={false}
                    visible={modalVisibility[p.key]}
                    onRequestClose={() => {
                        hideModal(p.key);
                    }}
                >
                    <View style={styles.modalView}>
                        <TimerParamInput 
                            title={p.paramName} 
                            paramName={p.key}
                            onCancel={() => hideModal(p.key)}
                            onSubmit={() => hideModal(p.key)}
                            viewFormatFn={p.key !== 'rounds' ? toMinSec : null}
                        />
                    </View>
                </Modal>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        borderBottomColor: "#efefef",
        borderBottomWidth: 1
    },
    header: {
        fontSize: 18,
        textAlign: 'center',
        padding: 7
    },
    item: {
        backgroundColor: 'white',
        borderTopColor: "#efefef",
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingLeft: 15,
        paddingRight: 15
    },
    itemTitle: {
        fontSize: 16,
        color: "#464646",
    },
    itemValue: {
        fontSize: 18
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    }
})