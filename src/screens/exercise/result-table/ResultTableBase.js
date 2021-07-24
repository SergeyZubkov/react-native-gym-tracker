import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Row({
  title, 
  items, 
  renderCell, 
  color
}) {
  return (
    <View style={{
      ...styles.tableRow,
      borderColor: color
    }}>
      <View style={{
        ...styles.tableRowHeader,
        borderColor: color
      }}>
        <Text style={{
          ...styles.tableRowHeaderText,
          color
        }}>
          {title}
        </Text>
      </View>
      {items.map((val, index) => renderCell(val, index))}
    </View>
  )
}

export default function ResultTableBase({
  bgColor, 
  color, 
  renderCell
}) {
    return (
      <View style={{
        ...styles.container,
        backgroundColor: bgColor
      }}>
        <View style={styles.header}>
          <Text style={{
            ...styles.headerTitle,
            color
          }}>Date</Text>
        </View>
        <View style={{
          ...styles.table,
          borderColor: color,
        }}>
          <Row 
            title="Вес"
            items={[10, 10]}
            renderCell={renderCell}
            color={color}
          />
          <Row 
            title="Повторы"
            items={[10, 10]}
            renderCell={renderCell}
            color={color}
          />
        </View>
      </View>
    )
  }
  

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingLeft: 1,
      paddingRight: 1
    },
    table: {
      borderBottomWidth: 1,
    },
    header: {
      paddingBottom: 10,
      paddingTop: 10,
    },
    headerTitle: {
      fontSize: 20,
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      height: 40,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
    },
    tableRowHeader: {
      flexBasis: 98,
      paddingLeft: 10,
      paddingRight: 10,
      borderRightWidth: 1,
    },
    tableRowHeaderText: {
      fontSize: 18,
      lineHeight: 40,
    }
  });