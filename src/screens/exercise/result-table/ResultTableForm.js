import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import ResultTableBase from './ResultTableBase';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addResult } from '../resultListSlice'
import { DateString } from '../../../components';

function Cell({value = 0, index, onChange, rowName}) {

  const handleChange = val => {
    val = +val

    if (Number.isNaN(val)) return 
    let a = val;
    console.log(a)
    onChange(rowName, index, val.toString())
  }

  const ref = useRef()

  return (
    <TouchableOpacity
      activeOpacity={1} 
      style={{flex: 1}}
      onPress={() => ref.current.focus()}>
    <View style={styles.cell} pointerEvents="none">
      <TextInput  
          ref={ref}
          style={styles.cellText}
          name={index}
          value={value.toString()}
          keyboardType="numeric"
          onChangeText={handleChange}
          
      />
    </View>
    </TouchableOpacity>
  )
}

function Header({
  styles,
  color,
  date,
  showBtnSubmit,
  onSubmit
}) {
  return (
    <View style={styles.header}>
      <Text style={{
        ...styles.headerTitle,
        color
      }}>
        <DateString value={date} />
      </Text>
      {
        showBtnSubmit&&(<TouchableOpacity
          onPress={onSubmit}
        >
           <Ionicons name="md-checkmark-sharp" size={28} color="white" />
        </TouchableOpacity>)
      }
    </View>
  )
}

export default function ResultTableForm() {
  const [state, setState] = useState({
    weights: [12, 12, 2, 4, 5, 5, 6,7],
    repetitions: [12, 12, 2, 4, 5, 5, 6,7]
  })

  const date = new Date();

  const dispatch = useDispatch()

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

  const handleSubmit = () => {
    dispatch(addResult({
      date: date.toISOString(),
      ...state
    }))
  }

  return (
      <ResultTableBase
          data={state}
          color="white"
          bgColor="#d32f2f"
          borderColor="rgba(255, 255, 255, 0.3)"
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
            (styles) => <Header 
              styles={styles} 
              date={date} 
              color="white" 
              showBtnSubmit={dataAvailable} 
              onSubmit={handleSubmit}
            />
          }
      />
  )
}

  const styles = StyleSheet.create({
    cell: {
      backgroundColor: '#be2a2a',
      // position: 'absolute', 
      // zIndex: 1, 
    },
    cellText: {
        height: 40,
        lineHeight: 40,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'transparent'
    }
  });