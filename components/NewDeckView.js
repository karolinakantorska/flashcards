import React, { Component } from "react"
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import addDeck from '../actions/index.js'


function SubmittBtn ({id}) {
  const navigation = useNavigation();
  return (
    <Button
      title="Submitt"
      onPress={() => {
        addDeck(id)
        navigation.navigate('AddQuestion', {id: id})
      }}
      />
  )
}

class NewDeckView extends Component {
  state = {
    text: '',
  }

  render () {
    const {setText} = this.props
    return (
      <View>
        <Text>Enter the title</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Enter the title"
            onChangeText={(text) => this.setState({text: text})}
            value={this.state.text}
          />
        <Text>{this.state.text}</Text>
        <SubmittBtn id={this.state.text}/>
      </View>
    )
  }
}
export default NewDeckView
            // onSubmitEditing={(text) => this.setState({text: ''})}
