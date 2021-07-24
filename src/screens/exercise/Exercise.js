import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ResultTableForm, ResultTableView } from './result-table';


export default function ExerciseScreen() {
    return (
      <View style={styles.container}>
        <ResultTableView />
        <ResultTableForm />
      </View>
    )
  }
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15
    },
  });