import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default (props) => (
  <View style={styles.header}>
    <Text style={styles.title}>#{props.title}</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
})
