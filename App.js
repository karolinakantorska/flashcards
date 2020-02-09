// import 'react-native-gesture-handler'
import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import NewDeckView from './components/NewDeckView'
import NewQuestionView from './components/NewQuestionView'
import DeckListView from './components/DeckListView'
import IndividualDeckComponent from './components/IndividualDeckComponent'
import QuizView from './components/QuizView'
import QuizQuestionCard from './components/QuizQuestionCard'

import { getDecks } from './utils/helpers'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <DeckListView
        style={{ backgroundColor: '#f8ffe6', borderStyle: 'solid' }}
      />
      <Button
        title="Add Deck"
        onPress={() => navigation.navigate('AddDeck')}
      />
      <Button
        title="Delete Deck"
      />
    </View>
  );
}
function AddDeck({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <NewDeckView />
    </View>
  );
}
function AddQuestion({ route, navigation }) {
  const { id } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <NewQuestionView id={id}/>
    </View>
  );
}
function Deck({ route, navigation }) {
  const { id } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <IndividualDeckComponent id={id}/>
    </View>
  );
}
function Quiz({ route, navigation }) {
  const { id } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <QuizView id={id} />
    </View>
  );
}
function QuizQuesCard({ route, navigation }) {
  const { Que } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <QuizQuestionCard Que={Que} />
    </View>
  );
}

function HomeButton({ navigation }) {
  return <Button
    onPress={() => navigation.navigate('Home')}
    title="Home"
    color="#394d00"
  />
}

const Stack = createStackNavigator();

class App extends React.Component {
  componentDidMount() {
    getDecks ()
  }
  render () {
    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
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
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Decks',
               }}
            />
          <Stack.Screen
            name= 'AddDeck'
            component= {AddDeck}
            options={{
              title: 'Add New Deck',
              headerRight: () => (
              <HomeButton />
            ),
            }}
          />
          <Stack.Screen
            name= 'AddQuestion'
            component= {AddQuestion}
            options={{
              title: 'Add New Question',
              headerRight: () => (
              <HomeButton />
            ),
            }}
          />
          <Stack.Screen
            name= 'Deck'
            component= {Deck}
            options={({ route }) => ({
              title: route.params.id,
              headerRight: () => (
              <HomeButton />
              ),
             })}
          />
          <Stack.Screen
            name= 'Quiz'
            component= {Quiz}
            options={({ route }) => ({
              title:`Quiz: ${route.params.id}` ,
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
export default App;
