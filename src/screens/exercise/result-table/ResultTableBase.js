import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from '@deb-95/react-native-table-component';
import { DateString } from '../../../components'

export default function ResultTableBase({
  data,
  bgColor, 
  color,
  borderColor, 
  renderCell = null,
  renderHeader = null
}) {
  // data = {date: .., weigths: [], repetitions: []}
    const {weights, repetitions, date} = data
    const twoDimensionalArray = Object.values({weights, repetitions})
    console.log(twoDimensionalArray)

    let rows;

    if (renderCell) {
      const rowNames = [
        'weights',
        'repetitions'
      ]
      rows = twoDimensionalArray.map(
        (row, rowIndex) => row.map(
          (val, cellIndex) => renderCell(val, cellIndex, rowNames[rowIndex])
        )
      )
    } else {
      rows = twoDimensionalArray
    }

    const header = renderHeader 
      ? renderHeader(styles, date)
      : (<View style={styles.header}>
          <Text style={{
            ...styles.headerTitle,
            color
          }}>
           <DateString value={date} />
          </Text>
        </View>)

    return (
      <View style={[
        styles.container,
        {backgroundColor: bgColor}
      ]}>
        {header}

        <ScrollView horizontal  keyboardShouldPersistTaps="always">
        <Table  style={styles.table} borderStyle={{borderWidth: 1, borderColor: borderColor}}>
          <TableWrapper style={styles.tableWrapper}>
            <Col 
              data={['Вес(кг)', 'Повторы']} 
              style={styles.tableRowTitle} 
              heightArr={[40, 40]} 
              textStyle={[styles.tableRowTitleText, {color}]}
            />
            <Rows data={rows} widthArr={rows[0].map(_ => 50)} heightArr={[40, 40]} style={styles.tableRow} textStyle={styles.tableRowText} />
          </TableWrapper>
        </Table>
        </ScrollView>
      </View>
    )
  }
  

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      alignItems: 'flex-start'
    },
    header: {
      width: "100%",
      paddingBottom: 10,
      paddingTop: 10,
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    },
    headerTitle: {
      fontSize: 20,
      textAlign: 'center',
    },
    table: {
      minWidth: 210
    },
    tableWrapper: {
      flexDirection: 'row',
    },
    tableRow: {
      
    },
    tableRowTitle: {
      minWidth: 150

    },
    tableRowTitleText: {
      fontSize: 18,
      lineHeight: 40,
      padding: 5    
    }
  });