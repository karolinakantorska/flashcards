import React, { Component } from "react"
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { hadleSaveDeck } from '../actions/index'

class NewDeckView extends Component {
  state = {
    text: '',
  }

  render () {
    const { navigation } = this.props
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
          <Button
            title="Submitt"
            onPress={() => {
              this.props.dispatch(hadleSaveDeck(this.state.text))
              navigation.navigate('Deck', {id: this.state.text})
              this.setState({text: ''})
            }}
            />
      </View>
    )
  }
}

export default connect()(NewDeckView)
