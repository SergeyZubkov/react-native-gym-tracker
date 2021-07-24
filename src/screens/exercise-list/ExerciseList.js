import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ExerciseListItem from './ExerciseListItem';

import { useSelector, useDispatch } from 'react-redux';

const exercises = [
    "Упражнение 1",
    "Упражнение 2",
    "Упражнение 3",
    "Упражнение 4",
    "Упражнение 5",
    "Упражнение 6",
    "Упражнение 7",
    "Упражнение 8",
  ]

export default function ExerciseList() {
    const state = useSelector(state => state)
    console.log(state)
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList 
            keyExtractor={(item, index) => item}
            style={styles.list}
            data={exercises}
            renderItem={({item, index, separators}) => (
              <ExerciseListItem 
                title={item} 
              />
            )}
          />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    list: {
      borderBottomColor: "#efefef",
      borderBottomWidth: 1
    },
  });