import React, { Component } from "react"
import { View, StyleSheet, Text, Button } from 'react-native'
import TextButon from './TextButon'
import { connect } from "react-redux";

function toggleQuestionCard () {
  (this.state.question=== true) ? (
    this.setState({question: false}),
    console.log('done')
  )
  :
  this.setState({question: true})
}
class QuizQuestionCard extends Component {
  state = {
    question: true
  }
render () {
  const { toggleQuestionCard } = this.props
  return (
    <View>
      {(this.state.question===true) ?
          (<View>
          <Text>Does ... ?</Text>
          <TextButon  onPress={() => this.setState({question: false})}>
            Answer
          </TextButon>
          </View>)
        :
          (<View>
          <Text>Yes it does</Text>
          <TextButon onPress={() => this.setState({question: true})}>
            Question
          </TextButon>
          </View>)
        }
    </View>
  )
}
}
export default QuizQuestionCard
