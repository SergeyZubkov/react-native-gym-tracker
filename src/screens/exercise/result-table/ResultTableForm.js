import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import ResultTableBase from './ResultTableBase';

function Cell({value = 0, index, onChange, rowName}) {

  const handleChange = val => {
    val = +val

    if (Number.isNaN(val)) return 
    console.log(val)
    if (!val) val = 0 
    onChange(rowName, index, val)
  }
  return (
    <View style={styles.cell}>
      <TextInput
          style={styles.cellText}
          name={index}
          value={value}
          keyboardType="numeric"
          onChangeText={handleChange}
      />
    </View>
  )
}

function Header({
  styles,
  color,
  showBtnSubmit
}) {
  return (
    <View style={styles.header}>
      <Text style={{
        ...styles.headerTitle,
        color
      }}>Date</Text>
      {
        showBtnSubmit&&(<View>
          <Text>
            +
          </Text>
        </View>)
      }
    </View>
  )
}

export default function ResultTableForm(
  onDataAvailable
) {
  const [state, setState] = useState({
    weights: [0],
    repetitions: [0]
  })
  const handleChangeCell = (key, index, val) => {
    console.log(key, index, val)

    setState(prevState => {
      let nextState = {
        ...prevState, 
        [key]: state[key].map(
          (v, i) => i === index ? val : v
        )
      }

      if (
        index === state[key].length - 1 &&
        (nextState.weights[prevState.weights.length-1] !== 0 && nextState.repetitions[prevState.repetitions.length-1] !== 0)
      ) {
        nextState = {
          weights: [...nextState.weights, 0],
          repetitions: [...nextState.repetitions, 0]
        }
      }

      if (
        val === 0 &&
        index !== state[key].length - 1 &&
        Object.keys(nextState).filter(k => k !== key).every(k => nextState[k][index] === 0)
      ) {
        console.log('remove column')
        nextState = Object.keys(nextState).reduce(
          (state, key) => {
            state[key] = nextState[key].filter((_, idx) => idx !== index )
            return state
          }
        , {})
      }
      
      return nextState
    })
  }

  const firstKey = Object.keys(state)[0];
  let dataAvailable = false;
  if (
    state[firstKey].some((val, i) => {
      return val&&
            Object.keys(state).filter(k => k !== firstKey).every(k => state[k][i])
    })
  ) {
    dataAvailable = true
  }

  return (
      <ResultTableBase
          data={state}
          color="white"
          bgColor="#d32f2f"
          renderCell={
            (value, index, rowName) => (
              <Cell 
                value={value} 
                index={index} 
                key={index} 
                onChange={handleChangeCell} 
                rowName={rowName} 
              />
          )}
          renderHeader={
            (styles) => <Header styles={styles} color="white" showBtnSubmit={dataAvailable} />
          }
      />
  )
}

  const styles = StyleSheet.create({
    cell: {
    },
    cellText: {
        lineHeight: 40,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',

    }
  });