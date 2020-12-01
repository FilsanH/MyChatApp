import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
  SafeAreaView,
  ImageBackground,
  WebView,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import api from '../utilities/api.js'

const image = {
  uri:
    'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60',
}

const users = [
  {
    name: 'Filsan',
    avatar:
      'https://images.pexels.com/photos/3885948/pexels-photo-3885948.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  {
    name: 'Hassan',
    avatar: 'https://www.photosforclass.com/download/px_2007',
  },
  {
    name: 'Mary',
    avatar: 'https://www.photosforclass.com/download/px_933498',
  },
  {
    name: 'John',
    avatar: 'https://www.photosforclass.com/download/px_4555468',
  },
]

const planets = [
  {
    name: 'Mars',
    colour: '#275a95',
  },
  {
    name: 'Jupiter',
    colour: '#184682',
  },
  {
    name: 'Earth',
    colour: '#a9d5f4',
  },
  {
    name: 'Pluto',
    colour: '#81b2e5',
  },
  {
    name: 'Mars',
    colour: '#275a95',
  },
  {
    name: 'Jupiter',
    colour: '#184682',
  },
  {
    name: 'Earth',
    colour: '#a9d5f4',
  },
  {
    name: 'Pluto',
    colour: '#81b2e5',
  },
  {
    name: 'Venus',
    colour: '#81b2e5',
  },
  {
    name: 'Neptune',
    colour: '#81b2e5',
  },
  {
    name: 'Saturn',
    colour: '#81b2e5',
  },
]
const channels = ['one', 'two', 'three']

const Login = ({ navigation }) => {
  // keep track of a user , allowing them to login
  function _onPressButton(_) {
    alert('You tapped the button!')
  }

  const [username, setUsername] = useState('')
  const [channel, setChannel] = useState('hackconf')
  const [printUser, setPrint] = useState('')
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[{ height: 50, backgroundColor: item.colour }, styles.button]}
        onPress={() => console.log(username)}
      >
        <Text style={[styles.boxText]}>Mars</Text>
      </TouchableOpacity>
    )
  }

    api
      .nasaPics()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
              }}
            />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={(username) => setUsername(username)}
            placeholder='Type Username Here!'
            value={username}
          />
          <TouchableOpacity
            style={[{ height: 50, backgroundColor: 'white' }, styles.button]}
            onPress={run()}
          >
            <Text style={[styles.boxText]}>helllo</Text>
          </TouchableOpacity>

          <View style={{ flex: 1, flexDirection: 'column' }}>
            <FlatList
              ListHeaderComponent={
                <Text style={styles.boxText}> Select a Channel!</Text>
              }
              data={planets}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  boxText: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  input: {
    padding: 10,
    backgroundColor: 'white',
    width: '80%',
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  button: {
    width: 'auto',
    padding: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 5,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    borderRadius: 20,
  },
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
  logo: {
    width: 200,
    height: 150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
})

// make a flatlist of users
export default Login
