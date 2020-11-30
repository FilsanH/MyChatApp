import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

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
const channels = ['one', 'two', 'three']

const Login = ({ navigation }) => {
  // keep track of a user , allowing them to login

  const [username, setUsername] = useState('')
  const [channel, setChannel] = useState('hackconf')
  const [printUser, setPrint] = useState('')

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        color='#2196F3'
        type='outline'
        title={item}
        onPress={() => console.log(username)}
      />
    )
  }

  return (
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
      <View>
        <TouchableOpacity onPress={() => console.log()}>
          <Text>Mars</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Jupiter</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Pluto</Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        <Text>Select A Channel</Text>
        <FlatList
          data={channels}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          // contentContainerStyle={{ alignSelf: 'flex-start' }}
          // numColumns={channels.length / 2}
          // showsVerticalScrollIndicator={false}
          // showsHorizontalScrollIndicator={false}
        />
      </View> */}
      <Button
        color='#2196F3'
        type='outline'
        title='Login!!'
        onPress={() => console.log(username)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C7C7CC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 200,
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
