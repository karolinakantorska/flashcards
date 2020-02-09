//import React from 'react'
import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'
import { connect } from "react-redux";
import QuizQuestionCard from './QuizQuestionCard'

function quiz (questions) {
  return
}



class QuizView extends Component {
  state = {
    ansQ: 0,
  }
  render () {
    const { id, questions, nrQuestions } = this.props
    return (
      <View>
        <View>
          <Text>Quiz: {id}</Text>
          <Text> {this.state.ansQ} / {nrQuestions}</Text>
        </View>
        <View>

          <QuizQuestionCard  Que={questions[this.state.ansQ]}/>
          <Button title='correct' onPress={(state) => this.setState({ansQ: this.state.ansQ +1})}/>
          <Button title='incorrect' />
        </View>
      </View>
    )
  }
}



function mapStateToProps(state, {id}) {
  const questions = state[id].questions
  const questionOne = questions[0].question

  const questionKeyList = Object.keys(state)
  const nrQuestions = questionKeyList.length

  return {
    id,
    questions,
    nrQuestions,
  }
}
export default connect(mapStateToProps)(QuizView)
