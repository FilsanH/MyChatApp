import { createStackNavigator } from 'react-naavigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import MessageList from '../screens/MessageList'

// screens are in order of order you want them to appear in
const screens = {
  Home: {
    screen: Home,
  },
  MessageList: {
    screen: MessageList,
  },
}

const homeStack = createStackNavigator(screens)

export default createAppContainer(homeStack)
