import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default ({ navigation }) => (
  <View style={styles.header}>
    <Text style={styles.title}>Welcome to the App over !!! </Text>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('MessageList', {
          Name: 'Set Name Here ',
        })
      }}
    >
      <Text>SOLARS </Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  header: {
    height: 80,
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
