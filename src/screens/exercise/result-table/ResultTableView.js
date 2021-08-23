import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ResultTableBase from './ResultTableBase';


function Cell({value}) {
    return (
      <View style={styles.cell}>
        <Text style={styles.cellText}>{value}</Text>
      </View>
    )
  }

export default function ResultTableView({data}) {
    console.log(data)
    return (
        <ResultTableBase
            data={data}
            bgColor="#E1E2E1"
            borderColor="rgba(0, 0, 0, 0.1)"
            renderCell={(value, index) => <Cell value={value} key={index} />}
        />
    )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {

    },
    cell: {
    },
    cellText: {
        lineHeight: 40,
        fontSize: 18,
        textAlign: 'center',
    }
  });