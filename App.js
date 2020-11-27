import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Header from './Header'
import MessageList from './screens/MessageList'
import Composer from './screens/Composer'

import Navigator from './routes/homeStack'

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Screen,
} from 'react-native'
import { send, subscribe } from './chatServer'

const NAME = 'Filsan'
const CHANNEL = 'hackconf'
const AVATAR =
  'https://pbs.twimg.com/profile_images/1180146316267143173/-2ST_BYP_400x400.jpg'

// item we render anf latlist takes in mesage as data

export default function App() {
  return <MessageList></MessageList>
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
    flexDirection: 'row',
  },
  message: {
    fontSize: 18,
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    flex: 1,
  },
  send: {
    alignSelf: 'center',
    color: 'teal',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
    margin: 10,
  },
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10,
  },
  rowText: {
    flex: 1,
  },
})
