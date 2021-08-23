import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function DateString({value, style}) {
    return typeof value === 'object' 
        ? value.toLocaleDateString() 
        : new Date(value).toLocaleDateString()
    
}
const styles = StyleSheet.create({})