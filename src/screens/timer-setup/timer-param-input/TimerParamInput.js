import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NumberInput } from '../../../components';
import { useDispatch } from 'react-redux';
import { changeTimerParam } from '../timerSlice';

export default function TimerParamInput({
    title,
    onCancel,
    onSubmit,
    paramName,
    viewFormatFn
}) {
    const [value, setValue] = useState('00');

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(changeTimerParam({
            paramName,
            value: +value
        }))
        onSubmit()
    }

    return (
        <View styles={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    {title}
                </Text>
            </View>
            <View style={styles.viewValue}>
                <Text style={styles.viewValueText}>
                    {viewFormatFn&&viewFormatFn(value)||
                        +value.toString()
                    }
                </Text>
            </View>
            <NumberInput
                value={value}
                onChange={setValue}
                onCancel={onCancel}
                onSubmit={handleSubmit}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
    },
    title: {
        borderBottomWidth: 1,
        padding: 10,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: "700"
    },
    viewValue: {
        padding: 20,
        alignItems: 'center'
    },
    viewValueText: {
        fontSize: 18
    },
})