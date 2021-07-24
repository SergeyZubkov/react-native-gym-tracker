import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import ResultTableBase from './ResultTableBase';

function Cell({defaultValue = undefined, index}) {
    const [value, setValue] = useState(defaultValue)
    return (
      <View style={styles.cell}>
        <TextInput
            defaultValue={'12'}
            style={styles.cellText}
            name={index}
            value={value}
            keyboardType="numeric"
        />
      </View>
    )
  }

export default function ResultTableForm() {
    return (
        <ResultTableBase
            color="white"
            bgColor="#d32f2f"
            renderCell={(value, index) => <Cell value={value} key={index} />}
        />
    )
}

  const styles = StyleSheet.create({
    cell: {
        flexBasis: 50,
        borderColor: 'white',
        borderRightWidth: 1,
    },
    cellText: {
        lineHeight: 40,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    }
  });