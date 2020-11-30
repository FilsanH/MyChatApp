import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
import Home from './screens/Home'
import MessageList from './screens/MessageList'
import Images from './screens/MessageList'
import Header from './screens/Header'
import Composer from './screens/Composer'
import Login from './screens/Login'
import Profile from './screens/Profile'
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

const CHANNEL = 'hackconf'

// item we render anf latlist takes in mesage as data

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Profile' component={Profile} /> */}
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='MessageList' component={MessageList} />
        <Stack.Screen name='Images' component={Images} />
      </Stack.Navigator>
    </NavigationContainer>
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
