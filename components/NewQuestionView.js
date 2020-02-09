//import React from 'react'
import React, { Component } from "react"
import { View, StyleSheet, Text, Button,TextInput } from 'react-native'
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native'

function SubmittBtn ({question},{answer}) {
  const navigation = useNavigation();
  return (
    <Button
      title="Submitt"
      onPress={() => {

      }}
      />
  )
}

class NewQuestionView extends Component {
  state = {
    question: '',
    answer: ''
  }
  render () {
    const { text } = this.props
    return (
      <View>
        <Text>{text}</Text>
        <Text>Add Question</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Enter the question"
            onChangeText={(question) => this.setState({question: question})}
            value={this.state.question}
          />
        <Text>{this.state.question}</Text>
        <Text>Add Answer</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Enter the question"
            onChangeText={(answer) => this.setState({answer: answer})}
            value={this.state.answer}
          />
        <Text>{this.state.answer}</Text>
        <SubmittBtn />
      </View>
    )
  }
}

function mapStateToProps (state, { text } ) {
  return {
    text
  }
}
export default connect(mapStateToProps)(NewQuestionView)
