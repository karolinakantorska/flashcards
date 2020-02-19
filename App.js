import * as React from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import middleware from './middleware'
import { setLocalNotifications } from './utils/helpers'

import NewDeckView from './components/NewDeckView'
import NewQuestionView from './components/NewQuestionView'
import DeckListView from './components/DeckListView'
import IndividualDeckComponent from './components/IndividualDeckComponent'
import QuizView from './components/QuizView'
import QuizQuestionCard from './components/QuizQuestionCard'



function AddQuestion ({ route, navigation }) {
  const { id } = route.params
  return (
    <NewQuestionView id={id} />
  )
}
function Deck ({ route, navigation }) {
  const { list } = route.params
  return (
    <IndividualDeckComponent list={list} />
  )
}
function Quiz ({ route, navigation }) {
  const { id } = route.params
  return (
    <QuizView id={id} />
  )
}

function HomeButton () {
  const navigation = useNavigation()
  return (
    <Button
      onPress={() => navigation.navigate('Home')}
      title='Home'
      color='#394d00'
    />
  )
}

const Stack = createStackNavigator()

class App extends React.Component {

  componentDidMount () {
    // setLocalNotifications()

     }

  render () {

    return (
      <Provider store={createStore(reducer, middleware)}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              headerStyle: {
                backgroundColor: '#394d00',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen
              name='Home'
              component={DeckListView}
              options={{
                title: 'Decks',
              }}
            />
            <Stack.Screen
              name= 'AddDeck'
              component= {NewDeckView}
              options={{
                title: 'Add New Deck',
                headerRight: () => (
                  <HomeButton />
                ),
              }}
            />
            <Stack.Screen
              name='AddQuestion'
              component={AddQuestion}
              options={{
                title: 'Add New Question',
                headerRight: () => (
                  <HomeButton />
                ),
              }}
            />
            <Stack.Screen
              name='Deck'
              component={Deck}
              options={({ route }) => ({
                title: route.params.id,
                headerRight: () => (
                  <HomeButton />
                ),
              })}
            />
            <Stack.Screen
              name='Quiz'
              component={Quiz}
              options={({ route }) => ({
                title: `Quiz: ${route.params.id}`,
                headerRight: () => (
                  <HomeButton />
                ),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>

      </Provider>
    );
  }
}
export default App
