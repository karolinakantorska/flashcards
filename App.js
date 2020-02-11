import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers";
import middleware from './middleware'

import NewDeckView from './components/NewDeckView'
import NewQuestionView from './components/NewQuestionView'
import DeckListView from './components/DeckListView'
import IndividualDeckComponent from './components/IndividualDeckComponent'
import QuizView from './components/QuizView'
import QuizQuestionCard from './components/QuizQuestionCard'
import { handleInitialData } from './actions/index'


function Deck({ route, navigation }) {
  const { id } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <IndividualDeckComponent id={id}/>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <DeckListView
      />
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

function HomeButton() {
  const navigation = useNavigation();
  return <Button
    onPress={() => navigation.navigate('Home')}
    title="Home"
    color="#394d00"
  />
}

const Stack = createStackNavigator();

class App extends React.Component {

  render () {

    return (
      <Provider store={createStore(reducer, middleware)}>
        <NavigationContainer >
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
              component= {NewDeckView}
              options={{
                title: 'Add New Deck',
                headerRight: () => (
                <HomeButton />
              ),
              }}
            />
            <Stack.Screen
              name= 'AddQuestion'
              component= {NewQuestionView}

              options={{
                title: 'Add New Question',
                headerRight: () => (
                <HomeButton />
              ),
              }}
            />
            <Stack.Screen
              name= 'Deck'
              component= {IndividualDeckComponent}
              initialParams=
              options={({ route }) => ({
                title: route.params.id,
                headerRight: () => (
                <HomeButton />
                ),
               })}
            />
            <Stack.Screen
              name= 'Quiz'
              component= {QuizView}
              initialParams= {({ route }) => ( {id = ${route.params.id}} )  }
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
export default App
