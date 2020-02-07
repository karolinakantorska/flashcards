// import 'react-native-gesture-handler'
import * as React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import NewDeckView from './components/NewDeckView'
import NewQuestionView from './components/NewQuestionView'
import DeckListView from './components/DeckListView'
import IndividualDeckComponent from './components/IndividualDeckComponent'
import QuizView from './components/QuizView'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
        <DeckListView
          style={{ backgroundColor: '#f8ffe6', borderStyle: 'solid' }}
          />
      </TouchableOpacity>
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
function AddQuestion({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <NewQuestionView />
    </View>
  );
}
function Deck({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <IndividualDeckComponent />
    </View>
  );
}
function Quiz({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <QuizView />
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

function App( ) {
  return (
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
        options={{
          title: 'Deck',
          headerRight: () => (
          <HomeButton />
        ),
        }}
      />
      <Stack.Screen
        name= 'Quiz'
        component= {Quiz}
        options={{
          title: 'Quiz',
          headerRight: () => (
          <HomeButton />
        ),
        }}
      />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
