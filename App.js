import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import { send, subscribe } from './chatServer'

const NAME = 'Filsan'
const CHANNEL = 'hackconf'

// item we render anf latlist takes in mesage as data
const renderItem = ({ item }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  )
}

export default function App() {
  // new lines below...
  const [messages, setMessages] = React.useState([]) //initial state is an empty array
  //setMessages is a functin that updated the message

  React.useEffect(() => {
    subscribe(CHANNEL, (messages) => {
      setMessages(messages)
    })
  }, [])

  //use effect hooks runs once when the component is first mounted has two arguments where the secon id
  // only want to run this function once so no second argument but if we want infite loop then add in [messages] so event triggered everytime there is a change

  //...end new lines

  const [text, setText] = React.useState('')

  return (
    <View style={styles.container}>
      <FlatList data={messages} renderItem={renderItem} inverted />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  message: {
    fontSize: 18,
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
})
