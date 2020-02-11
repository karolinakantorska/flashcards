import React, { Component } from "react"
import { View, StyleSheet, Text, Button,TextInput } from 'react-native'
import { connect } from "react-redux";
import { handleGetDeck} from '../actions/index'
import { hadleSaveQuestion } from '../actions/index'



class NewQuestionView extends Component {
  state = {
    question: '',
    answer: ''
  }
  render () {
    // TODO remove navi
    const { navigation } = this.props
    const { id, state } = this.props
    return (
      <View>
        <Text>{id}</Text>
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
          <Button
            title="Submitt"
            onPress={() => {
              this.props.dispatch(hadleSaveQuestion(id, this.state.answer, this.state.question))
              this.setState({question: '', answer: ''})
            }}
            />
      </View>
    )
  }
}

function mapStateToProps (state, { id } ) {
  return {
    id,
    state
  }
}
export default connect(mapStateToProps)(NewQuestionView)
