//import React from 'react'
import React, { Component } from "react"
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function SubmittBtn ({text}) {
  const navigation = useNavigation();
  return (
    <Button
      title="Submitt"
      onPress={() => {
        navigation.navigate('AddQuestion', {text: text})
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
        <SubmittBtn text={`deck: ${this.state.text}`}/>
      </View>
    )
  }
}
export default NewDeckView
            // onSubmitEditing={(text) => this.setState({text: ''})}
