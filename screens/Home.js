import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native'

const users = [
  {
    name: 'Filsan',
    avatar:
      'https://images.pexels.com/photos/3885948/pexels-photo-3885948.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  {
    name: 'Hassan',
    avatar:
      'https://images.pexels.com/photos/3885948/pexels-photo-3885948.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  {
    name: 'Mary',
    avatar:
      'https://images.pexels.com/photos/3885948/pexels-photo-3885948.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
  {
    name: 'John',
    avatar:
      'https://images.pexels.com/photos/3885948/pexels-photo-3885948.jpeg?auto=compress&cs=tinysrgb&h=350',
  },
]

const Home = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MessageList', {
            Name: item.name,
            Avatar: item.avatar,
          })
        }}
      >
        <Text style={styles.title}>{item.name} Account </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Welcome to the App over !!! </Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

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

// make a flatlist of users
export default Home
