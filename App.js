import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// import DeckListView from './components/DeckListView'

// export default function App () {
//   return (
//       <View>
//         <Text>Open up App.js to start working on your app!</Text>
//         <DeckListView />
//       </View>
//   )
// }

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);
