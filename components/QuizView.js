//import React from 'react'
import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'
import { connect } from "react-redux";
import QuizQuestionCard from './QuizQuestionCard'

class QuizView extends Component {
  state = {
    ansQ: 0,
    correct: 0
  }
  render () {
    const { id, questions, nrQuestions } = this.props
    return (
      <View>
        { (this.state.ansQ === nrQuestions) ?
          (<Text style={{fontSize: 20 }}>correct: {this.state.correct} / {nrQuestions}</Text>)
        :
        (<View>
          <View>
            <Text>Quiz: {id}</Text>
            <Text> {this.state.ansQ} / {nrQuestions}</Text>
            <Text>correct: {this.state.correct}</Text>
          </View>
          <View>
            <QuizQuestionCard  Que={questions[this.state.ansQ]}/>
            <Button title='correct' onPress={(state) => this.setState({ansQ: this.state.ansQ +1, correct: this.state.correct +1 })}/>
            <Button title='incorrect' onPress={(state) => this.setState({ansQ: this.state.ansQ +1})}/>
          </View>
        </View>)
        }
      </View>

    )
  }
}
function mapStateToProps(state, {id}) {
  const questions = state[id].questions

  const questionKeyList = Object.keys(state)
  const nrQuestions = questionKeyList.length + 1

  return {
    id,
    questions,
    nrQuestions,
  }
}
export default connect(mapStateToProps)(QuizView)
