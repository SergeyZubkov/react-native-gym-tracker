import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ResultTableForm, ResultTableView } from './result-table';
import { useSelector } from 'react-redux';
import Timer from './timer';



export default function ExerciseScreen() {
  const results = useSelector(store => store.results)

    return (
      <View style={styles.container}>
        <ResultTableForm />
        <FlatList 
          data={results}
          keyExtractor={(item, index) => index + ''}
          renderItem={
            ({item, index}) => <ResultTableView data={item}/>
          }
        />
        <View style={{zIndex: 1, }}>
          <Timer />
        </View>
      </View>
    )
  }
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

  });