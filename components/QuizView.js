//import React from 'react'
import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'
import TextButon from './TextButon'
import { connect } from "react-redux";

class QuizView extends Component {
  render () {
    const { id, questionOne } = this.props
    return (
      <View>
        <Text>Does ... ?</Text>
        <Text>{id}</Text>
        <Text>{questionOne}</Text>
        <TextButon>
          Answer
        </TextButon>
        <Button title='correct' />
        <Button title='incorrect' />
      </View>
    )
  }
}
function mapStateToProps(state, {id}) {
  const questions = state[id].questions
  const questionOne = questions[0].question
  return {
    id,
    questionOne
  }
}
export default connect(mapStateToProps)(QuizView)
