import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { hadleSaveInitialDeck, hadleSaveDeck } from '../actions/index'
import { _getDecks,  } from '../utils/Api'

class NewDeckView extends Component {
  componentDidMount () {
    // setLocalNotifications()
    _getDecks('decks').then(decksInAsyncStorage => {
         decksInAsyncStorage = JSON.parse(decksInAsyncStorage);
         if (decksInAsyncStorage !== null) {
           this.setState({deck: true})
         }
         console.log("Decks in AsyncStorage: ", decksInAsyncStorage);
       })
     }

  state = {

    text: '',
    deck: false,
  }

  render () {
    const { navigation, savedeck } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Enter the title</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder='Enter the title'
            onChangeText={(text) => this.setState({text: text})}
            value={this.state.text}
          />
        <Text>{this.state.text}</Text>
          <Button
            title='Submitt'
            onPress={() => {
              if (this.state.deck){
                  this.props.dispatch(hadleSaveDeck(this.state.text))
              }
              else {
                  this.props.dispatch(hadleSaveInitialDeck(this.state.text))
              }
               navigation.navigate('Deck', {list:[this.state.text, 0] })
               this.setState({text: ''})
             }}
            />
      </View>
    )
  }
}

export default connect()(NewDeckView)
