//import React from 'react'
import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'
import { connect } from "react-redux";
import QuizQuestionCard from './QuizQuestionCard'

function quiz (questions) {
  return
}

class QuizView extends Component {
  render () {
    const { id, questionOne, questions } = this.props
    return (
      <View>
        <View>
          <Text>Quiz from: {id}</Text>
          <Text>nr of questions in deck</Text>
          <Text>nr of answeared questions plus 1</Text>
        </View>
        <View>
          <QuizQuestionCard />
          <Button title='correct' />
          <Button title='incorrect' />
        </View>
      </View>
    )
  }
}
function mapStateToProps(state, {id}) {
  const questions = state[id].questions
  const questionOne = questions[0].question

  return {
    id,
    questionOne,
    questions
  }
}
export default connect(mapStateToProps)(QuizView)
