import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Countdown({
    until = 0,
    rate = 1000,
    styleView,
    styleText
}) {
    const [number, setNumber] = useState(
        Math.max(until, 0)
    )
    const ref = useRef(number)

    useEffect(() => {
        const update = () => {
            if (ref.current === 1) {
                clearInterval(interval)
            }
    
            setNumber(number => --number)
        }
        
        const interval = setInterval(
           update
        , rate)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        ref.current = number
    })
    return (
        <View style={styleView}>
            <Text style={styleText}>
                {number}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({})