import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ResultTableForm, ResultTableView } from './result-table';


export default function ExerciseScreen() {
    return (
      <View style={styles.container}>
        <ResultTableForm />
        <ResultTableView />
      </View>
    )
  }
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });