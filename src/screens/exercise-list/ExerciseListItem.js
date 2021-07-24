import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import { get } from './ExerciseListSlice';

export default function ExerciseListItem({title}) {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    return (
      <TouchableHighlight
        underlayColor="#e1e2e1"
        onPress={() => {
          dispatch(get())
          navigation.navigate('Упражнение', {title})
        }} 
      >
        <Text style={styles.item}>{title}</Text>
      </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    item: {
      fontSize: 22,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      borderTopColor: "#efefef",
      borderTopWidth: 1
    },
});